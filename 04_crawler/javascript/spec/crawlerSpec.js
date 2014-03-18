var crawler = require("./../crawler.js").crawler;
var stubserver = require("./stubserver.js").stubserver;
var fs = require("fs");

describe("crawling", function() {

	var FILE = "myfile.html";
	stubserver.serve(8888);
	beforeEach(function() {
		fs.unlinkSync(FILE);	// doesn't 100% work on Windows, still a handle somewhere?
	});
	function fileWritten() {
		return fs.existsSync(FILE);
	}

	describe("on a valid url", function() {
		it("should write the html contents of the scraped url", function() {
			crawler("http://localhost:8888/test.html", FILE);

			waitsFor(fileWritten);
			runs(function() {
				expect(fs.readFileSync(FILE).toString()).toContain("hello there!");
			});
		});
	});

	describe("on an invalid url", function() {
		it("should do nothing when a 404 occurs", function() {
			crawler("http://localhost:8888/whoopsiedaisy.html", FILE);

			waits(500); // uhmm... any ways to improve this??
			runs(function() {
				expect(fileWritten()).toBe(false);
			});
		});
	});
});