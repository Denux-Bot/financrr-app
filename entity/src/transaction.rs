//! `SeaORM` Entity. Generated by sea-orm-codegen 0.12.10

use sea_orm::prelude::DateTime;
use sea_orm::{
	ActiveModelBehavior, DeriveEntityModel, DerivePrimaryKey, DeriveRelation, EntityTrait, EnumIter, PrimaryKeyTrait,
	Related, RelationDef, RelationTrait,
};
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[sea_orm(table_name = "transaction")]
pub struct Model {
	#[sea_orm(primary_key)]
	pub id: i32,
	pub source: Option<i32>,
	pub destination: Option<i32>,
	pub amount: i32,
	pub currency: i32,
	#[sea_orm(column_type = "Text", nullable)]
	pub description: Option<String>,
	pub created_at: DateTime,
	pub executed_at: DateTime,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
	#[sea_orm(
		belongs_to = "super::account::Entity",
		from = "Column::Destination",
		to = "super::account::Column::Id",
		on_update = "NoAction",
		on_delete = "NoAction"
	)]
	Account2,
	#[sea_orm(
		belongs_to = "super::account::Entity",
		from = "Column::Source",
		to = "super::account::Column::Id",
		on_update = "NoAction",
		on_delete = "NoAction"
	)]
	Account1,
	#[sea_orm(
		belongs_to = "super::currency::Entity",
		from = "Column::Currency",
		to = "super::currency::Column::Id",
		on_update = "NoAction",
		on_delete = "NoAction"
	)]
	Currency,
}

impl Related<super::currency::Entity> for Entity {
	fn to() -> RelationDef {
		Relation::Currency.def()
	}
}

impl ActiveModelBehavior for ActiveModel {}

impl Entity {
	/*
	SELECT COUNT(*) AS access_count
	FROM Transaction
	LEFT JOIN AccountUser AS au_source ON Transaction.source = au_source.account_id
	LEFT JOIN AccountUser AS au_destination ON Transaction.destination = au_destination.account_id
	WHERE
		transaction_id = :transactionId
		AND (
			au_source.user_id = :userId
			OR
			au_destination.user_id = :userId
		);
	 */
}
