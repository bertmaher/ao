Search.setIndex({"docnames": ["api_ref_dtypes", "api_ref_intro", "api_ref_kernel", "api_ref_quantization", "api_ref_sparsity", "dtypes", "generated/torchao.dtypes.UInt4Tensor", "generated/torchao.dtypes.to_nf4", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer", "generated/torchao.quantization.Int4WeightOnlyQuantizer", "generated/torchao.quantization.SmoothFakeDynQuantMixin", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear", "generated/torchao.quantization.apply_dynamic_quant", "generated/torchao.quantization.apply_weight_only_int8_quant", "generated/torchao.quantization.change_linear_weights_to_int4_woqtensors", "generated/torchao.quantization.change_linear_weights_to_int8_dqtensors", "generated/torchao.quantization.change_linear_weights_to_int8_woqtensors", "generated/torchao.quantization.smooth_fq_linear_to_inference", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear", "generated/torchao.sparsity.PerChannelNormObserver", "generated/torchao.sparsity.WandaSparsifier", "getting-started", "index", "overview", "performant_kernels", "quantization", "sg_execution_times", "sparsity", "tutorials/index", "tutorials/sg_execution_times", "tutorials/template_tutorial"], "filenames": ["api_ref_dtypes.rst", "api_ref_intro.rst", "api_ref_kernel.rst", "api_ref_quantization.rst", "api_ref_sparsity.rst", "dtypes.rst", "generated/torchao.dtypes.UInt4Tensor.rst", "generated/torchao.dtypes.to_nf4.rst", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer.rst", "generated/torchao.quantization.Int4WeightOnlyQuantizer.rst", "generated/torchao.quantization.SmoothFakeDynQuantMixin.rst", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear.rst", "generated/torchao.quantization.apply_dynamic_quant.rst", "generated/torchao.quantization.apply_weight_only_int8_quant.rst", "generated/torchao.quantization.change_linear_weights_to_int4_woqtensors.rst", "generated/torchao.quantization.change_linear_weights_to_int8_dqtensors.rst", "generated/torchao.quantization.change_linear_weights_to_int8_woqtensors.rst", "generated/torchao.quantization.smooth_fq_linear_to_inference.rst", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear.rst", "generated/torchao.sparsity.PerChannelNormObserver.rst", "generated/torchao.sparsity.WandaSparsifier.rst", "getting-started.rst", "index.rst", "overview.rst", "performant_kernels.rst", "quantization.rst", "sg_execution_times.rst", "sparsity.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst", "tutorials/template_tutorial.rst"], "titles": ["torchao.dtypes", "<code class=\"docutils literal notranslate\"><span class=\"pre\">torchao</span></code> API Reference", "torchao.kernel", "torchao.quantization", "torchao.sparsity", "Dtypes", "UInt4Tensor", "to_nf4", "Int4WeightOnlyGPTQQuantizer", "Int4WeightOnlyQuantizer", "SmoothFakeDynQuantMixin", "SmoothFakeDynamicallyQuantizedLinear", "apply_dynamic_quant", "apply_weight_only_int8_quant", "change_linear_weights_to_int4_woqtensors", "change_linear_weights_to_int8_dqtensors", "change_linear_weights_to_int8_woqtensors", "smooth_fq_linear_to_inference", "swap_linear_with_smooth_fq_linear", "PerChannelNormObserver", "WandaSparsifier", "Getting Started", "Welcome to the torchao Documentation", "Overview", "Performant Kernels", "Quantization", "Computation times", "Sparsity", "&lt;no title&gt;", "Computation times", "Template Tutorial"], "terms": {"thi": [1, 6, 11, 19, 20, 30], "section": 1, "introduc": 1, "dive": 1, "detail": 1, "how": 1, "integr": 1, "pytorch": [1, 22, 30], "optim": 1, "your": [1, 22], "machin": 1, "learn": [1, 30], "model": [1, 12, 13, 14, 15, 16, 17, 18, 20, 22], "sparsiti": [1, 19, 20, 22], "quantiz": [1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22], "dtype": [1, 6, 7, 22], "kernel": 1, "tba": [2, 5, 21, 23, 24, 25, 27], "class": [6, 8, 9, 10, 11, 19, 20], "torchao": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "elem": 6, "kwarg": [6, 10, 11, 14, 19, 20], "sourc": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 28, 30], "tolist": 6, "list": [6, 20], "number": [6, 20], "return": 6, "tensor": [6, 7, 12, 14, 15, 16, 20, 30], "nest": 6, "For": 6, "scalar": 6, "standard": 6, "python": [6, 28, 30], "just": 6, "like": 6, "item": [6, 30], "ar": [6, 20], "automat": [6, 30], "move": 6, "cpu": 6, "first": [6, 20], "necessari": 6, "oper": 6, "differenti": 6, "exampl": [6, 20, 26, 28, 29, 30], "torch": [6, 11, 30], "randn": 6, "2": [6, 30], "0": [6, 10, 11, 18, 20, 26, 29, 30], "012766935862600803": 6, "5415473580360413": 6, "08909505605697632": 6, "7729271650314331": 6, "block_siz": 7, "int": [7, 9, 20], "64": 7, "scaler_block_s": 7, "256": [7, 9], "blocksiz": 8, "percdamp": 8, "groupsiz": [8, 9], "inner_k_til": [8, 9], "8": [8, 9], "padding_allow": [8, 9], "true": [8, 9], "devic": [8, 9], "type": [8, 9], "cuda": [8, 9], "bool": 9, "option": [9, 20], "arg": [10, 11, 20], "set_debug_x_absmax": [10, 11], "set": [10, 11, 20], "self": [10, 11], "x_running_abs_max": [10, 11], "valu": [10, 11, 20], "which": [10, 11], "lead": [10, 11], "smooth": [10, 11], "scale": [10, 11], "all": [10, 11, 12, 13, 14, 15, 16, 19, 20, 26, 28], "ones": [10, 11, 20], "alpha": [10, 11, 18], "5": [10, 11, 18, 20, 30], "enabl": [10, 11], "perform": [10, 11, 19], "benchmark": [10, 11], "without": [10, 11], "calibr": [10, 11], "replac": 11, "nn": 11, "linear": [11, 12, 13, 14, 15, 16], "implement": 11, "dynam": [11, 12], "per": [11, 12, 13, 20], "token": [11, 12], "activ": [11, 12, 20], "channel": [11, 12, 13, 19], "weight": [11, 12, 13, 14, 15, 16, 20], "base": [11, 20], "smoothquant": 11, "forward": [11, 19], "x": [11, 30], "defin": [11, 19, 20], "comput": [11, 19, 20], "everi": [11, 19], "call": [11, 19], "should": [11, 19, 20], "overridden": [11, 19], "subclass": [11, 12, 14, 15, 16, 19], "although": [11, 19], "recip": [11, 19], "pass": [11, 19], "need": [11, 19, 20], "within": [11, 19], "function": [11, 19, 20, 22], "one": [11, 19], "modul": [11, 13, 14, 15, 16, 19, 20], "instanc": [11, 19], "afterward": [11, 19], "instead": [11, 19], "sinc": [11, 19], "former": [11, 19], "take": [11, 19], "care": [11, 19], "run": [11, 19, 30], "regist": [11, 19], "hook": [11, 19], "while": [11, 14, 15, 16, 19, 20], "latter": [11, 19], "silent": [11, 19], "ignor": [11, 19], "them": [11, 19], "classmethod": 11, "from_float": 11, "mod": 11, "convert": [11, 12, 14, 15, 16], "fake": 11, "version": 11, "note": [11, 20], "requir": 11, "to_infer": 11, "calcul": 11, "prepar": [11, 20], "infer": 11, "filter_fn": [12, 13, 15, 16], "none": [12, 13, 15, 16, 17, 18, 20], "appli": [12, 13, 14, 15, 16], "symmetr": [12, 13], "layer": [12, 13, 20], "int8dynamicallyquantizedlinearweight": [12, 15], "onli": 13, "int8": 13, "given": 13, "us": [13, 20, 22], "swap": 13, "int4weightonlyquantizedlinearweight": 14, "effect": [14, 15, 16], "same": [14, 15, 16], "form": [14, 15, 16], "apply_dynamic_qu": [14, 15, 16], "modifi": [14, 15, 16, 20], "int8weightonlyquantizedlinearweight": 16, "debug_skip_calibr": 17, "fals": [17, 20], "skip_fqn_list": 18, "cur_fqn": 18, "A": 19, "custom": 19, "observ": 19, "l2": 19, "norm": [19, 20], "each": 19, "store": 19, "buffer": 19, "x_orig": 19, "sparsity_level": 20, "float": 20, "semi_structured_block_s": 20, "wanda": 20, "sparsifi": 20, "prune": [20, 22], "propos": 20, "http": 20, "arxiv": 20, "org": 20, "ab": 20, "2306": 20, "11695": 20, "an": [20, 22], "awar": 20, "method": 20, "The": 20, "remov": 20, "product": 20, "input": 20, "magnitud": 20, "control": 20, "three": 20, "variabl": 20, "1": [20, 26, 29, 30], "spars": 20, "block": 20, "zero": 20, "out": 20, "paramet": 20, "target": 20, "level": 20, "config": 20, "dict": 20, "ad": 20, "parametr": 20, "inplac": 20, "If": 20, "you": [20, 30], "preserv": 20, "origin": 20, "copi": 20, "deepcopi": 20, "squash_mask": 20, "params_to_keep": 20, "tupl": 20, "str": 20, "params_to_keep_per_lay": 20, "squash": 20, "mask": 20, "appropri": 20, "either": 20, "have": 20, "sparse_param": 20, "attach": 20, "kei": [20, 30], "save": 20, "repres": 20, "specifi": 20, "param": 20, "specif": 20, "fqn": 20, "string": 20, "name": 20, "xdoctest": 20, "skip": 20, "local": 20, "undefin": 20, "don": 20, "t": 20, "ani": 20, "hasattr": 20, "submodule1": 20, "keep": 20, "linear1": 20, "foo": 20, "bar": 20, "submodule2": 20, "linear42": 20, "baz": 20, "print": [20, 30], "42": 20, "24": 20, "some": 20, "other": [20, 30], "update_mask": 20, "tensor_nam": 20, "statist": 20, "retriev": 20, "act_per_input": 20, "Then": 20, "metric": 20, "matrix": 20, "compar": 20, "across": 20, "whole": 20, "current": 20, "open": 22, "librari": 22, "provid": 22, "nativ": 22, "our": 22, "under": 22, "develop": 22, "more": 22, "content": 22, "come": 22, "soon": 22, "00": [26, 29], "004": [26, 29, 30], "total": [26, 29, 30], "execut": [26, 29], "file": [26, 29], "from": [26, 29, 30], "galleri": [26, 28, 30], "mem": [26, 29], "mb": [26, 29], "templat": [26, 28, 29], "tutori": [26, 28, 29], "tutorials_sourc": 26, "template_tutori": [26, 29, 30], "py": [26, 29, 30], "download": [28, 30], "code": [28, 30], "tutorials_python": 28, "zip": 28, "jupyt": [28, 30], "notebook": [28, 30], "tutorials_jupyt": 28, "gener": [28, 30], "sphinx": [28, 30], "go": 30, "end": 30, "full": 30, "author": 30, "firstnam": 30, "lastnam": 30, "what": 30, "3": 30, "prerequisit": 30, "v2": 30, "gpu": 30, "describ": 30, "why": 30, "topic": 30, "import": 30, "add": 30, "link": 30, "relev": 30, "research": 30, "paper": 30, "walk": 30, "through": 30, "process": 30, "output": 30, "below": 30, "rand": 30, "2088": 30, "8201": 30, "3391": 30, "9632": 30, "3591": 30, "5995": 30, "9113": 30, "4812": 30, "1246": 30, "2432": 30, "3309": 30, "1587": 30, "9006": 30, "0308": 30, "5576": 30, "practic": 30, "user": 30, "test": 30, "knowledg": 30, "nlp": 30, "scratch": 30, "summar": 30, "concept": 30, "cover": 30, "highlight": 30, "takeawai": 30, "link1": 30, "link2": 30, "time": 30, "script": 30, "minut": 30, "second": 30, "ipynb": 30}, "objects": {"torchao.dtypes": [[6, 0, 1, "", "UInt4Tensor"], [7, 2, 1, "", "to_nf4"]], "torchao.dtypes.UInt4Tensor": [[6, 1, 1, "", "tolist"]], "torchao.quantization": [[8, 0, 1, "", "Int4WeightOnlyGPTQQuantizer"], [9, 0, 1, "", "Int4WeightOnlyQuantizer"], [10, 0, 1, "", "SmoothFakeDynQuantMixin"], [11, 0, 1, "", "SmoothFakeDynamicallyQuantizedLinear"], [12, 2, 1, "", "apply_dynamic_quant"], [13, 2, 1, "", "apply_weight_only_int8_quant"], [14, 2, 1, "", "change_linear_weights_to_int4_woqtensors"], [15, 2, 1, "", "change_linear_weights_to_int8_dqtensors"], [16, 2, 1, "", "change_linear_weights_to_int8_woqtensors"], [17, 2, 1, "", "smooth_fq_linear_to_inference"], [18, 2, 1, "", "swap_linear_with_smooth_fq_linear"]], "torchao.quantization.SmoothFakeDynQuantMixin": [[10, 1, 1, "", "set_debug_x_absmax"]], "torchao.quantization.SmoothFakeDynamicallyQuantizedLinear": [[11, 1, 1, "", "forward"], [11, 1, 1, "", "from_float"], [11, 1, 1, "", "set_debug_x_absmax"], [11, 1, 1, "", "to_inference"]], "torchao.sparsity": [[19, 0, 1, "", "PerChannelNormObserver"], [20, 0, 1, "", "WandaSparsifier"]], "torchao.sparsity.PerChannelNormObserver": [[19, 1, 1, "", "forward"]], "torchao.sparsity.WandaSparsifier": [[20, 1, 1, "", "prepare"], [20, 1, 1, "", "squash_mask"], [20, 1, 1, "", "update_mask"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "function", "Python function"]}, "titleterms": {"torchao": [0, 1, 2, 3, 4, 22], "dtype": [0, 5], "api": [1, 22], "refer": [1, 22], "python": 1, "kernel": [2, 24], "quantiz": [3, 25], "sparsiti": [4, 27], "uint4tensor": 6, "to_nf4": 7, "int4weightonlygptqquant": 8, "int4weightonlyquant": 9, "smoothfakedynquantmixin": 10, "smoothfakedynamicallyquantizedlinear": 11, "apply_dynamic_qu": 12, "apply_weight_only_int8_qu": 13, "change_linear_weights_to_int4_woqtensor": 14, "change_linear_weights_to_int8_dqtensor": 15, "change_linear_weights_to_int8_woqtensor": 16, "smooth_fq_linear_to_infer": 17, "swap_linear_with_smooth_fq_linear": 18, "perchannelnormobserv": 19, "wandasparsifi": 20, "get": 21, "start": 21, "welcom": 22, "document": 22, "overview": [23, 30], "perform": 24, "comput": [26, 29], "time": [26, 29], "templat": 30, "tutori": 30, "step": 30, "option": 30, "addit": 30, "exercis": 30, "conclus": 30, "further": 30, "read": 30}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})