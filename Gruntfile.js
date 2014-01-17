var config = require('./config.json');


// Здесь получаем нужное свойство

function makePaterns(){
	var patterns = [];
	for(var key in config){
		patterns.push({match: key, replacement: config[key]})
	}
	return patterns;
}

module.exports = function(grunt) {
	grunt.initConfig({
		replace: {
		  dist: {
			options: {
			    patterns: makePaterns()
			},		
			files: 
				[
			      	{expand: true, flatten: true, src: ['build/tests/*'], dest: 'tests'},
			      	{expand: true, flatten: true, src: ['build/demos/*'], dest: 'public'},
			      	{expand: true, flatten: true, src: ['build/source/*'], dest: 'tests/source'}
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