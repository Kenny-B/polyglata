# Calculate

Nothing too difficult: implement a method which calculates the result of a given string.

`int calculate(string s)`

## acceptance criteria

### happy path

* "3+4" should return the numeric value 7
* "4*2" should return the numeric value 8

### edge cases

* "77" should return the numeric value 7
* "" or nil should return the numeric value 0
* "3 +" should throw an exception
* " * 2" should throw an exception
* "blabl" should throw an exception

## possible addons

* add the possibility to combine operators (watch out for mathematical rules!)
* add other operators like dividing "/" or modulo "%"
* don't assume there won't be any spaces. "3 + 3" === "3+3" === 6.