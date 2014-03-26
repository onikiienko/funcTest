var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- нажимаем кнопку для отображения балуна
*/

var testSuite = [	
	function markerOpenProgramClickButoon(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				return driver.findElement({id: 'showPopup'}).click();
			});
	}
];

module.exports.testSuite = testSuite;
var demoName = 'markerOpenProgram';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';