var config = {};

module.exports = function(grunt) {
	grunt.initConfig({
		replace: {
			darkTest: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'dark'
					},
					{
						match: 'application',
						replacement: '@@testApplication'
					},
					{
						match: 'dirDemos',
						replacement: 'darkDemos/testApplications'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['build/demos/*.html'], dest: 'public/darkDemos/testApplications/'},
				  {expand: true, flatten: true, src: ['build/tests/*.py'], dest: 'tests/darkTests/'}
				]
			},
			darkPublic: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'dark'
					},
					{
						match: 'application',
						replacement: '@@publicApplication'
					},
					{
						match: 'dirDemos',
						replacement: 'darkDemos/publicApplications'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['build/demos/*.html'], dest: 'public/darkDemos/publicApplications/'},
				  {expand: true, flatten: true, src: ['build/tests/*.py'], dest: 'tests/darkTests/'}
				]
			},
			lightTest: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'light'
					},
					{
						match: 'application',
						replacement: '@@testApplication'
					},
					{
						match: 'dirDemos',
						replacement: 'lightDemos/testApplications'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['build/demos/*.html'], dest: 'public/lightDemos/testApplications/'},
				  {expand: true, flatten: true, src: ['build/tests/*.py'], dest: 'tests/lightTests/'}
				]
			},
			lightPublic: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'light'
					},
					{
						match: 'application',
						replacement: '@@publicApplication'
					},
					{
						match: 'dirDemos',
						replacement: 'lightDemos/publicApplications'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['build/demos/*.html'], dest: 'public/lightDemos/publicApplications/'},
				  {expand: true, flatten: true, src: ['build/tests/*.py'], dest: 'tests/lightTests/'}
				]
			},
			replaceApp: {
				options: {
				    patterns: makePaterns()
				},		
				files: [
			      	{expand: true, flatten: true, src: ['tests/lightTests/*'], dest: 'tests/lightTests/'},
			      	{expand: true, flatten: true, src: ['tests/darkTests/*'], dest: 'tests/darkTests/'},
			      	{expand: true, flatten: true, src: ['build/source/*'], dest: 'tests/source/'},
			      	{expand: true, flatten: true, src: ['public/lightDemos/publicApplications/*'], dest: 'public/lightDemos/publicApplications/'},
			      	{expand: true, flatten: true, src: ['public/lightDemos/testApplications/*'], dest: 'public/lightDemos/testApplications/'},
			      	{expand: true, flatten: true, src: ['public/darkDemos/publicApplications/*'], dest: 'public/darkDemos/publicApplications/'},
			      	{expand: true, flatten: true, src: ['public/darkDemos/testApplications/*'], dest: 'public/darkDemos/testApplications/'}
			    ]
			},
		},
    shell: {
        build: {
            command: [
                'grunt darkTest',
                'grunt darkPublic',
                'grunt lightTest',
                'grunt lightPublic',
                'grunt replaceApp'
            ].join('&&'),
            options: {
                stdout: true
            }
        },install: {
            command: [
    			'apt-get install python-opencv python-numpy',
				'pip install thrift==0.9.0 selenium==2.34.0'
            ].join('&&'),
            options: {
                stdout: true
            }
        },
        test: {
            command: [
            	'python tests_launcher_dark.py'
				].join('&&'),
            options: {
                stdout: true
            }
        }
    }
	});

	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('build', ['shell:build']);
	grunt.registerTask('test', ['shell:test']);
	grunt.registerTask('darkTest', ['replace:darkTest']);
	grunt.registerTask('darkPublic', ['replace:darkPublic']);
	grunt.registerTask('lightTest', ['replace:lightTest']);
	grunt.registerTask('lightPublic', ['replace:lightPublic']);
	grunt.registerTask('replaceApp', ['replace:replaceApp']);
	grunt.registerTask('default', ['build']);
};


function makePaterns(){
	fillConfig();
	var patterns = [];
	for(var key in config){
		patterns.push({match: key, replacement: config[key]});
	};
	return patterns;
};

function fillConfig() {
	config = require('./config.json');
	var fs = require('fs');

	var exists = fs.existsSync('./config.local.json'); 
	if (exists) {
	    var localConfig = require('./config.local.json');
		for(var key in localConfig){
			config[key] = localConfig[key];
		};
	 };
};