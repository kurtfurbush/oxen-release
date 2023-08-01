
from pydantic import BaseModel
from pydantic import root_validator
from typing import Optional, Dict, Any

import urllib.request

from oxen.harvest import Harvester, Generation, SavedGeneration
from oxen.harvest.file import filename_from_prompt
from oxen.util import get_from_dict_or_env
from oxen import RemoteRepo, Branch
from oxen.data import DataType

class Dalle(Harvester, BaseModel):
    openai_api_key: Optional[str] = None
    client: Any  #: :meta private:

    @root_validator()
    def validate_environment(cls, values: Dict) -> Dict:
        """Validate that api key and python package exists in environment."""
        
        # openai_api_key
        values["openai_api_key"] = get_from_dict_or_env(
            values, "openai_api_key", "OPENAI_API_KEY"
        )

        try:
            import openai

            values["client"] = openai.Image
        except ImportError:
            raise ImportError(
                "Could not import openai python package. "
                "Please install it with `pip install openai`."
            )

        # remote_repo
        if values["remote_repo"] is None:
            values["remote_repo"] = RemoteRepo()

        return values

    def _generate(self, prompt: str) -> Generation:
        response = self.client.create(
            prompt=prompt,
            n=1,
            size="512x512"
        )
        image_url = response['data'][0]['url']
        return Generation(
            data_type=DataType.IMAGE,
            prompt=prompt,
            response=image_url
        )
    
    def _save(self, gen: Generation) -> SavedGeneration:
        image_url = gen.response
        extension = image_url.split('.')[-1]
        filename = filename_from_prompt(gen.prompt, extension)
        urllib.request.urlretrieve(image_url, filename)
        self.remote_repo.add(filename)
        commit = self.remote_repo.commit(f"Add {filename}")
        entry = self.remote_repo.get_entry(filename, commit)
        return SavedGeneration(
            data_type=gen.data_type,
            prompt=gen.prompt,
            response=gen.response,
            entry=entry
        )
        
