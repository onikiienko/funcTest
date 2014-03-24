var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/23608

var testSuite = [	
	function geoclickerFirmCard(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "54.94462, 83.00387", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({id: "141265771876630"}))
			.perform();
	},
	function geoclickerFirmCardOverFirmTitle(driver) {
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({css: ".dg-popup-header-title__firmcard"}))
			.perform();
	},	
	function geoclickerFirmCardOverFirmNumberHint(driver) {
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({css: ".firm-card__comment"}))
			.perform();
	},
	function geoclickerFirmCardBacInList(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({id: "popup-btn-firmCard-back"}))
			.perform();
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';