var fs = require('fs'),
framework = require('./framework');

var args = process.argv.slice(2);
	
runner(args[0], args[1], args[2]);

function runner(browser, skincolor){
	if (arguments[2]){
		var loadedFile = require("./public/testSuites/" + skincolor + "/" + arguments[2] + ".js");
		framework.run(browser, loadedFile, arguments[2]);
	}else{
		require("fs").readdirSync("./public/testSuites/" + skincolor).forEach(function(file) {
			var loadedFile = require("./public/testSuites/" + skincolor + "/" + file);
			framework.run(browser, loadedFile, file);
		});
	};
}

module.exports = runner;