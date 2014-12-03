'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['server.js']
    },
    jscs: {
      src: 'server.js',
      options: {
        config: '.jscsrc'
      }
    },
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css', 'img/**/*', 'src/**/*'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },
      test: {
        src: ['test/client/test_1.js'],
        dest:'test/test_bundle.js',
        options:{
          transform: ['debowerify']
        }
      }
    },
    sass: {
      dev: {                            // Task
        files: [{
          expand: true,
          cwd: 'app/css',
          src: ['*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },
    simplemocha: {
      src: ['test/server_test.js']
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'browserify:test', 'sass:dev', 'copy:dev', 'jshint', 'jscs', 'simplemocha']);
};
