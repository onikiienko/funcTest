var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/23590

var testSuite = [	
	function geoclickerSettlement(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "60.02472609630581, 30.752105712890625", 10);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerSettlementIt(driver) {
		return driver.executeScript("map.setLang('it')");
	},
	function geoclickerSettlementEn(driver) {
		return driver.executeScript("map.setLang('en')");
	},
	function geoclickerSettlementCs(driver) {
		return driver.executeScript("map.setLang('cs')");
	},
	function geoclickerSettlementEs(driver) {
		return driver.executeScript("map.setLang('es')");
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';