use pyo3::prelude::*;

use liboxen::model::StagedData as OxenStagedData;

// use crate::error::PyOxenError;

#[pyclass]
pub struct StagedData {
    pub data: OxenStagedData
}

#[pymethods]
impl StagedData {
    pub fn added_files(&self) -> PyResult<Vec<String>> {
        Ok(self.data.added_files.iter().map(|f| String::from(f.0.to_string_lossy())).collect())
    }
}

