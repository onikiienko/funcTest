var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function enableRuler(driver) {
		return helper.waitForDownload(driver)
			.then(function() {
				return driver.findElement({css: ".dg-control-round_icon__ruler"}).click();
			});
	},
	function markFirstPoint(driver) {
		return helper.waitForDownload(driver)
			.then(function() {
				return helper.clickCenter(driver);
			});
	},
	function dragPoint(driver) {
		var dropElement = driver.findElement({css: ".dg-ruler-label__container"});
		return new wd.ActionSequence(driver).dragAndDrop(dropElement, {x: 30, y: 30}).perform();
	},
	function dragPoint(driver) {
		return driver.executeScript("map.setZoom(0)");
	}

];

module.exports.testSuite = testSuite;
var demoName = 'ruler';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
