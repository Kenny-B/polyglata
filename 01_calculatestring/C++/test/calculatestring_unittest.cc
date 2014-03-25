
#include <string>
#include "gtest/gtest.h"

#include "calculatestring.h"

TEST(Calculate, Returns_Basic_Number) {
  EXPECT_EQ(2, calculate("2"));
  EXPECT_EQ(200, calculate("200"));
}
