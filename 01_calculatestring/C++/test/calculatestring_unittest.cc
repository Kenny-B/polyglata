
#include <string>
#include "gtest/gtest.h"

#include "calculatestring.h"

TEST(Calculate, Returns_Basic_Number) {
  EXPECT_EQ(2, calculate("2"));
  EXPECT_EQ(200, calculate("200"));
}

TEST(Calculate_Edge_Cases, EmptyString_Should_Return_Zero) {
	// As the provided string is not a pointer, it can never be NULL and always has a value!
	// So calculate(NULL) cannot be tested.
	EXPECT_EQ(0, calculate(""));
}

TEST(Calculate, Returns_Sum_Of_Numbers) {
	EXPECT_EQ(9, calculate("1+8"));
	EXPECT_EQ(20, calculate("12+8"));
	EXPECT_EQ(30, calculate("10+20"));
}

TEST(Calculate, Returns_Multiplication_Of_Numbers) {
	EXPECT_EQ(9, calculate("3*3"));
	EXPECT_EQ(20, calculate("10*2"));
	EXPECT_EQ(200, calculate("10*20"));
}

TEST(Calculate, Returns_Division_By_Numbers) {
	EXPECT_EQ(2, calculate("4/2"));
	EXPECT_EQ(10, calculate("20/2"));
	EXPECT_EQ(200, calculate("2000/10"));
}
