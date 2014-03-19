var wd = require('selenium-webdriver'),
	helper = require('../../helper');

var testSuite = [
	//geoclickerDefaultIt
	function clickInDefault(driver) {
		//http://testrail.2gis.local/index.php?/cases/view/112577
		return helper.waitForDownload(driver)
		.then(function(){
			return driver.findElement({css: ".dg-control-round_icon__ruler"}).click()
		})
		.then(function(){
			return helper.waitForDownload(driver)
		})
		.then(function(){
			return helper.clickPoint(driver, "60.02472609630581, 30.752105712890625");
		})		
		.then(function(){
			return helper.waitForDownload(driver)
		})
	},
	function moveControl(driver){
		return new wd.ActionSequence(driver)
		.dragAndDrop(driver.findElement({css: ".dg-ruler-label__container"}), {x: 50, y: 50})
		.perform()
	}
];

module.exports.testSuite = testSuite;
var demoName = 'controls';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';