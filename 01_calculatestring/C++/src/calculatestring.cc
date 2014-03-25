
#include <cstdlib>
#include <string>

using std::string;

int calculate(string s) {
	// in C++11, use std::stoi - http://en.cppreference.com/w/cpp/string/basic_string/stol
	return atoi(s.c_str());	
}
