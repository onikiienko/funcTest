var config = {};

module.exports = function(grunt) {
	grunt.initConfig({
		replace: {
			copyFiles: {
				options: {
					force: true,
					patterns: [
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['build/testSuites/*'], dest: 'public/testSuites/dark'},
				  {expand: true, flatten: true, src: ['build/testSuites/*'], dest: 'public/testSuites/light'},
				  {expand: true, flatten: true, src: ['build/demos/*'], dest: 'public/demos/light/public'},
				  {expand: true, flatten: true, src: ['build/demos/*'], dest: 'public/demos/light/test'},
				  {expand: true, flatten: true, src: ['build/demos/*'], dest: 'public/demos/dark/public'},
				  {expand: true, flatten: true, src: ['build/demos/*'], dest: 'public/demos/dark/test'},
				  {expand: true, flatten: true, src: ['build/source/*'], dest: 'public/'},
				  {expand: true, flatten: true, src: ['build/*.js'], dest: './'}
				]
			},
			darkTest: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'dark'
					},
					{
						match: 'application',
						replacement: 'http://10.110.40.37:3000'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['public/demos/dark/test/*.html'], dest: 'public/demos/dark/test'}
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
						replacement: 'http://maps.api.2gis.ru/2.0'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['public/demos/dark/public/*.html'], dest: 'public/demos/dark/public'}
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
						replacement: 'http://10.110.40.37:3000'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['public/demos/light/test/*.html'], dest: 'public/demos/light/test'}
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
						replacement: 'http://maps.api.2gis.ru/2.0'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['public/demos/light/public/*.html'], dest: 'public/demos/light/public'}
				]	
			},
			lightSuite: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'light'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['public/testSuites/light/*'], dest: 'public/testSuites/light'}
				]	
			},
			darkSuite: {
				options: {
					patterns: [
					{
					  match: 'skinColor',
					  replacement: 'dark'
					}
					]
				},
				files: [
				  {expand: true, flatten: true, src: ['public/testSuites/dark/*'], dest: 'public/testSuites/dark'}
				]	
			},
			replaceApps: {
				options: {
				    patterns: makePaterns()
				},		
				files: [
			      	{expand: true, flatten: true, src: ['public/demos/dark/public/*'], dest: 'public/demos/dark/public'},
			      	{expand: true, flatten: true, src: ['public/demos/dark/test/*'], dest: 'public/demos/dark/test'},
			      	{expand: true, flatten: true, src: ['public/demos/light/public/*'], dest: 'public/demos/light/public'},
			      	{expand: true, flatten: true, src: ['public/demos/light/test/*'], dest: 'public/demos/light/test'},
			      	{expand: true, flatten: true, src: ['public/testSuites/dark/*'], dest: 'public/testSuites/dark'},
			      	{expand: true, flatten: true, src: ['public/testSuites/light/*'], dest: 'public/testSuites/light'},
			      	{expand: true, flatten: true, src: ['*.js'], dest: './'}
			    ]
			},
		},
	    shell: {
	        makeDirs: {
	            command: [
	                'mkdir ./public',
	                'mkdir ./public/screens'
	            ].join('&&'),
	            options: {
	                stdout: true
	            }
	        },
			build: {
	            command: [
	                'rm -R public',
	                'grunt mkdir',
	                'grunt cp',
	                'grunt darkTest',
	                'grunt darkPublic',
	                'grunt lightTest',
	                'grunt lightPublic',
	                'grunt replaceApps',
	                'grunt darkSuite',
	                'grunt lightSuite'
	            ].join('&&'),
	            options: {
	                stdout: true
	            }
			}
	    }
	});

	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('mkdir', ['shell:makeDirs']);
	grunt.registerTask('build', ['shell:build']);
	grunt.registerTask('cp', ['replace:copyFiles']);
	grunt.registerTask('darkTest', ['replace:darkTest']);
	grunt.registerTask('darkPublic', ['replace:darkPublic']);
	grunt.registerTask('lightTest', ['replace:lightTest']);
	grunt.registerTask('lightPublic', ['replace:lightPublic']);
	grunt.registerTask('replaceApps', ['replace:replaceApps']);
	grunt.registerTask('darkSuite', ['replace:darkSuite']);
	grunt.registerTask('lightSuite', ['replace:lightSuite']);
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