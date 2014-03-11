var wd = require('selenium-webdriver');

var testSuite = [];
var test1 = function(driver) {
	//driver.findElement({xpath: '/html/body/div/div/div[2]/div[3]/div'}).click();
	return wd.promise.Promise;
}

var test2 = function(driver) {
	//driver.findElement({xpath: '/html/body/div/div/div[2]/div[3]/div'}).click();
	return wd.promise.Promise;
}

testSuite.push(test1);
testSuite.push(test2);
module.exports = testSuite;