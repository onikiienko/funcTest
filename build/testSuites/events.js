var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- кликаем в маркер
- кликаем в геометрию
- кликаем в карту
*/

var testSuite = [
	function eventsClickInMarker(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				driver.findElement(wd.By.xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div')).click();
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function eventsClickInGeometry(driver) {
		return helper.clickPoint(driver, "54.98609, 82.91502", 13)
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function eventsClickInMap(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "54.97732, 82.90747", 13);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	}
];

module.exports.testSuite = testSuite;
var demoName = 'events';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';