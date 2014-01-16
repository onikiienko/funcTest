var config = require('./config.json');

for(var key in config)
{
     console.log(config[key]);
}
// Здесь получаем нужное свойство



module.exports = function(grunt) {
	grunt.initConfig({
		replace: {
		  dist: {
			options: {
			    patterns: 
			    	[
			        	{
			          		match: 'test',
			          		replacement: config['test']
			        	}
			      	]
			},		
			files: 
				[
			      	{expand: true, flatten: true, src: ['tests/test_suite_1.py'], dest: 'tests'},
			      	{expand: true, flatten: true, src: ['tests/test_suite_2.py'], dest: 'tests'},
			      	{expand: true, flatten: true, src: ['tests/test_suite_3.py'], dest: 'tests'}
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