//! `SeaORM` Entity. Generated by sea-orm-codegen 1.0.0-rc.1

use sea_orm::entity::prelude::*;
use sea_orm::ActiveValue::Set;
use serde::{Deserialize, Serialize};

use crate::permissions;
use crate::prelude::Permissions;
use crate::utility::time::get_now;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[sea_orm(table_name = "account")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    #[sea_orm(column_type = "Text")]
    pub name: String,
    #[sea_orm(column_type = "Text", nullable)]
    pub description: Option<String>,
    #[sea_orm(column_type = "Text", nullable, unique)]
    pub iban: Option<String>,
    pub balance: i64,
    pub original_balance: i64,
    pub currency: i32,
    pub created_at: TimeDateTimeWithTimeZone,
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
}

impl Related<super::currency::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Currency.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}

impl Entity {
    pub fn find_all_for_user(user_id: &i32) -> Select<Permissions> {
        let user_id = user_id.to_owned();

        permissions::Entity::find_all_accounts_for_user(user_id)
    }

    pub fn find_by_id_and_user(id: &i32, user_id: &i32) -> Select<Permissions> {
        let id = id.to_owned();
        let user_id = user_id.to_owned();

        permissions::Entity::find_account_by_id_and_user(id, user_id)
    }
}

impl ActiveModel {
    pub fn new(
        name: &str,
        description: &Option<String>,
        iban: &Option<String>,
        balance: &i64,
        currency_id: &i32,
    ) -> Self {
        Self {
            id: Default::default(),
            name: Set(name.to_string()),
            description: Set(description.to_owned()),
            iban: Set(iban.to_owned()),
            balance: Set(balance.to_owned()),
            original_balance: Set(balance.to_owned()),
            currency: Set(currency_id.to_owned()),
            created_at: Set(get_now()),
        }
    }
}