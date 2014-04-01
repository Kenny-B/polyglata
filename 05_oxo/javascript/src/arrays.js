
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

	function dict(arr) {
		guardArr(arr);
		var map = {};
		arr.forEach(function(elem, i) {
			if(!map[elem]) {
				map[elem] = [i];
			} else {
				map[elem].push(i);
			}
		});
		return map;
	}

	// http://stackoverflow.com/questions/6428192/get-new-x-y-coordinates-of-a-point-in-a-rotated-image
	function reverseRotate90Coords(coords, midpoints) {
	    var a = -90 * Math.PI / 180;
	    return {
	    	x: (coords.x - midpoints.x) * Math.cos(a) - (coords.y - midpoints.y) * Math.sin(a) + midpoints.x,
	    	y: (coords.x - midpoints.x) * Math.sin(a) + (coords.y - midpoints.y) * Math.cos(a) + midpoints.y
		};
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

	exports.reverseRotate90Coords = reverseRotate90Coords;
	exports.dict = dict;
	exports.rotate90 = rotate90;
	exports.unique = unique;

})();
