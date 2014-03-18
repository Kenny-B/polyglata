
(function(http, fs) {

	function createServer() {
		return http.createServer(function(req, resp) {
			function err(code) {
				resp.writeHead(404);
				resp.end();				
			}
			function _404() { err(404); }	// use currying plx, thankyouverymuch
			function _500() { err(500); }

			var filePath = './spec/files/' + req.url;
			fs.exists(filePath, function(exists) {
				console.log("request " + req.url + " logged, file " + filePath + " exists? " + exists);

				if(!exists) _404();
				else {
					fs.readFile(filePath, function(e, contents) {
						if(e) _500();
						else {
							resp.writeHead(200, {
								'Content-Type': 'text/html'
							});
							resp.end(contents, 'utf-8');
						}
					});
				}
			});
			fs.readFile
		});
	}

	exports.stubserver = {
		serve: function(port) {
			createServer().listen(port);
			console.log("stubserver started, listening @ " + port);
		}
	};

})(require('http'), require('fs'));