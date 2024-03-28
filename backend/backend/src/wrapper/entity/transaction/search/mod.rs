use tracing::info;

use crate::wrapper::entity::transaction::search::index::TransactionIndex;
use crate::wrapper::search::Searchable;

pub(crate) mod index;
pub(crate) mod query;

pub(crate) async fn init_transactions_search() {
    info!("Creating index for transactions...");
    TransactionIndex::create_index().await;

    info!("(Starting task) Indexing transactions...");
    TransactionIndex::index().await.expect("Failed to index transactions");
}
