module.exports = function(grunt) {

grunt.initConfig({
    shell: {                                // Task
        listFolders: {                      // Target
            options: {                      // Options
                stdout: true
            },
            command: 'python tests_launcher.py'
        }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell']);

};

