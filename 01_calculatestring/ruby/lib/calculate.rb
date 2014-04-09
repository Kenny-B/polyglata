def calculate(numbers)
	x = numbers.split "+"
	if x.length != 1
		return x[0].to_i + x[1].to_i
	end

	x = numbers.split "*"
	x[0].to_i * x[1].to_i
end