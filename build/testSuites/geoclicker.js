var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [	
	// //geoclickerDefaultIt

	// function clickInDefault(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112577
	// 	return helper.waitForDownload(driver)			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "59.95019685841227, 30.53237915039062", 10);
	// 		});
	// },
	// function geoclickerDefaultIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112578
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerDefaultEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112579
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerDefaultCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112580
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerDefaultEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112581
	// 	return driver.executeScript("map.setLang('es')");
	// },

	// //clickInCity

	// function clickInCity(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112577
	// 	return driver.executeScript("map.setLang('ru')")			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "59.92474296688904, 30.3277587890625", 8);
	// 		});
	// },
	// function geoclickerCityIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112578
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerCityEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112579
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerCityCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112580
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerCityEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/112581
	// 	return driver.executeScript("map.setLang('es')");
	// },
	
	// //clickInSettlement

	// function clickInSettlement(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117548
	// 	return driver.executeScript("map.setLang('ru')")			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "60.02472609630581, 30.752105712890625", 10);
	// 		});
	// },
	// function geoclickerSettlementIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117549
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerSettlementEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117550
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerSettlementCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117551
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerSettlementEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117552
	// 	return driver.executeScript("map.setLang('es')");
	// },
	
	// //clickInDivision

	// function clickInDivision(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117548
	// 	return driver.executeScript("map.setLang('ru')")			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "55.80475427021683, 37.54508972167968", 11);
	// 		});
	// },
	// function geoclickerDivisionIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117549
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerDivisionEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117550
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerDivisionCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117551
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerDivisionEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117552
	// 	return driver.executeScript("map.setLang('es')");
	// },

	// //clickInDistrict

	// function clickInDistrict(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117548
	// 	return driver.executeScript("map.setLang('ru')")			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "55.79954420546492, 37.54131317138671", 12);
	// 		});
	// },
	// function geoclickerDistrictIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117556
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerDistrictEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117557
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerDistrictCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117558
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerDistrictEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117559
	// 	return driver.executeScript("map.setLang('es')");
	// },
	
	// //clickInPlace		

	// function clickInPlace(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117548
	// 	return driver.executeScript("map.setLang('ru')")			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "55.79076270406372, 37.52663612365723", 15);
	// 		});
	// },
	// function geoclickerPlaceIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117560
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerPlaceEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117561
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerPlaceCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117562
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerPlaceEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117563
	// 	return driver.executeScript("map.setLang('es')");
	// },

	// //clickInStreet

	// function clickInStreet(driver) {
	// 	return driver.executeScript("map.setLang('ru')")			
	// 		.then(function() {
	// 			return helper.clickPoint(driver, "55.797855608972036, 37.53779411315918", 14);
	// 		});
	// 	//http://testrail.2gis.local/index.php?/cases/view/117548
	// },
	// function geoclickerStreetIt(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117560
	// 	return driver.executeScript("map.setLang('it')");
	// },
	// function geoclickerStreetEn(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117561
	// 	return driver.executeScript("map.setLang('en')");
	// },
	// function geoclickerStreetCs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117562
	// 	return driver.executeScript("map.setLang('cs')");
	// },
	// function geoclickerStreetEs(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117563
	// 	return driver.executeScript("map.setLang('es')");
	// },

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
	// function geoclickerHouseAndFirmlistScrolldown(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117562
	// 	return new wd.ActionSequence(driver)
	// 		.dragAndDrop(driver.findElement({css: ".scroller__bar"}), {x: 0, y: 100})
	// 		.perform();
	// },
	// function geoclickerHouseAndFirmlistOverBackButton(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117563
	// 	return new wd.ActionSequence(driver)
	// 		.mouseMove(driver.findElement({css: ".popup_footer_btn-wrapper"}))
	// 		.perform();
	// },
	// function geoclickerHouseAndFirmlistClickBackButton(driver) {
	// 	//http://testrail.2gis.local/index.php?/cases/view/117561
	// 	return new wd.ActionSequence(driver)
	// 		.click()
	// 		.perform();
	// }

];

module.exports.testSuite = testSuite;
var demoName = 'geoclicker';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';