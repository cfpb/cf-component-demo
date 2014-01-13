module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    copy: {
      raw_HTML5Shiv: {
        files: [
          {
            expand: true,
            src: ['bower_components/html5shiv/dist/html5shiv-printshiv.js'],
            dest: 'raw/static/demo/',
            flatten: true
          }
        ]
      }
    },

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

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy', 'uglify']);
  grunt.registerTask('raw', ['copy:raw_HTML5Shiv']);
  grunt.registerTask('code_examples', ['uglify:code_examples']);

};
