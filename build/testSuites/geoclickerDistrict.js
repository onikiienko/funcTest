var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [	
	function geoclickerDistrict(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.79954420546492, 37.54131317138671", 12);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerDistrictIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117556
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerDistrictEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117557
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerDistrictCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117558
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerDistrictEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117559
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';