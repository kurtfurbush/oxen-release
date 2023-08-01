
from oxen import RemoteRepo
from oxen.data import DataType
from oxen.harvest.image import Dalle


def test_gen_image(
    empty_remote_repo: RemoteRepo
):
    remote_repo = empty_remote_repo

    branch = "test_branch"
    model = Dalle(repo=remote_repo, branch=branch)
    
    prompt = "a spectacular winged ox jumping through a ring of fire"
    image = model(prompt)
    
    assert image.data_type == DataType.IMAGE

