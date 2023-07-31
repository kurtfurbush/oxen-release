from oxen import PyBranch


class Branch:
    """
    The Branch class represents a branch name and an underlying commit id.
    """

    def __init__(self, name: str, commit_id: str):
        """
        Create a new Branch object.

        Args:
            name: `str`
                Name of the branch
            commit_id: `str`
                Commmit
        """
        self._branch = PyBranch(name, commit_id)        
    
    @property
    def name(self):
        """
        Returns the branch name.
        """
        return self._branch.name()
    
    @property
    def commit_id(self):
        """
        Returns the commit id.
        """
        return self._branch.commit_id()