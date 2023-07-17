import json
import os

from typing import Optional
from oxen import PyRemoteRepo


class RemoteRepo:
    """
    Remote repository object that allows you to interact with a remote oxen repository.
    """

    def __init__(self, path: str, host: str = "hub.oxen.ai", revision: str = "main"):
        """
        Create a new RemoteRepo object to interact with.

        Parameters
        ----------
        path : str
            Name of the repository in the format `namespace/repo_name`.
            For example `ox/chatbot`
        host : str
            The host to connect to. Defaults to `hub.oxen.ai`
        revision: str
            The branch name or commit id to checkout. Defaults to `main`
        """
        self._repo = PyRemoteRepo(path, host, revision)

    def __repr__(self):
        return f"RemoteRepo({self._repo.url()})"

    @property
    def namespace(self) -> str:
        """
        The namespace for the repo.
        """
        return self._repo.namespace()

    @property
    def name(self) -> str:
        """
        The name of the repo.
        """
        return self._repo.name()

    @property
    def url(self) -> str:
        """
        The remote url for the repo.
        """
        return self._repo.url()

    @property
    def revision(self) -> str:
        """
        The branch or commit id for the repo
        """
        return self._repo.revision()

    def create(self):
        """
        Will create the repo on the remote server.
        """
        self._repo.create()

    def exists(self) -> bool:
        """
        Checks if this remote repo exists on the server.
        """
        return self._repo.exists()

    def delete(self):
        """
        Delete this remote repo from the server.
        """
        self._repo.delete()

    def checkout(self, revision: str, create=False):
        """
        Switches the remote repo to the specified revision.

        Parameters
        ----------
        revision : str
            The name of the branch or commit id to checkout.
        create : bool
            Whether to create a new branch if it doesn't exist. Default: False
        """
        if create:
            return self._repo.create_branch(revision)

        self._repo.checkout(revision)

    def ls(
        self, directory: Optional[str] = None, page_num: int = 1, page_size: int = 100
    ):
        """
        Lists the contents of a directory in the remote repo.

        Parameters
        ----------
        directory : str
            The directory to list. If None, will list the root directory.
        page_num : int
            The page number to return. Default: 1
        page_size : int
            The number of items to return per page. Default: 100
        """
        if directory is None:
            return self._repo.ls("", page_num, page_size)

        return self._repo.ls(directory, page_num, page_size)

    def download(self, remote_path: str, local_path: Optional[str] = None, revision: str = ""):
        """
        Download a file or directory from the remote repo.

        Parameters
        ----------
        remote_path : str
            The path to the remote file
        local_path : str | None
            The path to the local file. If None, will download to
            the same path as remote_path
        revision : str
            The branch or commit id to download. Defaults to `self.revision`
        """
        if local_path is None:
            local_path = remote_path
            # create parent dir if it does not exist
            directory = os.path.dirname(local_path)
            if directory and not os.path.exists(directory):
                os.makedirs(directory, exist_ok=True)

        print(f"GOT REVISION {revision}")
        print(f"GOT SELF.REVISION {self.revision}")
        if revision == "":
            self._repo.download(remote_path, local_path, self.revision)
        else:
            self._repo.download(remote_path, local_path, revision)

    def add(self, local_path: str, directory: str = ""):
        """
        Stage a file to the remote workspace

        Parameters
        ----------
        path: str
            The path to the local file to be staged
        directory: str
            The path in the remote repo where the file will be added
        """
        self._repo.add(directory, local_path)

    def remove(self, path: str):
        """
        Unstage a file from the remote workspace

        Parameters
        ----------
        path: str
            The path to the file on remote to be removed from staging
        """
        self._repo.remove(path)

    def restore_df(self, path: str):
        """
        Unstage any changes to the schema or contents of a dataframe file
        on the remote repo

        Parameters
        ----------
        path: str
            The path to the df on the remote to be restored
        """
        self._repo.restore_df(path)

    def status(self, path: str = ""):
        """
        Get the status of the remote repo. Returns a StagedData object.

        Parameters
        ----------
        path: str
            The directory or file path on the remote that
            will be checked for modifications
        """
        return self._repo.status(path)

    def commit(self, message: str):
        """
        Commit the staged data in the remote repo with a message.

        Parameters
        ----------
        message : str
            The commit message.
        """
        self._repo.commit(message)

    def log(self):
        """
        Get the commit history for a remote repo
        """
        return self._repo.log()

    def branches(self):
        """
        List all branches for a remote repo
        """
        return self._repo.list_branches()

    def add_df_row(self, path: str, row: dict):
        """
        Adds a row to the dataframe at the specified path on the remote repo

        Parameters
        ----------
        path: str
            Path to the dataframe on the remote repo
        row: dict
            A dictionary representing the row to be added to the dataframe,
            where keys are column names and values are the values to be inserted.
            Schema must exactly match DF on remote repo.
        """
        data = json.dumps(row)
        return self._repo.add_df_row(path, data)

    def get_branch(self, branch: str):
        """
        Return a branch by name on this repo, if exists

        Parameters
        ----------
        branch: str
            The name of the branch to return
        """
        return self._repo.get_branch(branch)

    def create_branch(self, branch: str):
        """
        Return a branch by name on this repo,
        creating it from the currently checked out branch if it doesn't exist

        Parameters
        ----------
        branch: str
            The name to assign to the created branch
        """
        return self._repo.create_branch(branch)
    
    def create_checkout_branch(self, branch: str):
        """
        Create a new branch from the currently checked out branch,
        and switch to it

        Parameters
        ----------
        branch: str
            The name to assign to the created branch
        """
        self.create_branch(branch)
        return self.checkout(branch)
