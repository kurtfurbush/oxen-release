
def filename_from_prompt(prompt: str, extension: str) -> str:
    # hyphen delimited filename
    return prompt.replace(" ", "-") + "." + extension