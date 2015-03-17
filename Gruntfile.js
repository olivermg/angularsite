module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      coffee: {
        options: {
          sourceMap: true
        },
        files: {
          'pub/js/app.js': ['src/*.coffee']
        }
      }
    },

    clean: ['pub/js/app.js', 'pub/js/app.js.min']
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dummy', 'log some stuff', function() {
    grunt.log.write('logging some stuff').ok();
    grunt.log.write(grunt.config.get('pkg').name).ok();
  });

  grunt.registerTask('build-release', 'build everything for release', ['coffee', 'uglify']);
  grunt.registerTask('build-debug', 'build everything for debug', ['coffee']);

  grunt.registerTask('default', 'build everything', ['build-release']);

}
