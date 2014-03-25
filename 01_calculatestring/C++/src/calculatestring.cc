
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

// classes can be defined within the calculate() method
// since C++11, no warning generated; see http://stackoverflow.com/questions/742607/using-local-classes-with-stl-algorithms
class Operator {
public:
	virtual int op(int a, int b) = 0;
};

class Sum : public Operator {
public:
	inline int op(int a, int b) { return a + b; };
};

class Multiplication : public Operator {
public:
	inline int op(int a, int b) { return a * b; };
};

class Division : public Operator {
public:
	inline int op(int a, int b) { return a / b; };
};

int calculate(const string s) {
	if(s.empty()) {
		return 0;
	}

	// is there a way to do this without pointers?
	map<char, Operator*> ops;
	ops['+'] = new Sum();
	ops['*'] = new Multiplication();
	ops['/'] = new Division();

	for(map<char,Operator*>::iterator it = ops.begin(); it != ops.end(); ++it) {
		if(s.find(it->first) != string::npos) {
			vector<string> numbers = split(s, it->first);
			return it->second->op(parseInt(numbers[0]), parseInt(numbers[1]));
		}
	}

	return parseInt(s);
}
