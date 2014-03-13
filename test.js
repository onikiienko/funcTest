var wd = require('selenium-webdriver'),
	fs = require('fs'),
	assert = require('assert'),
	imageDiff = require('image-diff'),
	async = require('async'),
	os=require('os');

	var SELENIUM_HOST = 'http://localhost:4455/wd/hub';
	var currentTestSuite = {};

	var args = process.argv.slice(2);
	runner(args[0], args[1], args[2]);

function runner(browser, skincolor){
	if (arguments[2]){
		currentTestSuite = require("./public/testSuites/" + skincolor + "/" + arguments[2] + ".js");
		run(browser, arguments[2]);
	}else{
		require("fs").readdirSync("./public/testSuites/" + skincolor).forEach(function(file) {
			currentTestSuite = require("./public/testSuites/" + skincolor + "/" + file);
			run(browser, file);
		});
	};
}

function run(browser, testSuite){
	var driver1 = makeDriver(browser);
	var driver2 = makeDriver(browser);
	driver1.manage().window().maximize();
	driver2.manage().window().maximize();
	
	console.log("testSuite:  " + testSuite);

	var testSuite = currentTestSuite.testSuite.map(function (test) {
		return wd.promise
			.all([
				makeMoves(driver1, test, currentTestSuite.publicUrl),
				makeMoves(driver2, test, currentTestSuite.testUrl),
			])
			.then(compareImages.bind(null, test))
	});

	wd.promise
		.all(testSuite)
		.then(
			function(data) {
				printResult(data);
				driver1.quit();
				driver2.quit();
			},
			function(err) {
				console.log(err);
			}
		);
};

function printResult(data){
	for (var i = 0; i <= data.length - 1; i++) {
		if (data[i].result){
			console.log(i + ":   " + data[i].testName + ": pass");
			removeScreenshots(data[i].screenshots);
		}else{
			console.log(i + ":   " +"!!!!!!!!!!! " + data[i].testName + " !!!!!!!!!!!");
			giveUrl(data[i].screenshots);
		}
	};
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

function writeFile(name, data, cb) {
    fs.writeFile(name, data, 'base64', function(err) {
    	cb(err, name);
    });
};

function saveScreenshot(data) {
	var screenName = './public/screens/' + Date.now() + ".png";
    var base64Data = data.replace(/^data:image\/png;base64,/,"");
    return wd.promise.checkedNodeCall(writeFile.bind(null, screenName, base64Data));
};

function makeMoves(driver, test, url){
	return driver.get(url)
	.then(test.bind(null, driver))
	.then(function() {
		return driver.takeScreenshot();
	})
	.then(saveScreenshot);
};

function compareImages(test, screenshots){
	var diffUrl = './public/screens/' +'diff' + Date.now() + '.png',
		screenPromise = wd.promise.checkedNodeCall(imageDiff.bind(null, {
		actualImage: screenshots[0],
	  	expectedImage: screenshots[1],
	  	diffImage: diffUrl,
		})
	);
	screenshots.push(diffUrl)
	return wd.promise.when(screenPromise, function(data) {
		return {
			screenshots: screenshots,
			testName: test.name,
			result: data
		};
	});
};

module.exports = runner;