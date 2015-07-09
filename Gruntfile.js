module.exports = function(grunt) {
    grunt.initConfig({
        bowerRequirejs: {
            all: {
                rjsConfig: './web/scripts/app.js',
                options: {
                    baseUrl: './web/scripts/app'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-requirejs');

    grunt.registerTask('default', ['bowerRequirejs']);
};