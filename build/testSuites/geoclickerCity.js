var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function clickInCity(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112577
		helper.waitForDownload(driver);
		helper.clickPoint(driver, "59.95019685841227, 30.53237915039062");
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function geoclickerCityIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112578
		driver.executeScript("map.setLang('it')");
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function geoclickerCityEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112579
		driver.executeScript("map.setLang('en')");
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function geoclickerCityCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112580
		driver.executeScript("map.setLang('cs')");
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	},
	function geoclickerCityEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112581
		driver.executeScript("map.setLang('es')");
		helper.waitForDownload(driver);
		return wd.promise.Promise;
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';