require 'webrick'
include WEBrick # instead of WEBrick::HTTPServer.new

class Stubserver

	def initialize(port)
		Thread.new {
			puts "Initializing stub server @ #{port}"
			@server = HTTPServer.new(:Port => port, :DocumentRoot => "./test/files/")
			@server.start
		}
	end
end
