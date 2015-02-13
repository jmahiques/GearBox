module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell: {
      startServerWin: {
        command: 'set DEBUG=web_panel & node ./bin/www'
      },
      startServer: {
        command: 'DEBUG=web_panel ./bin/www'
      }      
    },
    bower: {
      install: {
        options: {
          targetDir: './public/vendor',
          layout: 'byComponent',
          install: true,
          cleanBowerDir: true,          
          verbose: true,
          copy: true          
        }
      }      
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', []);

  //custom tasks
  grunt.registerTask('bower:update', ['bower']);
  grunt.registerTask('server', ['shell:startServer']);
  grunt.registerTask('server:win', ['shell:startServerWin']);

};