module.exports = function(grunt) {

  'use strict';

  var path = require('path');

  grunt.initConfig({

    bower: {
      install: {
        options: {
          targetDir: './vendor/',
          install: true,
          verbose: true,
          cleanBowerDir: true,
          cleanTargetDir: true,
          layout: function(type, component) {
            return path.join(component);
          }
        }
      }
    },

    less: {
      code_examples: {
        options: {
          paths: grunt.file.expand('vendor/**'),
        },
        files: {
          'docs/static/docs/docs.css': ['docs-src/docs.less']
        }
      }
    },

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

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy', 'uglify']);
  grunt.registerTask('raw', ['copy:raw_HTML5Shiv']);
  grunt.registerTask('code_examples', ['uglify:code_examples']);

};
