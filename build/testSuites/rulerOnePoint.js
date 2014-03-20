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
		var firstPoint = driver.findElement({css: ".dg-ruler-label__container"});
		return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 30, y: 30}).perform();
	},
	function dragPointToWorldCopy(driver) {
		var firstPoint = driver.findElement({css: ".dg-ruler-label__container"});
		return driver.executeScript("map.setZoom(0)")
			.then(function() {
				return helper.waitForDownload(driver);
			})
			.then(function() {
				return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 100, y: 0}).perform();
			});
	},
	function dragPointUpAboardTiles(driver) {
		var firstPoint = driver.findElement({css: ".dg-ruler-label__container"});
		return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 100, y: -200}).perform();
	},
	function dragPointDownAboardTiles(driver) {
		var firstPoint = driver.findElement({css: ".dg-ruler-label__container"});
		return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 100, y: 300}).perform();
	},
	function deletePoint(driver) {
		return driver.findElement({css: ".dg-ruler-label__delete"}).click();
	},
	function markPoint(driver) {
		var location = driver.findElement({id: "map"});
		return driver.executeScript("map.setZoom(2)")
			.then(function() {
				return helper.waitForDownload(driver);
			})
			.then(function() {
				return new wd.ActionSequence(driver).mouseMove(location, {x: 60, y:500}).click().perform();
			});
	},


];

module.exports.testSuite = testSuite;
var demoName = 'ruler';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
