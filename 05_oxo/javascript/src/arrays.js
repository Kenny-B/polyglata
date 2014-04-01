
(function() {

	function guardArr(a) {
		if(Object.getPrototypeOf(a) !== Array.prototype) {
			throw "not an array, try again...";
		}
		return true;
	}
	function guardMultidimensional(a) {
		return guardArr(a[0]);
	}

	function unique(arr) {
		guardArr(arr);
		if(arr.length == 0) return true;

		var val = arr[0];
		return arr.every(function(elem) {
			return val === elem;
		});
	}

	function rotate90(arr) {
		guardArr(arr) && guardMultidimensional(arr);

	  // transpose from http://www.codesuck.com/2012/02/transpose-javascript-array-in-one-line.html
	  var rotated = Object.keys(arr[0]).map(function (c) {
	  	return arr.map(function (r) {
	  		return r[c];
	  	});
	  });

	  for (var index in rotated) {
	    rotated[index] = rotated[index].reverse();
	  }
	  return rotated;
	}

	exports.rotate90 = rotate90;
	exports.unique = unique;

})();
