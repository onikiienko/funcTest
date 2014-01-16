var config = require('./config.json');


module.exports = function(grunt) {

grunt.initConfig({
		replace: {
		  dist: {
		    options: {
		      patterns: [
		        {
		          match: 'test',
		          replacement: config[test]
		        }
		      ]
		    },
		    files: [
		      {expand: true, flatten: true, src: ['tests/test_suite_1.py'], dest: 'tests'}
		    ]
		  }
		},

		shell: {
        	makeDir: {
            	command: 'python tests_launcher.py'
        }
    }
});

grunt.loadNpmTasks('grunt-replace');
grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['replace']);
};