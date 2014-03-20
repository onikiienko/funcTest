var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [		
	function geoclickerDivision(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.80475427021683, 37.54508972167968", 11);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerDivisionIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117549
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerDivisionEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117550
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerDivisionCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117551
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerDivisionEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117552
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';