module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                src: 'css/main.css',
                dest: 'css/main.css'
            }
        },
        cssmin: {
            compress: {
                files: {
                    'css/main.css': ['css/main.css']
                }
            }
        },
        watch: {
            less: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.'
                }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
};