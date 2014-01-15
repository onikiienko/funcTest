module.exports = function(grunt) {

grunt.initConfig({
    shell: {
        pythonServer: {
            options: {
                stdout: true
            },
            command: 'python tests_launcher.py'
        }
    }
});

grunt.loadNpmTasks('grunt-shell');

};