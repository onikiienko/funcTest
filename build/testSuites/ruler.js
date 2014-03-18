var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function enableRuler(driver) {
		helper.waitForDownload(driver);
		driver.executeScript("alert('Ruler')");
		driver.findElement({class: ".dg-control-round_icon__ruler"}).click();
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function markFirstPoint(driver) {
		helper.waitForDownload(driver);
		helper.clickCenter(driver);
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function dragPoint(driver) {
		helper.waitForDownload(driver);
		driver.findElement(webdriver.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div/div/div")).mouseDown();
		helper.mouseMove();
		return wd.promise.Promise;
	},

];

module.exports.testSuite = testSuite;
var demoName = 'ruler';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
