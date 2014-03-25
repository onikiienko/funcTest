var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- Смотрим, что маркера отобразились(запрос прошел)
- В ответе корректные данные
*/
var testSuite = [	
	function ajaxClickInMarker(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				driver.findElement(wd.By.xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[1]')).click();
			})
			.then(function() {
				return helper.waitForPopup(driver);
			});
	}
];

module.exports.testSuite = testSuite;
var demoName = 'ajax';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';