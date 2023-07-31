
from pydantic import BaseModel
from abc import ABC, abstractmethod
from oxen.harvest.generation import Generation

class BaseGenerator(BaseModel, ABC):
    """Generative AI wrapper should take in a prompt and return an image, audio, video, etc."""
    
    @abstractmethod
    def _generate(
        self, prompt: str
    ) -> Generation:
        """Run the model on a given prompt."""
