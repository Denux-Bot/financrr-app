//! `SeaORM` Entity. Generated by sea-orm-codegen 0.12.10

use chrono::Local;
use sea_orm::entity::prelude::*;
use sea_orm::ActiveValue::Set;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[sea_orm(table_name = "account")]
pub struct Model {
	#[sea_orm(primary_key)]
	pub id: i32,
	pub owner: i32,
	#[sea_orm(column_type = "Text")]
	pub name: String,
	#[sea_orm(column_type = "Text", nullable)]
	pub description: Option<String>,
	#[sea_orm(column_type = "Text", nullable, unique)]
	pub iban: Option<String>,
	pub balance: i32,
	pub currency: i32,
	pub created_at: DateTime,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
	#[sea_orm(
		belongs_to = "super::currency::Entity",
		from = "Column::Currency",
		to = "super::currency::Column::Id",
		on_update = "NoAction",
		on_delete = "NoAction"
	)]
	Currency,
	#[sea_orm(
		belongs_to = "super::user::Entity",
		from = "Column::Owner",
		to = "super::user::Column::Id",
		on_update = "NoAction",
		on_delete = "NoAction"
	)]
	User,
	#[sea_orm(has_many = "super::user_account::Entity")]
	UserAccount,
}

impl Related<super::currency::Entity> for Entity {
	fn to() -> RelationDef {
		Relation::Currency.def()
	}
}

impl Related<super::user_account::Entity> for Entity {
	fn to() -> RelationDef {
		Relation::UserAccount.def()
	}
}

impl Related<super::user::Entity> for Entity {
	fn to() -> RelationDef {
		super::user_account::Relation::User.def()
	}
	fn via() -> Option<RelationDef> {
		Some(super::user_account::Relation::Account.def().rev())
	}
}

impl ActiveModelBehavior for ActiveModel {}

impl Entity {
	pub fn find_all_for_user(user_id: &i32) -> Select<Self> {
		Self::find().filter(Column::Owner.eq(user_id.to_owned()))
	}

	pub fn find_by_id_and_user(id: &i32, user_id: &i32) -> Select<Self> {
		Self::find().filter(Column::Id.eq(id.to_owned())).filter(Column::Owner.eq(user_id.to_owned()))
	}
}

impl ActiveModel {
	pub fn new(
		user_id: &i32,
		name: &str,
		description: &Option<String>,
		iban: &Option<String>,
		balance: &i32,
		currency_id: &i32,
	) -> Self {
		Self {
			id: Default::default(),
			owner: Set(user_id.to_owned()),
			name: Set(name.to_string()),
			description: Set(description.to_owned()),
			iban: Set(iban.to_owned()),
			balance: Set(balance.to_owned()),
			currency: Set(currency_id.to_owned()),
			created_at: Set(Local::now().naive_local()),
		}
	}
}
