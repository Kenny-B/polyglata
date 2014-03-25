module.exports = function(grunt) {
    grunt.initConfig({
      jasmine_node: {
        options: {
          forceExit: true,
          match: '.',
          matchall: false,
          extensions: 'js',
          specNameMatcher: 'spec',
        },
        all: ['spec/']
      },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5857,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 4
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-node-inspector');

  // debugging: 1) grunt node-inspector 2) debug jasmine_node (starts cli.js; use --debug-brk)

  grunt.registerTask('default', ['jasmine_node']);
};
