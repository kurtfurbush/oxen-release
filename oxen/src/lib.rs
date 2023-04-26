use pyo3::prelude::*;

pub mod branch;
pub mod clone;
pub mod error;

pub mod py_commit;
pub mod py_remote_repo;
pub mod py_repo;
pub mod py_staged_data;

/// A Python module implemented in Rust.
#[pymodule]
fn oxen(_py: Python, m: &PyModule) -> PyResult<()> {
    pyo3_log::init();
    let mut builder = tokio::runtime::Builder::new_current_thread();
    builder.enable_all();
    pyo3_asyncio::tokio::init(builder);

    m.add_class::<py_repo::PyRepo>()?;
    m.add_class::<py_remote_repo::PyRemoteRepo>()?;
    m.add_class::<py_staged_data::PyStagedData>()?;
    m.add_class::<py_commit::PyCommit>()?;

    m.add_function(wrap_pyfunction!(clone::clone, m)?)?;
    Ok(())
}
