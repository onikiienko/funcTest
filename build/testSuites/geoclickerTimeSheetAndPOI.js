var wd = require('selenium-webdriver'),
	helper = require('../../helper');

//http://testrail.2gis.local/index.php?/suites/view/2539/22825

var testSuite = [	
	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.75037452250795, 37.60576072679045", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({css: ".schedule_open_false"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},


	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.758437932269445, 37.6017793036197", 16);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({css: ".schedule_open_false"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},



	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.75067824335305, 37.61012631449245", 16);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},



	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.7507633808235, 37.610143292651344", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},



	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.74946713765855, 37.613217102974744", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({css: ".schedule_open_false"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},


	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.754013304161106, 37.612581050837846", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({css: ".schedule_open_false"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},


	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.7519367827325, 37.6108439336572", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({css: ".schedule_open_false"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},


	function geoclickerTimeSheetAndPOI(driver) {
		return driver.executeScript("map.setLang('ru')")			
			.then(function() {
				return helper.clickPoint(driver, "55.7587533676188, 37.61160143802055", 17);
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoclickerFirmCardGoToCard(driver) {
		return new wd.ActionSequence(driver)
			.click(driver.findElement({css: ".schedule_open_false"}))
			.perform();
	},
	function geoclickerHouseAndFirmlistScrolldown(driver) {
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
			.perform();
	},

];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';