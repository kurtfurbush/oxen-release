
from pydantic import BaseModel
from abc import ABC, abstractmethod
from oxen.harvest import SavedGeneration, Generation

class BaseSaver(BaseModel, ABC):
    """Implement the _save method to save off the data to an oxen repo in the correct format."""
    
    @abstractmethod
    def _save(
        self,
        generation: Generation,
    ) -> SavedGeneration:
        """Save the generation."""
