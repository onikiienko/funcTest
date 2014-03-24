var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/23595

var testSuite = [	
	function geoclickerHouseAndFirmlist(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.74768297992507, 37.538909912109375", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerHouseAndFirmlistOverAllButton(driver) {
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({css: ".popup_footer_btn-wrapper"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistClickAllButton(driver) {
		return new wd.ActionSequence(driver)
			.click()
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},
	function geoclickerHouseAndFirmlistOverBackButton(driver) {
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({css: ".popup_footer_btn-wrapper"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistClickBackButton(driver) {
		return new wd.ActionSequence(driver)
			.click()
			.perform();
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';