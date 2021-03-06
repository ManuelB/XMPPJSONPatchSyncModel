module.exports = function(grunt) {

    grunt.initConfig({
        openui5_preload: {
            library: {
                options: {
                    resources: 'src',
                    dest: 'dist'
                },
                libraries: 'incentergy/model'
            }
        }
    });
    grunt.loadNpmTasks('grunt-openui5');
    grunt.registerTask('default', ['openui5_preload']);

};
