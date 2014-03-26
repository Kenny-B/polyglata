
#include <cstdlib>
#include <string>
#include <sstream>
#include <iostream>
#include <vector>
#include <map>

using std::string;
using std::vector;
using std::map;

// in C++11, use std::stoi - http://en.cppreference.com/w/cpp/string/basic_string/stol
int parseInt(const string s) {
	return atoi(s.c_str());
}

// Yay... This doesn't even exist by default.
vector<string> split(const string searchString, const char splitChar) {
    vector<string> strings;
    std::istringstream f(searchString);
    std::string s;
    while (std::getline(f, s, splitChar)) {
        strings.push_back(s);
    }

    return strings;
}

int sum(int a, int b) { return a + b; };
int multiplication(int a, int b) { return a * b; };
int division(int a, int b) { return a / b; };

typedef int (*opFn)(int, int);

int calculate(const string s) {
	if(s.empty()) {
		return 0;
	}

	map<char, opFn> ops;
	ops['+'] = &sum;
	ops['*'] = &multiplication;
	ops['/'] = &division;

	for(map<char, opFn>::iterator it = ops.begin(); it != ops.end(); ++it) {
		if(s.find(it->first) != string::npos) {
			vector<string> numbers = split(s, it->first);
			return it->second(parseInt(numbers[0]), parseInt(numbers[1]));
		}
	}

	return parseInt(s);
}
