var wd = require('selenium-webdriver'),
	helper = require('../../helper');

// http://testrail.2gis.local/index.php?/suites/view/2539/22824

var testSuite = [		
	function geoclickerDefault(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "54.85922, 83.30383", 10);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerDefaultIt(driver) {
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerDefaultEn(driver) {
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerDefaultCs(driver) {
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerDefaultEs(driver) {
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';