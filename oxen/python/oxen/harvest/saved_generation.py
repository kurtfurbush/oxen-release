
from dataclasses import dataclass
from oxen import DataEntry
from .generation import Generation

# SavedGeneration is a subclass of Generation that has the data entry and data frame row, so that the API is the same for getting the response whether you saved or not
@dataclass(kw_only=True)
class SavedGeneration(Generation):
    """Output of a single generation."""

    entry: DataEntry
    """Generated oxen entry."""

    # annotation: DataFrameRow
    # """Row in a data frame that was generated."""

