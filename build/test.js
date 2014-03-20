var wd = require('selenium-webdriver'),
	fs = require('fs'),
	assert = require('assert'),
	imageDiff = require('image-diff'),
	async = require('async'),
	os=require('os'),
	clc = require('cli-color'),
	helper = require('./public/helper');

	var SELENIUM_HOST = '@@webDriverIp';
	var currentTestSuite = {};

	var args = process.argv.slice(2);
	
runner(args[0], args[1], args[2]);

function runner(browser, skincolor){
	if (arguments[2]){
		var loadedFile = require("./public/testSuites/" + skincolor + "/" + arguments[2] + ".js");
		run(browser, loadedFile, arguments[2]);
	}else{
		require("fs").readdirSync("./public/testSuites/" + skincolor).forEach(function(file) {
			var loadedFile = require("./public/testSuites/" + skincolor + "/" + file);
			run(browser, loadedFile, file);
		});
	};
}

function runTests(file, driver) {
	return wd.promise.all(
		file.testSuite.map(makeMoves.bind(null, driver))
	);
};

function run(browser, file){
	var driver1 = makeDriver(browser);
	var driver2 = makeDriver(browser);
	driver1.manage().window().maximize();
	driver2.manage().window().maximize();
	var promise1 = driver1.get(file.publicUrl);
	var promise2 = driver2.get(file.testUrl);
	var screenshots = [];
		wd.promise
		.all([promise1, promise2])
		.then(
			function() {
				return wd.promise
					.all([
						runTests(file, driver1),
						runTests(file, driver2)
					])
					.then(function (data) {
						driver1.quit();
						driver2.quit();
						compareImages(data);
					});
			},
			function(err) {
				driver1.quit();
				driver2.quit();
				console.log(err);
			}
		);
};

function printResult(data, file){
	console.log('++++++++++++++++++');
	console.log('Results of ' + file + ':');
	console.log('++++++++++++++++++');
	for (var i = 0; i <= data.length - 1; i++) {
		if (data[i].result){
			console.log(clc.blueBright(data[i].testName) + '  :  ' + clc.greenBright('pass'));
			//removeScreenshots(data[i].screenshots);
		}else{
			console.log(clc.blueBright(data[i].testName) + '  :  ' + clc.redBright('fail'));
			giveUrl(data[i].screenshots);
		}
	};
	console.log('==================');
}

function giveUrl(screenshots){
	for (var j = screenshots.length - 1; j >= 0; j--) {
		console.log("http://" + takeIp() + ":3001/" + screenshots[j].substring(9));
	}
}

function takeIp(){
	var interfaces = os.networkInterfaces();
	var addresses = '';
	for (k in interfaces) {
	    for (k2 in interfaces[k]) {
	        var address = interfaces[k][k2];
	        if (address.family == 'IPv4' && !address.internal) {
	            addresses = address.address;
	        }
	    }
	}
	return addresses;
}

function removeScreenshots(screenshots){
	for (var j = screenshots.length - 1; j >= 0; j--) {
		var filename = screenshots[j];
		var tempFile = fs.openSync(filename, 'r');
		fs.closeSync(tempFile);
		fs.unlinkSync(filename);
	};
}

function makeDriver(browser){
	return new wd.Builder()
	   .usingServer(SELENIUM_HOST)
	   .withCapabilities({ 'browserName': browser})
	   .build();
};

function writeFile(name, data, test, cb) {
    fs.writeFile(name, data, 'base64', function(err) {
    	cb(err, {
    		'test': test,
    		'name': name
    	});
    });
};

function saveScreenshot(data, testName) {
	var screenName = './public/screens/' + testName + Date.now() + ".png";
    var base64Data = data.replace(/^data:image\/png;base64,/,"");
    return wd.promise.checkedNodeCall(writeFile.bind(null, screenName, base64Data, testName));
};

function makeMoves(driver, test) {
	return test(driver)
	.then(function(){
		console.log(clc.blueBright(test.name));
	}, function(err){
		console.log(clc.redBright(err.message));
	})
	.then(helper.waitForDownload.bind(null, driver))
	.then(function() {
		return driver.takeScreenshot();
	})
	.then(function (data){return saveScreenshot(data, test.name)});
};

function compareImages(screenshots){
	for (var i = screenshots[0].length - 1; i >= 0; i--) {
		var diffUrl = './public/screens/' + 'diff' + screenshots[0][i].test + '.png';
		imageDiff({
		 		actualImage: screenshots[0][i].name,
		 	  	expectedImage: screenshots[1][i].name,
		 	  	diffImage: diffUrl
	 		}, function (err, imagesAreSame) {
	 				console.log('+++++++++++++++++++++++');
	 				console.log(imagesAreSame);
	 				// console.log(screenshots[0][i].name);
	 				// console.log(screenshots[1][i].name);
	 				// console.log(screenshots[0][i].test);
	 				console.log('+++++++++++++++++++++++');
		})
	};

};

module.exports = runner;