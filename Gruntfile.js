var config = {};

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


function makePaterns(){
	fillConfig();
	var patterns = [];
	for(var key in config){
		patterns.push({match: key, replacement: config[key]})
	}
	return patterns;
}

function fillConfig() {
		config = require('./config.json');
		var fs = require('fs');

		var exists = fs.existsSync('./config.local.json'); 
		if (exists) {
		    var localConfig = require('./config.local.json');
			for(var key in localConfig){
				config[key] = localConfig[key];
			}
		 } else {
		    console.log("no local file was found");
		 }
}