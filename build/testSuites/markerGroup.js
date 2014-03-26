var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- нажимаем кнопку для отображения маркеров
- нажимаем кнопку для скрытия маркеров
*/

var testSuite = [	
	function markerGroupShow(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				return driver.findElement({id: 'show'}).click();
			});
	},
	function markerGroupHide(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				return driver.findElement({id: 'hide'}).click();
			});
	}
];

module.exports.testSuite = testSuite;
var demoName = 'markerGroup';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';