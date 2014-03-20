#!/bin/bash
node-inspector &
node --debug-brk node_modules/jasmine-node/lib/jasmine-node/cli.js spec/
