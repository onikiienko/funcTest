var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function clickInDefault(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112577
		return helper.waitForDownload(driver)			
			.then(function() {
				return helper.clickPoint(driver, "59.95019685841227, 30.53237915039062", 10);
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
	},function clickInCity(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112577
		return helper.clickPoint(driver, "59.92474296688904, 30.3277587890625", 8);
	},
	function geoclickerCityIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112578
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerCityEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112579
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerCityCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112580
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerCityEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112581
		return driver.executeScript("map.setLang('es')");
	},function clickInSettlement(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return helper.clickPoint(driver, "60.02472609630581, 30.752105712890625", 10);
	},
	function geoclickerSettlementIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117549
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerSettlementEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117550
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerSettlementCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117551
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerSettlementEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117552
		return driver.executeScript("map.setLang('es')");
	},function clickInDivision(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return helper.clickPoint(driver, "55.80475427021683, 37.54508972167968", 11);
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
	},function clickInDistrict(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return helper.clickPoint(driver, "55.79954420546492, 37.54131317138671", 12);
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
	},function clickInPlace(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return helper.clickPoint(driver, "55.79076270406372, 37.52663612365723", 15);
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
	},function clickInStreet(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return helper.clickPoint(driver, "55.797855608972036, 37.53779411315918", 14);
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