var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- кликаем в маркер
- кликаем в геометрию
*/

var testSuite = [	
	function geoJSONClickInMarker(driver) {
		return helper.waitForDownload(driver)
			.then(function (){
				driver.findElement(wd.By.xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div')).click();
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	},
	function geoJSONClickInGeometry(driver){
		return helper.clickPoint(driver, "55.0416, 82.91755", 16)
			.then(function (){
				return helper.waitForPopup(driver);
			});
	}	
];

module.exports.testSuite = testSuite;
var demoName = 'geoJSON';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';