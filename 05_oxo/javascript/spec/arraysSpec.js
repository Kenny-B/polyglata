var arrays = require('./../src/arrays.js');

describe("arrays", function() {

	describe("unique", function() {
		it("should throw an exception if no array", function() {
			expect(function() {
				arrays.unique("1");
			}).toThrow();
		});

		it("should be true if contains same elements in array", function() {
			expect(arrays.unique([1, 1, 1])).toBeTruthy();
		});

		it("should be false if not unique values", function() {
			expect(arrays.unique([1, 2, 1])).toBeFalsy();
		});

		it("should be true if only one element in array", function() {
			expect(arrays.unique(['a'])).toBeTruthy();
		});

		it("should be true if no elements in array", function() {
			expect(arrays.unique([])).toBeTruthy();
		});
	});

	describe("to dictionary", function() {
		it("should throw an exception if no array", function() {
			expect(function() {
				arrays.dict("1");
			}).toThrow();
		});

		it("should return dictionary of key/values from the array", function() {
			var expected = {
				"X": [0, 1, 2, 4],
				"_": [3]
			};
			expect(arrays.dict(["X", "X", "X", "_", "X"])).toEqual(expected);
		});

		it("should return empty object if array is empty", function() {
			expect(arrays.dict([])).toEqual({});
		});

		it("should return object with one index as value if single element in array", function() {
			expect(arrays.dict(["X"])).toEqual({ "X": [0] });
		});		
	});

	describe("reverse rotate 90 degrees coords", function() {
		it("should rotate edges to -90 degrees given 3x3 matrix", function() {
			var midpt = {x: 1, y: 1};
			// why is one of those not working?
			expect(arrays.reverseRotate90Coords({x: 0, y: 2}, midpt)).toEqual({x: 2, y: 2});
			expect(arrays.reverseRotate90Coords({x: 2, y: 2}, midpt)).toEqual({x: 2, y: 0});
			expect(arrays.reverseRotate90Coords({x: 2, y: 0}, midpt)).toEqual({x: 0, y: 0});
			expect(arrays.reverseRotate90Coords({x: 0, y: 0}, midpt)).toEqual({x: 0, y: 2});
		});

		it("should not rotate midpoint itself", function() {
			var midpt = {x: 1, y: 1};
			expect(arrays.reverseRotate90Coords(midpt, midpt)).toEqual(midpt);
		});
	});

	describe("rotate 90 degrees", function() {
		var arr;
		beforeEach(function() {
			arr = [
				[ 1, 2, 3 ],
				[ 4, 5, 6 ],
				[ 7, 8, 9 ]
			];
		});

		it("should be not mutate the argument", function() {
			arrays.rotate90(arr);
			expect(arr[0]).toEqual([1, 2, 3]);
		});

		it("should throw an exception if singledimensional array", function() {
			expect(function() {
				arrays.rotate90([1, 2, 3]);
			}).toThrow();
		});

		it("should throw an exception if no array", function() {
			expect(function() {
				arrays.rotate90("1");
			}).toThrow();
		});

		it("should rotate a multidimensional array by 90 degrees", function() {
			var rotated = arrays.rotate90(arr);
			expect(rotated).toEqual([
				[ 7, 4, 1 ],
				[ 8, 5, 2 ],
				[ 9, 6, 3 ]
			]);
		});

		it("should be back to normal after rotating 4 times", function() {
			var rotated = arrays.rotate90(arrays.rotate90(arrays.rotate90(arrays.rotate90(arr))));
			expect(rotated).toEqual(arr);
		});
	});

});