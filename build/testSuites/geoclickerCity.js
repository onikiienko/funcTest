var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/22825

var testSuite = [	
	function geoclickerCity(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "59.92474296688904, 30.3277587890625", 8);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerCityIt(driver) {
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerCityEn(driver) {
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerCityCs(driver) {
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerCityEs(driver) {
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';