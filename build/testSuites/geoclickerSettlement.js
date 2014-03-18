var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	function clickInSettlement(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112577
		return helper.waitForDownload(driver)			
			.then(function() {
				return helper.clickPoint(driver, "60.02472609630581, 30.752105712890625");
			});
		
		return wd.promise.Promise;
	},
	function geoclickerSettlementIt(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112578
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerSettlementEn(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112579
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerSettlementCs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112580
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerSettlementEs(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112581
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';