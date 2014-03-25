var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- загружаем карту
*/

var testSuite = [	
	function pluginLoad(driver) {
		return helper.waitForDownload(driver);
	}
];

module.exports.testSuite = testSuite;
var demoName = 'plugin';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';