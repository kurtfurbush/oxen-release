Search.setIndex({"docnames": ["concepts/data_frames", "concepts/embedding_search", "concepts/remote_staging", "contributing/documentation", "contributing/python", "contributing/rust", "getting_started/commands", "getting_started/installation", "getting_started/python", "getting_started/tutorials", "index", "references/python/data_loaders/chat_loader", "references/python/data_loaders/image_loader", "references/python/data_loaders/index", "references/python/data_loaders/regression_loader", "references/python/data_loaders_overview", "references/python/local_repo", "references/python/remote_repo", "references/rust"], "filenames": ["concepts/data_frames.md", "concepts/embedding_search.md", "concepts/remote_staging.md", "contributing/documentation.md", "contributing/python.md", "contributing/rust.md", "getting_started/commands.md", "getting_started/installation.md", "getting_started/python.md", "getting_started/tutorials.md", "index.rst", "references/python/data_loaders/chat_loader.rst", "references/python/data_loaders/image_loader.rst", "references/python/data_loaders/index.rst", "references/python/data_loaders/regression_loader.rst", "references/python/data_loaders_overview.md", "references/python/local_repo.rst", "references/python/remote_repo.rst", "references/rust.md"], "titles": ["Data Frames", "Embedding Search", "Remote Staging Workflow", "Writing Documentation", "Python Development", "Rust Development", "Command Line Interface", "Installation", "Python", "Tutorials", "\ud83d\udc02 \ud83c\udf3e Oxen", "Chatbot Loader", "Image Classification Loader", "Data Loaders", "Regression Loader", "Data Loaders", "Local Repo", "Remote Repo", "Rust Documentation"], "terms": {"As": [0, 10], "scientist": 0, "machin": [0, 8, 10, 13, 15], "learn": [0, 6, 8, 10, 13, 15], "engin": [0, 6], "we": [0, 2, 10], "deal": 0, "lot": [0, 2, 10], "tabular": [0, 10, 11, 12, 14], "whether": [0, 16, 17], "i": [0, 2, 4, 6, 7, 8, 10, 13, 15, 18], "csv": [0, 2, 10, 12, 13, 14, 15], "parquet": [0, 2, 10], "line": [0, 8, 10, 12], "delimit": 0, "json": [0, 10], "store": [0, 7, 16], "your": [0, 2, 3, 6, 7, 8, 13, 15, 16], "train": [0, 2, 8, 10, 11, 12, 13, 15], "can": [0, 2, 6, 7, 8, 10, 18], "dice": 0, "To": [0, 2, 3, 7, 8], "follow": [0, 3, 7, 8, 10, 13, 15], "along": 0, "exampl": [0, 2, 8, 10, 11], "below": [0, 13, 15], "feel": [0, 10], "free": [0, 10], "grab": 0, "from": [0, 2, 3, 8, 10, 11, 12, 13, 14, 15, 16, 17], "our": [0, 10], "public": [0, 10], "catdogboundingbox": [0, 2, 10], "repositori": [0, 2, 6, 7, 11, 12, 13, 15, 16, 17], "clone": [0, 8, 10, 11, 12, 14, 16], "http": [0, 2, 7, 8, 10, 11, 12, 14, 16], "hub": [0, 2, 8, 10, 11, 12, 14, 16, 17], "ai": [0, 2, 7, 8, 10, 11, 12, 14, 16, 17], "ox": [0, 2, 8, 10, 16], "cd": [0, 2, 6, 8, 10], "ha": [0, 2, 10], "conveni": [0, 10], "short": 0, "datafram": [0, 2, 10, 11, 12, 14, 17], "thi": [0, 2, 7, 10, 17], "10": [0, 2, 10], "000": [0, 10], "6": [0, 2, 7, 10], "bound": [0, 2], "box": [0, 2], "around": 0, "cat": [0, 2, 8, 10, 13, 15], "dog": [0, 2, 10, 13, 15], "The": [0, 2, 6, 7, 8, 10, 13, 15, 16, 17, 18], "shape": [0, 2, 10, 12], "hint": 0, "top": [0, 2], "make": [0, 2, 3, 6, 8, 10, 13, 15], "sure": [0, 2, 10], "you": [0, 2, 6, 7, 8, 10, 16, 17, 18], "ar": [0, 2, 6, 8, 10, 12, 13, 15, 17], "transform": [0, 10, 13, 15], "correctli": 0, "annot": [0, 2, 10, 12], "10000": [0, 10], "file": [0, 8, 10, 11, 12, 14, 16, 17], "label": [0, 2, 12, 13, 14, 15], "min_x": [0, 2, 10], "min_i": [0, 2, 10], "width": [0, 2, 10], "height": [0, 2, 10], "str": [0, 2, 10, 11, 12, 14, 16, 17], "f64": [0, 2, 10], "imag": [0, 2, 8, 10, 11, 14], "000000128154": [0, 2, 10], "jpg": [0, 2, 10, 13, 15], "0": [0, 2, 7, 10, 11, 12, 13, 14, 15], "19": [0, 2, 10], "27": [0, 2, 10], "130": [0, 2, 10], "79": [0, 2, 10], "129": [0, 2, 10], "58": [0, 2, 10], "000000544590": [0, 2, 10], "9": [0, 2, 10], "75": [0, 2, 10], "13": [0, 2, 10], "49": [0, 2, 10], "214": [0, 2, 10], "25": [0, 2, 10], "188": [0, 2, 10], "35": [0, 2, 10], "000000000581": [0, 2, 10], "37": [0, 2, 10], "67": [0, 2, 10], "74": [0, 2, 10], "29": [0, 2, 10], "116": [0, 2, 10], "08": [0, 2, 10], "000000236841": [0, 2, 10], "115": [0, 2, 10], "21": [0, 2, 10], "96": [0, 2, 10], "65": [0, 2, 10], "93": [0, 2, 10], "87": [0, 2, 10], "42": [0, 2, 10], "000000257301": [0, 10], "84": [0, 10], "85": [0, 10], "161": [0, 10], "09": [0, 10], "33": [0, 10], "1": [0, 2, 7, 10, 12, 13, 14, 15], "51": [0, 10], "26": [0, 10], "000000130399": [0, 10], "63": [0, 2, 10], "157": [0, 2, 10], "14": [0, 10], "53": [0, 10], "000000215471": [0, 10], "126": [0, 10], "18": [0, 2, 10], "71": [0, 2, 10], "95": [0, 2, 10], "36": [0, 10], "47": [0, 10], "81": [0, 2, 10], "000000251246": [0, 10], "23": [0, 10], "90": [0, 10], "97": [0, 2, 10], "32": [0, 10, 13, 15], "power": [0, 10], "librari": [0, 18], "under": [0, 10], "hood": [0, 10], "apach": 0, "arrow": [0, 10], "provid": [0, 13, 15], "cross": 0, "applic": 0, "function": [0, 2, 10], "A": [0, 12, 17], "time": [0, 2, 10], "effort": 0, "save": [0, 10], "befor": [0, 10], "write": 0, "singl": [0, 2], "code": [0, 4, 5, 7, 8, 10], "even": 0, "open": [0, 3, 10], "python": 0, "repl": 0, "juptyer": 0, "notebook": 0, "There": [0, 2, 8, 10], "mani": [0, 10], "wai": [0, 10], "might": [0, 2, 8], "want": [0, 2, 7, 8, 10, 16], "commit": [0, 3, 8, 16, 17], "version": [0, 8, 10, 16], "dataset": [0, 2, 6, 8, 10, 12, 14], "quickli": 0, "see": [0, 2, 10], "all": [0, 2, 3, 8, 10, 12, 16, 17], "option": [0, 10], "run": [0, 3, 7, 8, 10, 11, 12, 13, 14, 15], "help": [0, 10], "handi": [0, 10], "between": [0, 10], "disk": 0, "some": [0, 2, 10], "like": [0, 2, 10], "more": [0, 2, 10], "effici": [0, 10], "differ": [0, 10], "task": [0, 12, 13, 14, 15], "human": 0, "readabl": 0, "tsv": [0, 10, 11], "alwai": [0, 10], "trade": 0, "off": 0, "ll": 0, "have": [0, 2, 8, 10], "decid": 0, "current": [0, 2, 10, 16, 17], "support": [0, 2], "extens": [0, 10], "jsonl": [0, 2, 10], "o": [0, 10], "sometim": 0, "default": [0, 2, 10, 16, 17], "collaps": 0, "them": [0, 10], "so": [0, 2, 10], "thei": 0, "hard": 0, "flag": [0, 2, 10], "just": [0, 10], "displai": 0, "note": [0, 2, 8, 10], "an": [0, 2, 7, 8, 11, 12], "exclus": 0, "dtype": 0, "sai": [0, 2], "subset": [0, 10], "datafil": 0, "anoth": [0, 8, 10], "do": [0, 2, 10, 16], "when": [0, 2, 8, 10], "creat": [0, 8, 11, 12, 13, 15, 16, 17], "test": [0, 10, 13, 15], "valid": 0, "set": [0, 8, 10], "two": [0, 2, 8, 10], "number": 0, "repres": [0, 17], "start": [0, 2, 7, 10], "end": 0, "9000": [0, 2], "000000431980": 0, "98": 0, "3": [0, 10, 13, 15], "110": [0, 2], "46": 0, "69": 0, "64": [0, 2], "000000071025": 0, "55": [0, 2], "105": 0, "45": 0, "160": 0, "15": 0, "73": [0, 2], "57": 0, "000000518015": 0, "43": 0, "72": [0, 2], "4": 0, "34": 0, "000000171435": 0, "22": [0, 10], "86": 0, "100": [0, 2], "03": 0, "125": 0, "41": 0, "61": 0, "often": 0, "split": 0, "peek": 0, "valu": [0, 2, 10, 17], "000000335955": 0, "28": 0, "88": 0, "39": [0, 10], "05": [0, 10], "000000082475": 0, "200": [0, 2], "92": 0, "198": 0, "2": [0, 2, 10, 12], "000000515777": 0, "109": 0, "83": [0, 2], "124": 0, "89": 0, "94": [0, 2], "000000176089": 0, "106": 0, "62": 0, "56": 0, "54": 0, "44": 0, "000000401308": 0, "12": 0, "202": 0, "221": 0, "000000105030": 0, "11": [0, 2], "38": [0, 2], "60": 0, "120": 0, "000000514890": 0, "76": 0, "99": [0, 2], "000000519218": 0, "24": [0, 2], "8": 0, "mayb": 0, "onli": [0, 2, 14], "need": [0, 2, 10], "work": [0, 2], "few": 0, "specifi": [0, 2, 8, 10, 12, 13, 14, 15, 16, 17], "name": [0, 2, 8, 12, 14, 16, 17], "comma": 0, "separ": [0, 10, 12], "list": [0, 2, 12, 14, 17], "built": [0, 10, 13, 15], "cli": 0, "down": [0, 10], "base": [0, 10], "express": 0, "involv": 0, "oper": [0, 2, 8, 13, 15], "logic": 0, "i32": 0, "i64": 0, "f32": 0, "5356": 0, "216": 0, "000000001360": 0, "101": 0, "178": 0, "238": 0, "000000362567": 0, "285": 0, "000000201969": [0, 2], "167": [0, 2], "264": 0, "000000237419": 0, "104": 0, "31": 0, "248": 0, "000000314708": 0, "17": 0, "138": 0, "359": 0, "251": 0, "229": 0, "stack": 0, "back": [0, 2, 10], "variabl": 0, "length": 0, "would": [0, 2, 10], "tmp": 0, "look": 0, "where": [0, 6, 7, 10, 17], "come": [0, 10], "000000279829": 0, "30": 0, "01": 0, "82": 0, "176": 0, "000000209289": 0, "06": 0, "111": 0, "52": 0, "153": 0, "match": [0, 12, 17], "combin": [0, 10], "case": 0, "mai": 0, "project": [0, 10], "col": [0, 10], "val": 0, "is_cut": 0, "unknown": [0, 10], "7": [0, 2], "pain": 0, "append": 0, "without": [0, 2, 10], "easi": [0, 2, 6, 8, 10, 13, 15], "automat": 0, "pars": 0, "correct": [0, 2], "my_cat": [0, 10], "10001": [0, 10], "get": [0, 2, 7, 10, 16, 17], "statist": 0, "about": [0, 2, 10], "track": [0, 10], "stat": 0, "over": [0, 10], "queri": 0, "similar": 0, "lambda": 0, "input": [0, 13, 14, 15], "": [0, 2, 10, 13, 15], "group": 0, "result": 0, "col_0": 0, "min": 0, "col_1": 0, "max": 0, "col_2": 0, "simpl": [0, 10], "find": [0, 7, 10, 18], "distribut": 0, "For": [0, 2, 8, 10, 13, 15], "v": [0, 7], "count": 0, "u32": 0, "4140": 0, "4860": 0, "multipl": [0, 10], "well": [0, 10], "raw": 0, "n_uniqu": 0, "3798": 0, "3525": 0, "here": [0, 7, 8, 10, 18], "minimum": 0, "maximum": 0, "arg_min": 0, "index": [0, 3, 10, 12], "arg_max": 0, "mean": 0, "median": 0, "std": 0, "standard": 0, "deviat": 0, "var": [0, 7], "varianc": 0, "first": [0, 8, 10], "last": 0, "head": [0, 10], "5": 0, "tail": 0, "comput": [0, 10], "given": 0, "u": [0, 10], "achiev": 0, "largest": 0, "000000580919": 0, "000000577310": 0, "132": 0, "193": 0, "000000393384": 0, "000000477398": 0, "185": 0, "195": 0, "000000069205": 0, "224": 0, "000000554737": 0, "000000213819": 0, "207": 0, "77": 0, "000000397212": 0, "also": [0, 2, 7, 10], "context": 0, "up": [0, 7, 10], "guarante": 0, "order": [0, 10], "If": [0, 2, 6, 8, 10, 17], "which": [0, 2, 6, 12], "most": [0, 10], "7128": 0, "000000060202": 0, "000000518156": 0, "000000347879": 0, "000000290136": 0, "000000398285": 0, "000000244933": 0, "000000016950": 0, "000000315555": 0, "tabl": 0, "By": 0, "ascend": 0, "000000092869": 0, "000000038827": 0, "000000470862": 0, "000000292101": 0, "000000345432": 0, "todo": [1, 2, 4, 5, 9], "oxen": [2, 3, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18], "concept": [2, 4, 5], "area": [2, 10], "enabl": [2, 7, 10], "collect": 2, "main": [2, 10, 16, 17], "type": [2, 8, 10, 11], "unstructur": [2, 10], "video": [2, 10], "audio": [2, 10], "text": [2, 10, 11, 12], "structur": [2, 10, 13, 15], "row": [2, 10, 17], "frame": 2, "instead": 2, "entir": [2, 10], "local": [2, 3, 17], "take": [2, 10], "bandwidth": 2, "storag": 2, "directli": [2, 8], "server": [2, 10, 17], "command": [2, 8], "us": [2, 3, 6, 7, 8, 10, 11, 12, 14], "workspac": 2, "etc": [2, 10, 13, 15], "now": [2, 10], "each": [2, 7, 10, 13, 15], "user": [2, 8], "chang": [2, 3, 17], "sand": 2, "own": 2, "ident": [2, 13, 15], "overlap": 2, "other": [2, 8, 10], "One": 2, "problem": [2, 10], "extend": 2, "todai": 2, "download": [2, 7, 8, 17], "whole": 2, "point": [2, 10], "ideal": 2, "larg": [2, 10], "avoid": 2, "extra": 2, "subcommand": [2, 10], "metadata": [2, 12, 16], "themselv": 2, "should": [2, 10], "pass": 2, "b": [2, 10], "l": [2, 10], "been": [2, 10], "pull": [2, 16], "leav": 2, "repo": [2, 10, 11, 12, 13, 14, 15], "state": [2, 10], "until": 2, "fulli": [2, 8], "sync": [2, 10], "after": 2, "push": [2, 3, 8, 16], "everi": [2, 10], "ti": 2, "checkout": [2, 8, 10, 16, 17], "origin": [2, 10, 16], "interact": [2, 8, 10, 16, 17], "simpli": [2, 10], "rel": [2, 12], "path": [2, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17], "mirror": [2, 10], "directori": [2, 3, 6, 8, 12, 16, 17], "mkdir": [2, 8], "my": [2, 6, 8, 10], "dir": [2, 10], "cp": 2, "upload": [2, 18], "absolut": 2, "put": 2, "p": [2, 7], "6f98e855fbc0fd1": 2, "new": [2, 3, 8, 11, 12, 16, 17], "accident": [2, 10], "remov": [2, 17], "worri": [2, 10], "unstag": [2, 10, 17], "rm": [2, 10], "right": [2, 10], "regardless": 2, "allow": [2, 10, 16, 17], "readi": [2, 13, 15], "call": [2, 13, 15], "m": [2, 10], "full": [2, 10, 18], "cannot": 2, "merg": 2, "cleanli": 2, "fail": 2, "resolv": 2, "conflict": 2, "advanc": 2, "cover": 2, "later": 2, "latest": [2, 10], "commonli": 2, "tie": 2, "sort": [2, 10], "class": [2, 8, 11, 12, 13, 14, 15, 16, 17], "nativ": [2, 10], "manag": [2, 10], "form": [2, 13, 15], "df": [2, 10, 17], "focus": 2, "view": [2, 3], "content": [2, 10, 17], "same": [2, 8, 10, 17], "paramet": [2, 11, 12, 14, 16, 17], "link": [2, 5, 13, 15], "doc": [2, 3, 5, 7, 18], "summari": [2, 10], "slice": [2, 10], "02": 2, "04": 2, "133": 2, "modifi": [2, 10], "_id": 2, "744bc2f5736472a0b8fec3339bf14615": 2, "image3": 2, "return": [2, 11, 12, 13, 14, 15, 16, 17], "uniqu": [2, 10], "id": [2, 10, 16, 17], "handl": [2, 10], "specif": [2, 8, 10], "diff": 2, "822ac1facbd79444f1f33a2a0b2f909d": 2, "image2": 2, "ab8e28d66d21934f35efcb9af7ce866f": 2, "column": [2, 10, 11, 12, 14, 17], "clear": 2, "restor": [2, 17], "build": [3, 7, 10, 18], "html": 3, "Then": [3, 8], "browser": 3, "contribut": [3, 4, 5, 8], "ani": [3, 10, 12, 17], "sourc": [3, 7, 10], "instruct": [3, 10], "abov": [3, 8, 10], "describ": [4, 5], "organ": [4, 5], "how": [4, 5, 10], "gener": [4, 8, 10, 18], "inspir": 6, "git": [6, 10], "alreadi": [6, 10], "familiar": 6, "common": [6, 10, 13, 15], "softwar": [6, 10], "practic": 6, "navig": [6, 10], "data": [6, 7, 8, 11, 12, 14, 16, 17], "live": [6, 10], "init": [6, 10, 16], "client": 7, "via": [7, 8], "homebrew": 7, "relev": [7, 14], "binari": [7, 10], "linux": [7, 8], "platform": [7, 10], "continu": 7, "integr": [7, 8], "pipelin": [7, 8], "releas": [7, 10, 18], "brew": [7, 10], "tap": [7, 10], "wget": 7, "github": [7, 10], "com": 7, "v0": 7, "deb": 7, "sudo": 7, "dpkg": 7, "ex": [7, 16], "deploi": 7, "ever": [7, 10], "backup": [7, 10], "It": 7, "commun": 7, "collabor": 7, "tar": 7, "load": [7, 13, 15], "d": [7, 10], "80": 7, "3001": 7, "interfac": [8, 10], "dataload": [8, 11, 12, 14], "config": [8, 10], "email": [8, 10], "home": [8, 10], "mac": [8, 10], "window": 8, "userprofil": 8, "import": [8, 10, 11, 12, 13, 14, 15], "auth": [8, 10], "create_user_config": 8, "hello": [8, 10], "oxenhub": 8, "add": [8, 10, 16, 17], "api": [8, 10], "kei": [8, 10, 17], "add_host_auth": 8, "host": [8, 17], "token": 8, "f": [8, 11, 12, 13, 14, 15], "your_api_kei": [8, 10], "one": [8, 10], "localrepo": [8, 10, 11, 12, 13, 14, 15, 16], "remoterepo": [8, 17], "catdogbbox": [8, 10], "access": [8, 10], "branch": [8, 16, 17], "pet": 8, "onc": [8, 10], "perform": [8, 10], "through": [8, 10], "don": [8, 10], "t": [8, 10, 16, 17], "stage": [8, 16, 17], "exist": [8, 10, 16, 17], "create_branch": [8, 17], "dev": 8, "destin": 8, "png": [8, 10], "ad": [8, 10, 17], "requir": 8, "sinc": [8, 10], "step": 10, "faster": 10, "than": 10, "wa": 10, "optim": 10, "fast": 10, "unlik": 10, "tradit": 10, "control": 10, "system": 10, "ground": 10, "100x": 10, "million": 10, "model": 10, "process": 10, "explor": 10, "never": 10, "lose": 10, "team": 10, "better": 10, "visual": 10, "fact": 10, "plow": 10, "maintain": 10, "good": 10, "farmer": 10, "tend": 10, "field": 10, "let": 10, "care": 10, "grunt": 10, "infrastructur": 10, "focu": 10, "higher": 10, "level": 10, "ml": 10, "matter": 10, "product": 10, "No": 10, "paradigm": 10, "comfort": 10, "straightforward": 10, "watch": 10, "hundr": 10, "thousand": 10, "second": 10, "pip": 10, "oxenai": 10, "expos": 10, "avail": 10, "shift": 10, "happen": 10, "replac": 10, "complex": 10, "mix": 10, "keep": 10, "evolv": 10, "discov": 10, "visit": 10, "www": 10, "regist": 10, "earli": 10, "quick": 10, "translat": 10, "histori": [10, 16, 17], "what": 10, "show": 10, "dashboard": 10, "who": 10, "your_nam": 10, "your_email": 10, "interest": 10, "give": 10, "yet": 10, "roll": 10, "summar": 10, "On": 10, "e76dd52a4fc13a6f": 10, "8108": 10, "000000000042": 10, "000000000074": 10, "000000000109": 10, "000000000307": 10, "000000000309": 10, "000000000394": 10, "000000000400": 10, "000000000443": 10, "000000000490": 10, "000000000575": 10, "8098": 10, "untrack": 10, "updat": 10, "item": 10, "pagin": 10, "skip": 10, "limit": 10, "param": 10, "info": 10, "messag": [10, 16, 17], "inform": 10, "6b958e268656b0c5": 10, "date": 10, "fri": 10, "oct": 10, "2022": 10, "16": 10, "0700": 10, "initi": [10, 16], "suppli": 10, "commit_id": 10, "made": 10, "delet": [10, 17], "did": 10, "intend": 10, "txt": [10, 11, 12, 13, 15], "detail": 10, "refer": 10, "document": 10, "next": 10, "error": 10, "smaller": 10, "debug": 10, "must": [10, 17], "bin": 10, "recurs": 10, "r": [10, 18], "complet": 10, "backlog": 10, "sensit": 10, "manipul": 10, "easiest": 10, "rout": 10, "sign": 10, "page": 10, "notic": 10, "side": 10, "panel": 10, "In": 10, "copi": 10, "user_config": 10, "toml": 10, "per": 10, "pick": 10, "descript": 10, "anyon": 10, "privat": 10, "compani": 10, "url": [10, 16, 17], "format": [10, 11, 13, 14, 15], "usernam": 10, "repo_nam": 10, "congrat": 10, "abl": 10, "job": 10, "shallow": [10, 16], "associ": [10, 12], "veri": 10, "ineffici": 10, "workflow": 10, "know": 10, "walk": 10, "fear": 10, "still": 10, "check": [10, 16, 17], "proce": 10, "readm": 10, "svg": 10, "emb": 10, "site": 10, "elsewher": 10, "markdown": 10, "img": 10, "shield": 10, "io": 10, "endpoint": 10, "ui": 10, "nice": 10, "kick": 10, "tire": 10, "intern": 10, "instanc": 10, "network": 10, "cloud": 10, "across": 10, "center": 10, "read": 10, "smart": 10, "ndjson": 10, "detect": 10, "schema": [10, 17], "hash": 10, "address": 10, "out": [10, 17], "exploratori": 10, "analysi": 10, "easili": 10, "supervis": [10, 11, 12, 14], "popular": 10, "studio": 10, "compar": 10, "were": 10, "x": [10, 13, 14, 15], "is_fluffi": 10, "old": 10, "am": 10, "la": 10, "dee": 10, "da": 10, "doo": 10, "augment": 10, "experi": 10, "while": 10, "confid": 10, "branch_nam": 10, "switch": [10, 17], "again": 10, "doe": 10, "modif": [10, 17], "fix": 10, "three": 10, "person": 10, "theirs": 10, "concaten": 10, "question": 10, "comment": 10, "suggest": 10, "contact": 10, "contain": [10, 11, 12, 14], "core": [10, 18], "chatload": [11, 13], "prompt_fil": 11, "data_fil": [11, 14], "templat": 11, "__init__": [11, 12, 13, 14, 15], "prompt": 11, "respons": [11, 13, 15], "output": [11, 12, 13, 14, 15], "pl": [11, 14], "demo": [11, 12, 14], "classif": [11, 14], "ba": [11, 12, 14], "chat": 11, "chat_df": 11, "imageclassificationload": [12, 13, 15], "imagery_root_dir": [12, 13, 15], "label_fil": [12, 13, 15], "df_file": [12, 13, 15], "path_nam": [12, 13, 15], "label_nam": [12, 13, 15], "prepar": 12, "canon": 12, "addit": 12, "np": 12, "ndarrai": 12, "found": 12, "numpi": 12, "arrai": 12, "n": 12, "h": 12, "w": 12, "c": 12, "nadarrai": 12, "encod": 12, "mapper": [12, 13, 15], "dict": [12, 17], "dictionari": [12, 17], "map": [12, 16], "hair_color": 12, "x_train": [12, 13, 15], "y_train": [12, 13, 15], "suit": [13, 15], "pre": [13, 15], "varieti": [13, 15], "These": [13, 15], "extract": [13, 14, 15], "remot": [13, 15, 16], "convert": [13, 15], "favorit": [13, 15], "framework": [13, 15], "myrepo": [13, 15], "image1": [13, 15], "train_load": [13, 15], "labels_fil": [13, 15], "test_load": [13, 15], "label_mapp": [13, 15], "x_test": [13, 15], "y_test": [13, 15], "_": [13, 15], "50000": [13, 15], "construct": [13, 15], "direct": [13, 15], "acycl": [13, 15], "graph": [13, 15], "dag": [13, 15], "node": [13, 15], "inherit": [13, 15], "op": [13, 15], "method": [13, 15], "execut": [13, 15], "togeth": [13, 15], "def": [13, 15], "self": [13, 15], "data_fram": [13, 15], "readdf": [13, 15], "label_list": [13, 15], "readtext": [13, 15], "intermedi": [13, 15], "extractcol": [13, 15], "label_text": [13, 15], "readimagedir": [13, 15], "label_map": [13, 15], "createlabelmap": [13, 15], "encodelabel": [13, 15], "compil": [13, 15], "evalu": [13, 15], "usag": 13, "chatbot": [13, 16], "regress": 13, "regressionload": [13, 14], "pred_nam": 14, "f_name": 14, "featur": 14, "predict": 14, "target": 14, "seri": 14, "price": 14, "sqft": 14, "num_b": 14, "num_bath": 14, "y": 14, "object": [16, 17], "revis": [16, 17], "fals": [16, 17], "bool": [16, 17], "doesn": [16, 17], "properti": [16, 17], "current_branch": 16, "constructor": 16, "Will": [16, 17], "folder": 16, "log": [16, 17], "remote_nam": 16, "set_remot": 16, "statu": [16, 17], "stageddata": [16, 17], "local_path": 17, "remote_directori": 17, "environ": 17, "add_df_row": 17, "insert": 17, "exactli": 17, "new_branch": 17, "assign": 17, "remote_path": 17, "none": 17, "get_branch": 17, "list_branch": 17, "namespac": 17, "restore_df": 17, "auto": 18}, "objects": {"oxen": [[16, 0, 1, "", "LocalRepo"], [17, 0, 1, "", "RemoteRepo"]], "oxen.LocalRepo": [[16, 1, 1, "", "add"], [16, 1, 1, "", "checkout"], [16, 1, 1, "", "clone"], [16, 1, 1, "", "commit"], [16, 2, 1, "", "current_branch"], [16, 1, 1, "", "init"], [16, 1, 1, "", "log"], [16, 2, 1, "", "path"], [16, 1, 1, "", "pull"], [16, 1, 1, "", "push"], [16, 1, 1, "", "set_remote"], [16, 1, 1, "", "status"]], "oxen.RemoteRepo": [[17, 1, 1, "", "add"], [17, 1, 1, "", "add_df_row"], [17, 1, 1, "", "checkout"], [17, 1, 1, "", "commit"], [17, 1, 1, "", "create"], [17, 1, 1, "", "create_branch"], [17, 1, 1, "", "delete"], [17, 1, 1, "", "download"], [17, 1, 1, "", "exists"], [17, 1, 1, "", "get_branch"], [17, 1, 1, "", "list_branches"], [17, 1, 1, "", "log"], [17, 2, 1, "", "name"], [17, 2, 1, "", "namespace"], [17, 1, 1, "", "remove"], [17, 1, 1, "", "restore_df"], [17, 2, 1, "", "revision"], [17, 1, 1, "", "status"], [17, 2, 1, "", "url"]], "oxen.loaders": [[11, 0, 1, "", "ChatLoader"], [12, 0, 1, "", "ImageClassificationLoader"], [14, 0, 1, "", "RegressionLoader"]], "oxen.loaders.ChatLoader": [[11, 1, 1, "", "__init__"], [11, 1, 1, "", "run"]], "oxen.loaders.ImageClassificationLoader": [[12, 1, 1, "", "__init__"], [12, 1, 1, "", "run"]], "oxen.loaders.RegressionLoader": [[14, 1, 1, "", "__init__"], [14, 1, 1, "", "run"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:property"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "property", "Python property"]}, "titleterms": {"data": [0, 2, 10, 13, 15], "frame": [0, 10], "oxen": [0, 10], "df": 0, "us": [0, 13, 15], "command": [0, 6, 10], "output": 0, "format": 0, "view": [0, 10], "schema": 0, "slice": 0, "random": 0, "specif": 0, "column": 0, "filter": 0, "row": 0, "concaten": 0, "vstack": 0, "take": 0, "indic": 0, "add": [0, 2], "aggreg": 0, "uniqu": 0, "sort": 0, "revers": 0, "embed": 1, "search": 1, "remot": [2, 8, 10, 17], "stage": [2, 10], "workflow": 2, "file": 2, "shallow": 2, "clone": 2, "creat": [2, 10], "branch": [2, 10], "check": 2, "statu": [2, 6, 10], "delet": 2, "ad": 2, "commit": [2, 10], "log": [2, 10], "tabular": 2, "write": 3, "document": [3, 4, 5, 18], "python": [4, 8, 10], "develop": [4, 5], "rust": [5, 18], "line": 6, "interfac": 6, "initi": 6, "instal": [7, 10], "cli": [7, 10], "mac": 7, "ubuntu": 7, "latest": 7, "20": 7, "04": 7, "window": 7, "server": 7, "docker": 7, "authent": 8, "repositori": [8, 10], "local": [8, 10, 13, 15, 16], "repo": [8, 16, 17], "tutori": 9, "featur": 10, "why": 10, "name": 10, "overview": 10, "oxenhub": 10, "basic": 10, "setup": 10, "user": 10, "chang": 10, "revert": 10, "To": 10, "restor": 10, "work": 10, "directori": 10, "remov": 10, "advanc": 10, "share": 10, "collabor": 10, "an": 10, "account": 10, "your": 10, "author": 10, "push": 10, "badg": 10, "self": 10, "host": 10, "dive": 10, "deeper": 10, "integr": 10, "label": 10, "tool": 10, "diff": 10, "pull": 10, "new": 10, "merg": 10, "deal": 10, "With": 10, "conflict": 10, "support": 10, "contribut": 10, "chatbot": 11, "loader": [11, 12, 13, 14, 15], "usag": [11, 12, 14], "imag": [12, 13, 15], "classif": [12, 13, 15], "resositori": [13, 15], "defin": [13, 15], "custom": [13, 15], "exampl": [13, 15], "regress": 14, "liboxen": 18}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Data Frames": [[0, "data-frames"], [10, "data-frames"]], "oxen df": [[0, "oxen-df"]], "Useful Commands": [[0, "useful-commands"]], "Output Data Formats": [[0, "output-data-formats"]], "View Schema": [[0, "view-schema"]], "Slice": [[0, "slice"]], "Randomize": [[0, "randomize"]], "View Specific Columns": [[0, "view-specific-columns"]], "Filter Rows": [[0, "filter-rows"]], "Concatenate (vstack)": [[0, "concatenate-vstack"]], "Take Indices": [[0, "take-indices"]], "Add Column": [[0, "add-column"]], "Add Row": [[0, "add-row"]], "Aggregate": [[0, "aggregate"]], "Unique": [[0, "unique"]], "Sort": [[0, "sort"]], "Reverse": [[0, "reverse"]], "Embedding Search": [[1, "embedding-search"]], "Remote Staging Workflow": [[2, "remote-staging-workflow"]], "Staging Files": [[2, "staging-files"]], "Shallow Clone": [[2, "shallow-clone"]], "Create Remote Branch": [[2, "create-remote-branch"]], "Check Remote Status": [[2, "check-remote-status"]], "Remote Add File": [[2, "remote-add-file"]], "Delete Remotely Added File": [[2, "delete-remotely-added-file"]], "Commit Staged Files": [[2, "commit-staged-files"]], "Remote Log": [[2, "remote-log"]], "Staging Tabular Data": [[2, "staging-tabular-data"]], "Writing Documentation": [[3, "writing-documentation"]], "Python Development": [[4, "python-development"]], "Documentation": [[4, "documentation"], [5, "documentation"]], "Rust Development": [[5, "rust-development"]], "Command Line Interface": [[6, "command-line-interface"]], "Initialization": [[6, "initialization"]], "Status": [[6, "status"]], "Installation": [[7, "installation"]], "CLI Install": [[7, "cli-install"]], "Mac": [[7, "mac"], [7, "id1"]], "Ubuntu Latest": [[7, "ubuntu-latest"], [7, "id2"]], "Ubuntu 20.04": [[7, "ubuntu-20-04"], [7, "id3"]], "Windows": [[7, "windows"], [7, "id4"]], "Server Install": [[7, "server-install"]], "Docker": [[7, "docker"]], "Python": [[8, "python"]], "Authentication": [[8, "authentication"]], "Repositories": [[8, "repositories"]], "Local Repo": [[8, "local-repo"], [16, "local-repo"]], "Remote Repo": [[8, "remote-repo"], [17, "remote-repo"]], "Tutorials": [[9, "tutorials"]], "\ud83d\udc02 \ud83c\udf3e Oxen": [[10, "oxen"]], "\u2705 Features": [[10, "features"]], "Why the name Oxen?": [[10, "why-the-name-oxen"]], "Overview": [[10, "overview"]], "\ud83d\udc02 CLI Installation": [[10, "cli-installation"]], "\ud83d\udc0d Python Installation": [[10, "python-installation"]], "\ud83e\uddd1\u200d\ud83d\udcbb OxenHub": [[10, "id1"]], "Basic Commands": [[10, "basic-commands"]], "Setup User": [[10, "setup-user"]], "Create Local Repository": [[10, "create-local-repository"]], "Stage Data": [[10, "stage-data"]], "View Status": [[10, "view-status"]], "Commit Changes": [[10, "commit-changes"]], "Log": [[10, "log"]], "Reverting To Commit": [[10, "reverting-to-commit"]], "Restore Working Directory": [[10, "restore-working-directory"]], "Removing Data": [[10, "removing-data"]], "Advanced Features": [[10, "advanced-features"]], "Sharing Data and Collaboration": [[10, "sharing-data-and-collaboration"]], "Create an account": [[10, "create-an-account"]], "Your Repositories": [[10, "your-repositories"]], "Setup Authorization": [[10, "setup-authorization"]], "Create Remote Repository": [[10, "create-remote-repository"]], "Push your data": [[10, "push-your-data"]], "Remote Staging": [[10, "remote-staging"]], "Oxen Badges": [[10, "oxen-badges"]], "Self Hosting": [[10, "self-hosting"]], "Diving Deeper": [[10, "diving-deeper"]], "Integrating Labeling Tools": [[10, "integrating-labeling-tools"]], "Diff": [[10, "diff"]], "Branching": [[10, "branching"]], "Pulling New Changes": [[10, "pulling-new-changes"]], "Merging the changes": [[10, "merging-the-changes"]], "Dealing With Merge Conflicts": [[10, "dealing-with-merge-conflicts"]], "Support": [[10, "support"]], "Contributing": [[10, "contributing"]], "Chatbot Loader": [[11, "chatbot-loader"]], "Usage": [[11, "usage"], [12, "usage"], [14, "usage"]], "Image Classification Loader": [[12, "image-classification-loader"]], "Data Loaders": [[13, "data-loaders"], [15, "data-loaders"]], "Using Loaders with Local Resositories": [[13, "using-loaders-with-local-resositories"], [15, "using-loaders-with-local-resositories"]], "Defining Custom Loaders": [[13, "defining-custom-loaders"], [15, "defining-custom-loaders"]], "Example: Image Classification Loader": [[13, "example-image-classification-loader"], [15, "example-image-classification-loader"]], "Example loaders": [[13, "example-loaders"], [15, "example-loaders"]], "Regression Loader": [[14, "regression-loader"]], "Rust Documentation": [[18, "rust-documentation"]], "liboxen": [[18, "liboxen"]]}, "indexentries": {"chatloader (class in oxen.loaders)": [[11, "oxen.loaders.ChatLoader"]], "__init__() (oxen.loaders.chatloader method)": [[11, "oxen.loaders.ChatLoader.__init__"]], "run() (oxen.loaders.chatloader method)": [[11, "oxen.loaders.ChatLoader.run"]], "imageclassificationloader (class in oxen.loaders)": [[12, "oxen.loaders.ImageClassificationLoader"]], "__init__() (oxen.loaders.imageclassificationloader method)": [[12, "oxen.loaders.ImageClassificationLoader.__init__"]], "run() (oxen.loaders.imageclassificationloader method)": [[12, "oxen.loaders.ImageClassificationLoader.run"]], "regressionloader (class in oxen.loaders)": [[14, "oxen.loaders.RegressionLoader"]], "__init__() (oxen.loaders.regressionloader method)": [[14, "oxen.loaders.RegressionLoader.__init__"]], "run() (oxen.loaders.regressionloader method)": [[14, "oxen.loaders.RegressionLoader.run"]], "localrepo (class in oxen)": [[16, "oxen.LocalRepo"]], "add() (oxen.localrepo method)": [[16, "oxen.LocalRepo.add"]], "checkout() (oxen.localrepo method)": [[16, "oxen.LocalRepo.checkout"]], "clone() (oxen.localrepo method)": [[16, "oxen.LocalRepo.clone"]], "commit() (oxen.localrepo method)": [[16, "oxen.LocalRepo.commit"]], "current_branch (oxen.localrepo property)": [[16, "oxen.LocalRepo.current_branch"]], "init() (oxen.localrepo method)": [[16, "oxen.LocalRepo.init"]], "log() (oxen.localrepo method)": [[16, "oxen.LocalRepo.log"]], "path (oxen.localrepo property)": [[16, "oxen.LocalRepo.path"]], "pull() (oxen.localrepo method)": [[16, "oxen.LocalRepo.pull"]], "push() (oxen.localrepo method)": [[16, "oxen.LocalRepo.push"]], "set_remote() (oxen.localrepo method)": [[16, "oxen.LocalRepo.set_remote"]], "status() (oxen.localrepo method)": [[16, "oxen.LocalRepo.status"]], "remoterepo (class in oxen)": [[17, "oxen.RemoteRepo"]], "add() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.add"]], "add_df_row() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.add_df_row"]], "checkout() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.checkout"]], "commit() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.commit"]], "create() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.create"]], "create_branch() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.create_branch"]], "delete() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.delete"]], "download() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.download"]], "exists() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.exists"]], "get_branch() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.get_branch"]], "list_branches() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.list_branches"]], "log() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.log"]], "name (oxen.remoterepo property)": [[17, "oxen.RemoteRepo.name"]], "namespace (oxen.remoterepo property)": [[17, "oxen.RemoteRepo.namespace"]], "remove() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.remove"]], "restore_df() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.restore_df"]], "revision (oxen.remoterepo property)": [[17, "oxen.RemoteRepo.revision"]], "status() (oxen.remoterepo method)": [[17, "oxen.RemoteRepo.status"]], "url (oxen.remoterepo property)": [[17, "oxen.RemoteRepo.url"]]}})