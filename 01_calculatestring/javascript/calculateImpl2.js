(function () {
	//"use strict";
	debugger;

	var map = {
		"+" : function (a, b) { return a + b; },
		"*" : function (a, b) { return a * b; }
	};

	exports.calculate = function(s) {
		if(!s)
			return 0;
		
		for(var operator in map) {
			var fields = s.split(operator);
		
		function wrongData() {
				return !fields[0] || !fields[1];
			};

			if(fields.length === 2) {
				if(wrongData())
					{
						throw "nan";
					}
				return map[operator](parseInt(fields[0]), parseInt(fields[1]));
			}		
		}

		return parseInt(s);
}
})();
