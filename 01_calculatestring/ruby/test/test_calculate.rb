require 'lib/calculate'
require 'minitest/autorun'

describe "calculate" do

	it "should return the sum of two numbers" do
		calculate("3 + 4").must_equal 7
	end

    it "should return the sum of two numbers" do
		calculate("3 + 3").must_equal 6
	end

	it "should return the product of two numbers" do
		calculate("3 * 3").must_equal 9
	end
end
