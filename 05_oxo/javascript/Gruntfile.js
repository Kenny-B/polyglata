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
      }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.registerTask('default', ['jasmine_node']);
};
