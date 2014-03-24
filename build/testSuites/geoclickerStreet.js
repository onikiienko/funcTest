var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/23594

var testSuite = [
	function geoclickerStreet(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.797855608972036, 37.53779411315918", 14);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerStreetIt(driver) {
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerStreetEn(driver) {
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerStreetCs(driver) {
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerStreetEs(driver) {
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';