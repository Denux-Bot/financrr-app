use std::io::Result;
use std::sync::OnceLock;
use std::time::Duration;

use actix_cors::Cors;
use actix_limitation::{Limiter, RateLimiter};
use actix_web::middleware::{Compress, DefaultHeaders, NormalizePath, TrailingSlash};
use actix_web::web::Data;
use actix_web::{
    error,
    web::{self},
    App, HttpResponse, HttpServer,
};
use actix_web_prom::{PrometheusMetrics, PrometheusMetricsBuilder};
use actix_web_validator::{Error, JsonConfig, PathConfig, QueryConfig};
use dotenvy::dotenv;
use tracing::info;
use utoipa::openapi::security::{Http, HttpAuthScheme, SecurityScheme};
use utoipa::openapi::OpenApi as OpenApiStruct;
use utoipa::{Modify, OpenApi};
use utoipa_swagger_ui::SwaggerUi;
use utoipauto::utoipauto;

use entity::utility::loading::load_schema;
use migration::Migrator;
use migration::MigratorTrait;

use crate::api::routes::account::controller::account_controller;
use crate::api::routes::budget::controller::budget_controller;
use crate::api::routes::currency::controller::currency_controller;
use crate::api::routes::session::controller::session_controller;
use crate::api::routes::transaction::controller::transaction_controller;
use crate::api::routes::user::controller::user_controller;
use crate::api::status::controller::status_controller;
use crate::config::{logger, Config};
use crate::databases::connections::init_data_sources;
use crate::databases::connections::psql::get_database_connection;
use crate::databases::redis::clear_redis;
use crate::util::validation::ValidationErrorJsonPayload;
use crate::wrapper::entity::session::Session;
use crate::wrapper::entity::transaction;
use crate::wrapper::permission::cleanup::schedule_clean_up_task;

pub(crate) mod api;
pub(crate) mod config;
pub(crate) mod databases;
pub(crate) mod event;
pub(crate) mod scheduling;
pub(crate) mod util;
pub(crate) mod wrapper;

pub(crate) static CONFIG: OnceLock<Config> = OnceLock::new();

#[utoipauto(paths = "./backend/src")]
#[derive(OpenApi)]
#[openapi(
tags(
(name = "Status", description = "Endpoints that contain information about the health status of the server."),
(name = "Metrics", description = "Endpoints for prometheus metrics."),
(name = "Session", description = "Endpoints for session management."),
(name = "User", description = "Endpoints for user management."),
(name = "Account", description = "Endpoints for finance-account management."),
(name = "Currency", description = "Endpoints for currency management."),
(name = "Transaction", description = "Endpoints for transaction management."),
(name = "Budget", description = "Endpoints for budget management.")
),
modifiers(& BearerTokenAddon)
)]
pub(crate) struct ApiDoc;

pub(crate) struct BearerTokenAddon;

impl Modify for BearerTokenAddon {
    fn modify(&self, openapi: &mut OpenApiStruct) {
        let components = openapi.components.as_mut().unwrap(); // we can unwrap safely since there already are components registered.
        components.add_security_scheme("bearer_token", SecurityScheme::Http(Http::new(HttpAuthScheme::Bearer)))
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    dotenv().ok();
    let _guard = logger::configure(); // We need to keep the guard alive to keep the logger running.

    info!("Starting up...");
    CONFIG.set(Config::load()).expect("Could not load config!");

    info!("\t[*] Initializing data sources...");
    init_data_sources().await;

    info!("\t[*] Cleaning redis...");
    clear_redis().await.expect("Could not clear redis!");

    info!("\t[*] Loading schema...");
    load_schema(get_database_connection()).await;

    info!("\t[*] Migrating database...");
    Migrator::up(get_database_connection(), None).await.expect("Could not migrate database!");

    info!("\t[*] Loading sessions...");
    Session::init().await.expect("Could not load sessions!");

    info!("\t[*] Starting up event system...");
    event::init();

    info!("\t[*] Scheduling clean up task...");
    schedule_clean_up_task();

    transaction::search::init().await;

    // Make instance variable of ApiDoc so all worker threads gets the same instance.
    let openapi = ApiDoc::openapi();

    info!("\t[*] Initializing rate limiter...");
    let limiter = Data::new(build_rate_limiter());

    info!("\t[*] Initializing prometheus metrics...");
    let prometheus_metrics = build_prometheus_metrics();

    info!("Starting server... Listening on: {}", Config::get_config().address);

    HttpServer::new(move || {
        App::new()
            .wrap(Compress::default())
            .wrap(build_cors())
            .wrap(prometheus_metrics.clone())
            .app_data(JsonConfig::default().error_handler(|err, _| handle_validation_error(err)))
            .app_data(QueryConfig::default().error_handler(|err, _| handle_validation_error(err)))
            .app_data(PathConfig::default().error_handler(|err, _| handle_validation_error(err)))
            .app_data(limiter.clone())
            .configure(configure_api)
            .service(SwaggerUi::new("/swagger-ui/{_:.*}").url("/api-docs/openapi.json", openapi.clone()))
    })
    .bind(&Config::get_config().address)?
    .run()
    .await
}

fn handle_validation_error(err: Error) -> actix_web::Error {
    let json_error = match &err {
        Error::Validate(error) => ValidationErrorJsonPayload::from(error),
        _ => ValidationErrorJsonPayload {
            message: err.to_string(),
            fields: Vec::new(),
        },
    };
    error::InternalError::from_response(err, HttpResponse::BadRequest().json(json_error)).into()
}

fn configure_api(cfg: &mut web::ServiceConfig) {
    let default_headers =
        DefaultHeaders::new().add(("Content-Type", "application/json")).add(("Accept", "application/json"));

    cfg.service(
        web::scope("/api")
            .wrap(RateLimiter::default())
            .wrap(default_headers)
            .wrap(NormalizePath::new(TrailingSlash::Trim))
            .configure(configure_api_v1)
            .configure(status_controller),
    );
}

fn configure_api_v1(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/v1")
            .configure(user_controller)
            .configure(account_controller)
            .configure(currency_controller)
            .configure(transaction_controller)
            .configure(budget_controller)
            .configure(session_controller),
    );
}

fn build_cors() -> Cors {
    let cors_config = &Config::get_config().cors;
    let mut cors = Cors::default()
        .allowed_methods(vec!["GET", "POST", "PATCH", "DELETE"])
        .allowed_headers(vec!["Authorization", "Content-Type", "Accept"])
        .max_age(3600);

    if cors_config.allow_any_origin {
        cors = cors.allow_any_origin();
    } else {
        cors = cors.allowed_origin_fn(move |origin, _req_head| {
            cors_config.allowed_origins.iter().any(|allowed_origin| {
                if allowed_origin == "*" {
                    return true;
                }
                origin == allowed_origin
            })
        });
    }

    cors
}

fn build_rate_limiter() -> Limiter {
    Limiter::builder(Config::get_config().cache.get_url())
        .key_by(|req| Some(req.peer_addr().map(|addr| addr.ip().to_string()).unwrap_or_else(|| "unknown".to_string())))
        .limit(Config::get_config().rate_limiter.limit as usize)
        .period(Duration::from_secs(Config::get_config().rate_limiter.duration_seconds)) // 60 minutes
        .build()
        .unwrap()
}

fn build_prometheus_metrics() -> PrometheusMetrics {
    PrometheusMetricsBuilder::new("api").endpoint("/metrics").build().unwrap()
}
