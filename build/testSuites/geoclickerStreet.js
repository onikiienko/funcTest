var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function clickInStreet(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return helper.waitForDownload(driver)			
			.then(function() {
				return helper.clickPoint(driver, "55.797855608972036, 37.53779411315918");
			});
		
		return wd.promise.Promise;
	},
	function geoclickerStreetIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117560
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerStreetEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117561
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerStreetCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117562
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerStreetEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117563
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';