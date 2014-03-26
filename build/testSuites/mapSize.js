var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- нажимаем кнопку для смены размера геометрии
*/

var testSuite = [	
	function mapSizeClickButton(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				return driver.findElement({id: 'changeSize'}).click();
			});
	}
];

module.exports.testSuite = testSuite;
var demoName = 'mapSize';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';