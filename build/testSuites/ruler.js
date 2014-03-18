var wd = require('selenium-webdriver'),
	map = require('../../helper');

var testSuite = [
	function clickInHouse(driver) {
		map.waitForDownload(driver);
		map.clickCenter(driver);
		map.waitForDownload(driver);
		driver.findElement({css: ".dg-zoom__in"}).click();
		map.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function clickInStreet(driver) {
		map.waitForDownload(driver);
		return wd.promise.Promise;
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';