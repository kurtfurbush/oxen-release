
from dataclasses import dataclass
from oxen import DataType

@dataclass(kw_only=True)
class Generation:
    """Output of a single generation."""

    data_type: DataType
    """Type of the data."""

    prompt: str
    """A representation of the input data. Could be a prompt or any type of data."""

    response: str
    """A representation of the response data."""


