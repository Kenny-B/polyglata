require 'open-uri'

class Crawler
	def crawl(url, file)
		begin
			open(url) { |stream| File.write file, stream.read }
		rescue OpenURI::HTTPError => ex
			case ex.message
				when /404/ then puts "File not found, ignoring."
				else raise ex
			end
		end
	end
end
