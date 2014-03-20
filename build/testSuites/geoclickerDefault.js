var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [	
	function geoclickerDefault(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112577
		return helper.waitForDownload(driver)			
			.then(function() {
				return helper.clickPoint(driver, "59.95019685841227, 30.53237915039062", 10);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerDefaultIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112578
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerDefaultEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112579
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerDefaultCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112580
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerDefaultEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112581
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';