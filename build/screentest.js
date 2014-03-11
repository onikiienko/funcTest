var wd = require('selenium-webdriver'),
	fs = require('fs'),
	assert = require('assert'),
	imageDiff = require('image-diff'),
	async = require('async');

	var SELENIUM_HOST = 'http://localhost:4455/wd/hub';
	var currentTestSuite = require('./public/testSuites/dark/geoclicker');
	run('firefox');

function run(browser){
	var driver1 = makeDriver(browser);
	var driver2 = makeDriver(browser);

	var testSuite = currentTestSuite.testSuite.map(function (test) {
		return wd.promise
			.all([
				makeMoves(driver1, test, currentTestSuite.publicUrl),
				makeMoves(driver2, test, currentTestSuite.testUrl),
			])
			.then(compareImages)
	});

	wd.promise
		.all(testSuite)
		.then(
			function(data) {
				driver1.quit();
				driver2.quit();
			},
			function(err) {
				console.log(err);
			}
		);
};

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

function compareImages(screenshots){
	console.log(screenshots[0], screenshots[1])
	return wd.promise.checkedNodeCall(imageDiff.bind(null, {
		actualImage: screenshots[0],
	  	expectedImage: screenshots[1],
	  	diffImage: './public/screens/' +'diff' + Date.now() + '.png',
		})
	);
};

module.exports.run = run;