(function () {
	"use strict";

	//a = 3; whoops
	var map = {
		"+" : function (a, b) { return a + b; },
		"*" : function (a, b) { return a * b; }
	};

	exports.calculate = function(s) {
		if(!s)
			return 0

		for(var operator in map) {
			var fields = s.split(operator);

			if(fields.length === 2) {
				return map[operator](parseInt(fields[0]), parseInt(fields[1]));
			}
		}

		return parseInt(s);
}
})();
