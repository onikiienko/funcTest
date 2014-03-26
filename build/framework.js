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

function run(browser, file, fileName){
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
			console.log('PUBLIC APP ' + fileName);
			return runTests(file, driver1)
				.then(function (name) {
					console.log('TEST APP ' + fileName);
					return runTests(file, driver2)
						.then(function(name2) {
							return wd.promise.fulfilled([name, name2]);
						}, function (err) { 
							console.log(err);
						});
				}, function (err) { 
					console.log(err);
				})
				.then(function (data) {
					driver1.quit();
					driver2.quit();
					return compareImages(data);
				}, function (err) { 
					console.log(err);
				})
				.then(function (data){
					console.log('================');
					console.log('Results ' + fileName);
					console.log('================');
					data.forEach(function(obj){ 
						if (obj.result){
							console.log(clc.greenBright(obj.test + ": Pass"));
							generateResultPage(obj);
						}else{
							console.log(clc.redBright(obj.test + ": Fail"));
							generateResultPage(obj);
						}
					});
					console.log('================');

				});
		},
		function(err) {
			driver1.quit();
			driver2.quit();
			console.log(err);
		}
	);
};

function generateResultPage(obj){
	var file = obj.test + Date.now()
	var stream = fs.createWriteStream("public/results/" + file + ".html");
	stream.once('open', function(fd) {
		stream.write('<img src="http://' + takeIp() + ':3001/' + obj.first.substring(9, obj.first.length) + '" border="2">');
	  	stream.write('<img src="http://' + takeIp() + ':3001/' + obj.second.substring(9, obj.first.length) + '" border="2">');
	  	stream.write('<img src="http://' + takeIp() + ':3001/' + obj.diffScreenName.substring(9, obj.first.length) + '" border="2">');
	  	stream.end();
	});
	console.log('http://' + takeIp() + ':3001/results/' + file + '.html');
}

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
	var first = screenshots[0];
	var second = screenshots[1];
	var promises = first.map(function(screen, key) {
		var diffUrl = './public/screens/' + screen.test + 'diff' + '.png';
		return wd.promise.checkedNodeCall(
			imageDiff.bind(null, {
				actualImage: screen.name,
				expectedImage: second[key].name,
				diffImage: diffUrl
			})
		)
		.then(function(imagesAreSame) {
			return wd.promise.fulfilled({
				'test': screen.test,
				'first': screen.name,
				'second': second[key].name,
				'result': imagesAreSame,
				'diffScreenName': diffUrl
			});
		});
	});

	return wd.promise.all(promises);
};


module.exports.run = run;