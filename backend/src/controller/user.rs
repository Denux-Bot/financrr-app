use crate::api::ApiError;
use actix_identity::Identity;
use actix_web::web::Json;
use actix_web::{delete, error, post, web, Error, HttpMessage, HttpRequest, HttpResponse, Responder};

use crate::authentication::{Credentials, UserLogin};
use crate::util::utoipa::Unauthorized;

pub fn user_controller(cfg: &mut web::ServiceConfig) {
	cfg.service(web::scope("/user").service(login).service(logout));
}

#[utoipa::path(post,
responses(
(status = 200, description = "Successfully logged in", content_type = "application/json"),
(status = 401, response = Unauthorized)
),
path = "/api/v1/user/login",
request_body = Credentials,
tag = "User")]
#[post("/login")]
pub async fn login(request: HttpRequest, credentials: Json<Credentials>) -> impl Responder {
	// TODO only try to authenticate when the user isn't already logged in
	match UserLogin::authenticate(credentials.into_inner()).await {
		Some(user) => Identity::login(&request.extensions(), user.id.to_string()).unwrap(),
		None => return HttpResponse::Unauthorized(),
	};

	HttpResponse::Ok()
}

#[utoipa::path(delete,
responses(
(status = 200, description = "Successfully logged out"),
(status = 401, response = Unauthorized)
),
path = "/api/v1/user/logout",
tag = "User")]
#[delete("/logout")]
pub async fn logout(identity: Identity) -> actix_web::Result<impl Responder> {
	is_identity_valid(&identity)?;
	identity.logout();

	Ok(HttpResponse::Ok())
}

fn is_identity_valid(identity: &Identity) -> Result<(), Error> {
	match identity.id() {
		Ok(_) => Ok(()),
		Err(_) => Err(error::ErrorUnauthorized(ApiError::invalid_session())),
	}
}
