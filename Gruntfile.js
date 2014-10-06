module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration
        kss: {
          options: {
            includeType: 'css',
            includePath: '/drupal/core/themes/seven/css',
          },
          dist: {
              files: {
                './drupal/core/themes/seven/css': ['/styleguide']
              }
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-kss');

    // Default task
    grunt.registerTask('default', ['kss']);
};

