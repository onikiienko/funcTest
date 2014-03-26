var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function markTwoDots(driver) {
		return helper.waitForDownload(driver)
			.then(function() {
				return driver.findElement({css: ".dg-control-round_icon__ruler"}).click();
				//return driver.findElement(wd.By.xpath('//*[@id="map"]/div[2]/div[2]/div[2]/a')).click();
			})
			.then(function() {
				return helper.waitForDownload(driver);
			})
			.then(function() {
				return helper.clickCenter(driver);
			})
			.then(function() {
				return helper.waitForDownload(driver);
			})
			.then(function() {
				var firstPoint = driver.findElement({css: ".dg-ruler-label__point"});
				return new wd.ActionSequence(driver).mouseMove(firstPoint, {x: 100, y:0}).click().perform();
			});
	},
	function dragFirstPoint(driver) {
		var firstPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[1]"));
		return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: -80, y: 80}).perform();
	},
	function dragSecondPoint(driver) {
		var secondPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[2]/div"));
		return new wd.ActionSequence(driver).dragAndDrop(secondPoint, {x: 100, y: -80}).perform();
	},
	function dragFirstPointToWorldCopy(driver) {
		var firstPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[1]"));
		return driver.executeScript("map.setZoom(0)")
			.then(function() {
				return helper.waitForDownload(driver);
			})
			.then(function() {
				return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 100, y: 0}).perform();
			});
	},
	function dragSecondPointToWorldCopy(driver) {
		var secondPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[2]/div"));
		return new wd.ActionSequence(driver).dragAndDrop(secondPoint, {x: -100, y: 0}).perform();
	},
	function dragFirstPointUpAboardTiles(driver) {
		var firstPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[1]"));
		return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 0, y: -200}).perform();
	},
	function dragSecondPointUpAboardTiles(driver) {
		var secondPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[2]/div"));
		return new wd.ActionSequence(driver).dragAndDrop(secondPoint, {x: 0, y: -200}).perform();
	},
	function dragFirstPointDownAboardTiles(driver) {
		var firstPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[1]"));
		return new wd.ActionSequence(driver).dragAndDrop(firstPoint, {x: 0, y: 300}).perform();
	},
	function dragSecondPointDownAboardTiles(driver) {
		var secondPoint = driver.findElement(wd.By.xpath("//*[@id='map']/div[1]/div[2]/div[3]/div[2]/div"));
		return new wd.ActionSequence(driver).dragAndDrop(secondPoint, {x: 0, y: 300}).perform();
	},
	function deleteFirstPoint(driver) {
		var firstPoint = driver.findElement({css: ".dg-ruler-label__spacer"});
		var deletePoint = driver.findElement({css: ".dg-ruler-label__delete"});
		return new wd.ActionSequence(driver).mouseMove(firstPoint).mouseMove(deletePoint).click().perform();
	},
	function deletePoint(driver) {
		return driver.findElement({css: ".dg-ruler-label__delete"}).click();
	}
];

module.exports.testSuite = testSuite;
var demoName = 'ruler';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
