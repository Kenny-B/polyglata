# python 3: Removed reduce(). Use functools.reduce() if you really need it; however, 99 percent of the time an explicit for loop is more readable.
# http://www.artima.com/forums/flat.jsp?forum=106&thread=98196 no "pythonic way" of doing it.
from functools import reduce

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
def calculate(s):
	if s == '':
		return 0
	for operator in ops.keys():
		if s.find(operator) >= 0:
			op = ops[operator]
			return reduce(op["op"], [int(v) for v in s.split(operator)], op["init"])
	return int(s)
