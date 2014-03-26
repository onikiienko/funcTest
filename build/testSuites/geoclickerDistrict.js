var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/23592

var testSuite = [	
	function geoclickerDistrict(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.79954420546492, 37.54131317138671", 12);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerDistrictIt(driver) {
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerDistrictEn(driver) {
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerDistrictCs(driver) {
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerDistrictEs(driver) {
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';