use actix_web::dev::Payload;
use actix_web::web::Json;
use actix_web::{FromRequest, HttpRequest};
use futures_util::future::LocalBoxFuture;
use sea_orm::ActiveValue::Set;
use sea_orm::{EntityName, EntityTrait};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;

use entity::currency;

use crate::api::error::api::ApiError;
use crate::api::pagination::PageSizeParam;
use crate::database::entity::{count, delete, find_all, find_all_paginated, find_one_or_error, insert, update};
use crate::wrapper::entity::currency::dto::CurrencyDTO;
use crate::wrapper::entity::user::User;
use crate::wrapper::entity::WrapperEntity;
use crate::wrapper::permission::{HasPermissionOrError, Permission, Permissions};
use crate::wrapper::types::phantom::{Identifiable, Phantom};

pub mod dto;

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, ToSchema)]
pub struct Currency {
    pub id: i32,
    pub name: String,
    pub symbol: String,
    pub iso_code: String,
    pub decimal_places: i32,
    pub user: Option<Phantom<User>>,
}

impl Currency {
    pub async fn new(creation: CurrencyDTO, user_id: i32) -> Result<Self, ApiError> {
        if !User::exists(user_id).await? {
            return Err(ApiError::ResourceNotFound("User"));
        }

        let currency = currency::ActiveModel {
            id: Default::default(),
            name: Set(creation.name),
            symbol: Set(creation.symbol),
            iso_code: Set(creation.iso_code),
            decimal_places: Set(creation.decimal_places),
            user: Set(Some(user_id)),
        };
        let model = insert(currency).await?;
        let currency = Self::from(model);
        currency.add_permission(user_id, Permissions::all()).await?;

        Ok(currency)
    }

    pub async fn delete(self) -> Result<(), ApiError> {
        delete(currency::Entity::delete_by_id(self.id)).await?;

        Ok(())
    }

    pub async fn find_by_id(id: i32) -> Result<Self, ApiError> {
        Ok(Self::from(find_one_or_error(currency::Entity::find_by_id(id), "Currency").await?))
    }

    pub async fn find_by_id_with_no_user(id: i32) -> Result<Self, ApiError> {
        Ok(Self::from(find_one_or_error(currency::Entity::find_by_id_with_no_user(id), "Currency").await?))
    }

    pub async fn find_by_id_related_with_user(id: i32, user_id: i32) -> Result<Self, ApiError> {
        Ok(Self::from(
            find_one_or_error(currency::Entity::find_by_id_related_with_user(id, user_id), "Currency").await?,
        ))
    }

    pub async fn find_by_id_include_user(id: i32, user_id: i32) -> Result<Self, ApiError> {
        Ok(Self::from(find_one_or_error(currency::Entity::find_by_id_include_user(id, user_id), "Currency").await?))
    }

    pub async fn find_all_with_no_user() -> Result<Vec<Self>, ApiError> {
        Ok(find_all(currency::Entity::find_all_with_no_user()).await?.into_iter().map(Self::from).collect())
    }

    pub async fn find_all_with_no_user_paginated(page_size: &PageSizeParam) -> Result<Vec<Self>, ApiError> {
        Ok(find_all_paginated(currency::Entity::find_all_with_no_user(), page_size)
            .await?
            .into_iter()
            .map(Self::from)
            .collect())
    }

    pub async fn count_all_with_no_user() -> Result<u64, ApiError> {
        count(currency::Entity::find_all_with_no_user()).await
    }

    pub async fn find_all_with_user(user_id: i32) -> Result<Vec<Self>, ApiError> {
        Ok(find_all(currency::Entity::find_all_with_user(user_id)).await?.into_iter().map(Self::from).collect())
    }

    pub async fn find_all_with_user_paginated(user_id: i32, page_size: &PageSizeParam) -> Result<Vec<Self>, ApiError> {
        Ok(find_all_paginated(currency::Entity::find_all_with_user(user_id), page_size)
            .await?
            .into_iter()
            .map(Self::from)
            .collect())
    }

    pub async fn find_all_with_no_user_and_user_paginated(
        user_id: i32,
        page_size: &PageSizeParam,
    ) -> Result<Vec<Self>, ApiError> {
        Ok(find_all_paginated(currency::Entity::find_all_with_no_user_and_user(user_id), page_size)
            .await?
            .into_iter()
            .map(Self::from)
            .collect())
    }

    pub async fn count_all_with_no_user_and_user(user_id: i32) -> Result<u64, ApiError> {
        count(currency::Entity::count_all_with_no_user_and_user(user_id)).await
    }

    pub async fn count_all_with_user(user_id: i32) -> Result<u64, ApiError> {
        count(currency::Entity::find_all_with_user(user_id)).await
    }

    pub async fn find_all(user_id: i32) -> Result<Vec<Self>, ApiError> {
        let mut currencies = Self::find_all_with_no_user().await?;
        let mut user_currencies = Self::find_all_with_user(user_id).await?;
        currencies.append(&mut user_currencies);

        Ok(currencies)
    }

    pub async fn exists(id: i32) -> Result<bool, ApiError> {
        Ok(count(currency::Entity::find_by_id(id)).await? > 0)
    }

    pub async fn update(self, update_dto: CurrencyDTO) -> Result<Self, ApiError> {
        let user_option = self.user.map(|user| user.get_id());
        let active_model = currency::ActiveModel {
            id: Set(self.id),
            name: Set(update_dto.name),
            symbol: Set(update_dto.symbol),
            iso_code: Set(update_dto.iso_code),
            decimal_places: Set(update_dto.decimal_places),
            user: Set(user_option),
        };
        let model = update(active_model).await?;

        Ok(Self::from(model))
    }
}

impl WrapperEntity for Currency {
    fn get_id(&self) -> i32 {
        self.id
    }

    fn table_name(&self) -> String {
        currency::Entity.table_name().to_string()
    }
}

impl Permission for Currency {}

impl HasPermissionOrError for Currency {}

impl Identifiable for Currency {
    async fn from_id(id: i32) -> Result<Self, ApiError>
    where
        Self: Sized,
    {
        Self::find_by_id(id).await
    }
}

impl FromRequest for Currency {
    type Error = ApiError;
    type Future = LocalBoxFuture<'static, Result<Self, Self::Error>>;

    fn from_request(req: &HttpRequest, payload: &mut Payload) -> Self::Future {
        let fut = Json::<Self>::from_request(req, payload);
        let _req = req.clone();
        Box::pin(async move { Ok(fut.await?.into_inner()) })
    }
}

impl From<currency::Model> for Currency {
    fn from(value: currency::Model) -> Self {
        Self {
            id: value.id,
            name: value.name,
            symbol: value.symbol,
            iso_code: value.iso_code,
            decimal_places: value.decimal_places,
            user: value.user.map(Phantom::new),
        }
    }
}
