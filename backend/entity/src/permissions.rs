//! `SeaORM` Entity. Generated by sea-orm-codegen 1.0.0-rc.2

use sea_orm::entity::prelude::*;
use sea_orm::QuerySelect;
use serde::{Deserialize, Serialize};

use crate::account;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[sea_orm(table_name = "permissions")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub user_id: i32,
    #[sea_orm(primary_key, auto_increment = false, column_type = "Text")]
    pub entity_type: String,
    #[sea_orm(primary_key, auto_increment = false)]
    pub entity_id: i32,
    pub permissions: i32,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::user::Entity",
        from = "Column::UserId",
        to = "super::user::Column::Id",
        on_update = "Cascade",
        on_delete = "Cascade"
    )]
    User,
}

impl Related<super::user::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::User.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}

impl Entity {
    pub fn find_all() -> Select<Self> {
        Entity::find()
    }

    pub fn count_all() -> Select<Self> {
        Entity::find().column(Column::UserId)
    }

    pub fn find_permission(user_id: i32, entity_type: &str, entity_id: i32) -> Select<Self> {
        Entity::find()
            .filter(Column::UserId.eq(user_id))
            .filter(Column::EntityType.eq(entity_type))
            .filter(Column::EntityId.eq(entity_id))
    }

    pub fn find_all_accounts_for_user(user_id: i32) -> Select<Self> {
        Entity::find()
            .filter(Column::UserId.eq(user_id))
            .filter(Column::EntityType.eq(account::Entity.table_name().to_string()))
    }

    pub fn find_account_by_id_and_user(account_id: i32, user_id: i32) -> Select<Self> {
        Entity::find()
            .filter(Column::UserId.eq(user_id))
            .filter(Column::EntityId.eq(account_id))
            .filter(Column::EntityType.eq(account::Entity.table_name().to_string()))
    }

    pub fn find_users_with_permissions(entity_type: &str, entity_id: i32, permissions: i32) -> Select<Self> {
        Entity::find()
            .filter(Column::EntityType.eq(entity_type))
            .filter(Column::EntityId.eq(entity_id))
            .filter(Column::Permissions.eq(permissions))
    }
}
