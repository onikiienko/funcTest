var wd = require('selenium-webdriver'),
	map = require('../../helper');

var testSuite = [
	function test1(driver) {
		map.waitForDownload(driver);
		map.clickCenter(driver);
		map.waitForDownload(driver);
		driver.findElement({css: ".dg-zoom__in"}).click();
		map.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function test2(driver) {
		map.waitForDownload(driver);
		return wd.promise.Promise;
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';