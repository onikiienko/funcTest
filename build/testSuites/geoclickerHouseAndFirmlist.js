var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [	
	//HouseAndFirmlist 

	function clickInHouseAndFirmlist(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117579
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.74768297992507, 37.538909912109375", 17);
			});
	},
	function geoclickerHouseAndFirmlistOverAllButton(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117580
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({css: ".popup_footer_btn-wrapper"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistClickAllButton(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117561
		return new wd.ActionSequence(driver)
			.click()
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117562
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},
	function geoclickerHouseAndFirmlistOverBackButton(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117563
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({css: ".popup_footer_btn-wrapper"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistClickBackButton(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/117561
		return new wd.ActionSequence(driver)
			.click()
			.perform();
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';