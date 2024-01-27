use sea_orm::ModelTrait;
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use validator::Validate;

use entity::account::Model;
use entity::user;

use crate::api::error::ApiError;
use crate::util::entity::find_all_or_error;
use crate::util::validation::validate_iban;

#[derive(Deserialize, ToSchema, Validate)]
pub struct AccountCreation {
	#[validate(length(min = 1))]
	pub name: String,
	#[validate(length(min = 1))]
	pub description: Option<String>,
	#[validate(custom = "validate_iban")]
	pub iban: Option<String>,
	#[validate(range(min = 0))]
	pub balance: i32,
	#[validate(range(min = 0))]
	pub currency_id: i32,
	pub linked_user_ids: Option<Vec<i32>>,
}

#[derive(Serialize, ToSchema)]
pub struct Account {
	pub id: i32,
	pub name: String,
	pub description: Option<String>,
	pub iban: Option<String>,
	pub balance: i32,
	pub currency_id: i32,
	pub linked_user_ids: Vec<i32>,
}

impl Account {
	pub async fn from_db_model(value: Model) -> Result<Self, ApiError> {
		let linked_users =
			find_all_or_error(value.find_related(user::Entity)).await?.iter().map(|model| model.id).collect();

		Ok(Self {
			id: value.id,
			name: value.name,
			description: value.description,
			iban: value.iban,
			balance: value.balance,
			currency_id: value.currency,
			linked_user_ids: linked_users,
		})
	}
}
