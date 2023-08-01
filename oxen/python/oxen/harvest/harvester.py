
from pydantic import BaseModel
from abc import ABC, abstractmethod
from typing import Optional, Dict, Any

from .generation import Generation
from .saved_generation import SavedGeneration
from .base_generator import BaseGenerator
from .base_saver import BaseSaver
# from oxen.harvest import BaseGenerator, BaseSaver, SavedGeneration, Generation
from oxen import RemoteRepo, Branch


class Harvester(BaseGenerator, BaseSaver, BaseModel):
    """A Harvestor will call _generate and _save and return a SavedGeneration."""
    
    # If the remote_repo and branch are provided, the generation will be saved to the repo.
    remote_repo: Optional[RemoteRepo] = None
    # branch: Optional[Branch] = None
    
    class Config:
        arbitrary_types_allowed = True
    
    def __call__(
        self, prompt: str
    ) -> SavedGeneration:
        """Run the model on a given prompt, and if remote repo is specified save the prompt."""
        generation = self._generate(prompt)
        
        # Throw an error if the remote repo is not specified.
        if self.remote_repo is None:
            raise ValueError(
                "The remote_repo must be specified to save the generation."
            )
        
        return self._save(prompt, generation)
        
    def generate(
        self, prompt: str
    ) -> Generation:
        """Run the model on a given prompt, and do not save the response."""
        return self._generate(prompt)
