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
		for operator in self.ops.keys():
			if s.find(operator) >= 0:
				op = self.ops[operator]
				return reduce(op["op"], map(int, s.split(operator)), op["init"])
		return int(s)
