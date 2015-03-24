module.exports = function(grunt) {

  grunt.initConfig({



    uglify: {
      dist: {
        src: 'js/**/*.js',
        dest: 'dist/js/app.min.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['index.html'], dest: 'dist/', filter: 'isFile'},
        ],
      },
    },
    sass: {
      dist: {
        files: {
          'dist/css/styles.css': 'sass/app.scss'
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['copy', 'uglify', 'sass']);
  grunt.registerTask('watch', ['watch']);

};
