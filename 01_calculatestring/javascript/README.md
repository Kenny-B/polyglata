
### Debugging

Tries to use node JS + Jasmine:

* `npm install jasmine-node`
* `npm install node-inspector -g`

The jasmine module should be installed locally - see below. 

See http://blog.codeship.io/2013/08/20/testing-tuesday-19-how-to-test-node-js-applications-with-jasmine.html

Debugging on Node: http://howtonode.org/debugging-with-node-inspector - uses https://github.com/node-inspector/node-inspector 

- start node-inspector. 
- surf to (http://localhost:8080/debug?port=5858)[http://localhost:8080/debug?port=5858]
- start node in debug mode with the jasmine module: `node --debug-brk node_modules/jasmine-node/lib/jasmine-node/cli.js spec/`

The `--debug-brk` flag will auto-break on the first line. After that, you can place more breakpoints. Adding `debugger;` in your spec/production js files will also trigger a break.
