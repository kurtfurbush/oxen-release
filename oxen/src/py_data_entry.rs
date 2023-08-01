use pyo3::prelude::*;

use liboxen::{model::{RemoteRepository, MetadataEntry}, error::OxenError};

#[pyclass]
pub struct PyDataEntry {
    _url: String,
}

#[pymethods]
impl PyDataEntry {
    fn __repr__(&self) -> String {
        format!("PyDataEntry(url={})", self._url)
    }

    #[getter]
    pub fn url(&self) -> &str {
        &self._url
    }
}

impl PyDataEntry {
    pub fn from_meta(repo: &RemoteRepository, entry: MetadataEntry, commit_id: &str) -> Result<PyDataEntry, OxenError> {
        let url = format!("{}/file/{}/{}", repo.api_url()?, commit_id, entry.filename);
        Ok(PyDataEntry {
            _url: url,
        })
    }
}