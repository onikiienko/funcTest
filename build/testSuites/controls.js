var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- Проверяем, что все контролы подгрузились.
*/

var testSuite = [	
	function controlsLoadMap(driver) {
		return helper.waitForDownload(driver);
	}
];

module.exports.testSuite = testSuite;
var demoName = 'controls';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';