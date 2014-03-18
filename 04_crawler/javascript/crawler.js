
// one should use request & cheerio or jQuery modules...
(function(fs, http) {

	function crawler(url, file) {
		var data = "";
		http.get(url, function(res) {
		}).on('response', function(res) {
			res.on('data', function(chunk) {
				data += chunk;
			});
			res.on('end', function() {
				fs.writeFileSync(file, data);
			});
		}).on('error', function(e) {
			throw e;
		});
	}

	exports.crawler = crawler;

})(require('fs'), require('http'));
