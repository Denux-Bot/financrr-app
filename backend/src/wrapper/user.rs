use actix_identity::Identity;
use actix_web::dev::Payload;
use actix_web::{FromRequest, HttpRequest};
use chrono::NaiveDateTime;
use futures_util::future::LocalBoxFuture;
use sea_orm::EntityTrait;
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use validator::Validate;

use entity::user;
use entity::user::Model;

use crate::api::error::ApiError;
use crate::util::entity::{count, find_one_or_error};
use crate::util::identity::validate_identity;
use crate::wrapper::types::phantom::Identifiable;

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, Validate, ToSchema)]
pub struct User {
	pub id: i32,
	pub username: String,
	pub email: Option<String>,
	pub password: String,
	pub created_at: NaiveDateTime,
	pub is_admin: bool,
}

impl Identifiable for User {
	async fn from_id(id: i32) -> Result<Self, ApiError>
	where
		Self: Sized,
	{
		Self::find_by_id(id).await
	}
}

impl User {
	pub async fn find_by_id(id: i32) -> Result<Self, ApiError> {
		Ok(Self::from(find_one_or_error(user::Entity::find_by_id(id), "User").await?))
	}

	pub async fn user_exists(id: i32) -> Result<bool, ApiError> {
		Ok(count(user::Entity::find_by_id(id)).await? > 0)
	}
}

impl From<user::Model> for User {
	fn from(value: Model) -> Self {
		Self {
			id: value.id,
			username: value.username,
			email: value.email,
			password: value.password,
			created_at: value.created_at,
			is_admin: value.is_admin,
		}
	}
}

impl FromRequest for User {
	type Error = ApiError;
	type Future = LocalBoxFuture<'static, Result<Self, Self::Error>>;

	fn from_request(req: &HttpRequest, _payload: &mut Payload) -> Self::Future {
		let req = req.clone();
		Box::pin(async move {
			let user_id = validate_identity(&Identity::extract(&req).into_inner()?)?;
			Self::find_by_id(user_id).await
		})
	}
}
