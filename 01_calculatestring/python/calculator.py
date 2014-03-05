# python 3: Removed reduce(). Use functools.reduce() if you really need it; however, 99 percent of the time an explicit for loop is more readable.
# http://www.artima.com/forums/flat.jsp?forum=106&thread=98196 no "pythonic way" of doing it.
from functools import reduce

ops = (("+", lambda x,y: x + y, 0), ("*", lambda x,y: x * y, 1))

def calculate(s):
	if s == '':
		return 0
	for operator, operatorFn, start in ops:
		if s.find(operator) >= 0:
			return reduce(operatorFn, [int(nr) for nr in s.split(operator)], start)
	return int(s)
