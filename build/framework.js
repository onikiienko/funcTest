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
			console.log('Public app');
			return runTests(file, driver1)
				.then(function (name) {
					console.log('Test app');
					return runTests(file, driver2)
						.then(function(name2) {
							return wd.promise.fulfilled([name, name2]);
						});
				})
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

function runTests(file, driver) {
	return wd.promise.all(
		file.testSuite.map(makeMoves.bind(null, driver))
	);
};

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
	for (var i = 0; i < screenshots[0].length; i++) {
		var diffUrl = './public/screens/' + screenshots[0][i].test + 'diff' + '.png';
		imageDiff({
		 		actualImage: screenshots[0][i].name,
		 	  	expectedImage: screenshots[1][i].name,
		 	  	diffImage: diffUrl
	 		}, function (err, imagesAreSame) {
	 				console.log(imagesAreSame);
				}
		);
	};
};

module.exports.run = run;