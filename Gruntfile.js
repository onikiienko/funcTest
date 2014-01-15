module.exports = function(grunt) {

grunt.initConfig({
    shell: {                                // Task
        listFolders: {                      // Target
            options: {                      // Options
                stdout: true
            },
            command: 'python tests_launcher'
        }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell']);

};

