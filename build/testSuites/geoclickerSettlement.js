var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [	
	function geoclickerSettlement(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117548
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "60.02472609630581, 30.752105712890625", 10);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
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
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';