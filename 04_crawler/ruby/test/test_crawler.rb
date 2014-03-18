
require 'app/crawler'
require 'minitest/autorun' # looks like minitest is the default test framework >= 1.9
require 'test/stubserver'

describe "Crawler" do
	
	@@server = Stubserver.new 8888

	before do
		@crawler = Crawler.new
		@file = "myfile.html"
		File.delete @file if File.exist? @file
	end

	describe "when crawling a valid url" do
		it "should write the HTML contents to a local file" do
			@crawler.crawl "http://localhost:8888/test.html", @file
			myfile = File.read @file
			myfile.must_include "hello there"	# instead of assert myfile.include?
		end
	end

	describe "when crawling and something goes wrong" do
		it "should not write anything if invalid URL" do
			@crawler.crawl "http://localhost:8888/unknown.blah", @file
			refute File.exist?(@file)
		end
	end

end
