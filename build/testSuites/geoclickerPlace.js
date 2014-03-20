var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [	
	//clickInPlace		

	function clickInPlace(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.79076270406372, 37.52663612365723", 15);
			});
	},
	function geoclickerPlaceIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117560
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerPlaceEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117561
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerPlaceCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117562
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerPlaceEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117563
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';