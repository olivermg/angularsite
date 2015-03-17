module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', 'log some stuff', function() {
    grunt.log.write('logging some stuff').ok();
    grunt.log.write(grunt.config.get('pkg').name).ok();
  });

}
