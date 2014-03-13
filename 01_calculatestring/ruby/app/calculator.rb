
class Calculator

	def initialize
		@supported_ops = ["*", "+"]	# can be omitted using Fixnum.instance_methods :-)
	end

	def calculate(s)
		return 0 unless not s.nil? and not s.empty?

		@supported_ops.each do |op|
			if s.include? op
				nrs = s.split(op).map{|str| str.to_i} # map = collect
				return Fixnum.instance_method(op).bind(nrs[0]).call nrs[1]
			end
		end
	end
end

# what I would normally do:
	#@ops = {
	#	"*" => ->(a,b) { a * b },	# or lambda {|a,b| a*b}
	#	"+" => ->(a,b) { a + b }
	#}

# than apply 'call' to the lambda or reduce.
