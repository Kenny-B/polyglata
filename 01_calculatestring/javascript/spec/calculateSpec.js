
var calculator = require("./../calculate.js");

describe("calculating", function() {
	var calc = calculator.calculate;

	it("should return multiplied outcome as a number", function() {
		expect(calc("3*3")).toBe(9);
	});

	it("should return added outcome as a number", function() {
		expect(calc("3+3")).toBe(6);
	});

	it("should return 0 when empty string given", function() {
		expect(calc("")).toBe(0);
	});

	it("should return 0 when null given", function() {
		expect(calc(null)).toBe(0);
	});

	it("should return the digit without op", function() {
		expect(calc("3")).toBe(3);
	});

	it("should throw an exception with an invalid digit", function() {
		expect(function() { calc("bla") }).toThrow("not a number?");
	});

	it("should throw an exception when not properly terminated", function() {
		expect(function() { calc("3*") }).toThrow("not a number?");
		expect(function() { calc("+3") }).toThrow("not a number?");
	});

});