
from dataclasses import dataclass
from oxen import DataEntry, DataType, DataFrameRow
from oxen.harvest import Generation

# TODO: Make a subclass of Generation that has the data entry and data frame row, so that the API is the same for getting the response whether you saved or not
@dataclass
class SavedGeneration:
    """Output of a single generation."""

    generation: Generation
    """The generation from the model."""

    entry: DataEntry
    """Generated oxen entry."""

    annotation: DataFrameRow
    """Row in a data frame that was generated."""

