
exports.calculate = function(str) {
	debugger;

	function guardNr(fn, args) {
		args.forEach(function(a) {
			if(isNaN(a)) throw "not a number?";
		});
		return fn.apply(this, args);
	}

	var ops = {
		'+': function(a, b) { return a + b},
		'*': function(a, b) { return a * b}
	};

	function getOpIndex() {
		for(op in ops) { // fuck this, can't use forEach() on objects...
			if(str != null && str.indexOf(op) >= 0) {
				return op;
			}
		}
		return null;
	}

	var index = getOpIndex();
	if(index == null) {
		if(str == null || str.length == 0) return 0;
		if(isNaN(parseInt(str))) throw "not a number?";
		return parseInt(str);
	}

	var split = str.split(index);
	return guardNr(ops[index], [ parseInt(split[0]), parseInt(split[1]) ]);
};
