# python 3: Removed reduce(). Use functools.reduce() if you really need it; however, 99 percent of the time an explicit for loop is more readable.
from functools import reduce

class Calculator:

	ops = {
		"+": {
			"op": lambda x,y: x + y,
			"init": 0
		},
		"*": {
			"op": lambda x,y: x * y,
			"init": 1
		}
	};

	# is there a way to use JSON-like op.op instead of op["op"]?
	def calculate(self, s):
		if s == '':
			return 0
		if s.find("+") >= 0 or s.find("*") >= 0:
			op = self.ops[s[1]]
			return reduce(op["op"], map(int, s.split(s[1])), op["init"])

		return int(s)
