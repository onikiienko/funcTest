module.exports = function(grunt) {

grunt.initConfig({
		replace: {
		  dist: {
		    options: {
		      patterns: [
		        {
		          match: 'test',
		          replacement: '"http://functest.maps2.test/demo_ts1_test.html"'
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