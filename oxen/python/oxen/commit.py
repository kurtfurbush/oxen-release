from oxen import PyCommit
from pydantic import BaseModel
from datetime import datetime
from typing import List


class Commit(BaseModel):
    """
    The Commit class represents a commit id, message, timestamp and author information.
    """
    
    id: str
    message: str
    author: str
    timestamp: datetime
    parent_ids: List[str]

    @classmethod
    def from_py(cls, py_commit: PyCommit) -> "Commit":
        """
        Create a Commit object from a PyCommit object.

        Args:
            py_commit: `PyCommit`
                A PyCommit object.
        """
        
        return cls(
            id=py_commit.id(),
            message=py_commit.message(),
            author=py_commit.author(),
            timestamp=datetime.fromtimestamp(py_commit.timestamp()),
            parent_ids=py_commit.parent_ids()
        )