module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    uglify: {
      code_examples: {
        src: [
          'bower_components/rainbow/js/rainbow.js',
          'bower_components/rainbow/js/language/html.js',
          'bower_components/rainbow/js/language/css.js'
        ],
        dest: 'code_examples/static/demo/main.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('code_examples', ['uglify:code_examples']);

};
