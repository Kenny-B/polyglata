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