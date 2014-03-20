var calculatorModule = require("./../calculateImpl2.js");

describe("mijn mooie calculator", function() {

	var calculate;
	beforeEach(function() {
		calculate = calculatorModule.calculate;
	});

	it("should produce the basic sum of two numbers", function() {

		expect(calculate("3+4")).toEqual(7);
		expect(calculate("2+1")).toEqual(3);
	});

	it("should produce the basic product of two numbers", function() {

		expect(calculate("3*4")).toEqual(12);
		expect(calculate("2*1")).toEqual(2);
	});

	it("should produce the basic of two digits", function() {

		expect(calculate("12+10")).toEqual(22);
		expect(calculate("12*10")).toEqual(120);
	});

	it("should throw execption when input is not valid", function() {

		function calc() {
			calculate("3*");
		};

		expect(calc).toThrow();
	});

	it("should ignore spaces", function() {

		expect(calculate("3 ")).toEqual(3);
		expect(calculate(" 3")).toEqual(3);
	});

	it("Should return 0 when empty or null", function() {

		expect(calculate(null)).toEqual(0);
		expect(calculate("")).toEqual(0); // == 
	});

	it("should return number when number only", function() {
		expect(calculate("1")).toBe(1); // ===
 	});
});

console.log(process.versions)