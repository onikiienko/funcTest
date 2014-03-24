var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/23591


var testSuite = [		
	function geoclickerDivision(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.80475427021683, 37.54508972167968", 11);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerDivisionIt(driver) {
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerDivisionEn(driver) {
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerDivisionCs(driver) {
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerDivisionEs(driver) {
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';