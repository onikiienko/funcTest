module.exports = function(grunt) {

grunt.initConfig({
		replace: {
		  dist: {
		    options: {
		      patterns: [
		        {
		          match: 'test',
		          replacement: 'http://functest.maps2.test/demo_ts1_test.html'
		        }
		      ]
		    },
		    files: [
		      {expand: true, flatten: true, src: ['build/index.html'], dest: 'public/'}
		    ]
		  }
		}
});

grunt.loadNpmTasks('grunt-replace');
grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['replace']);
};