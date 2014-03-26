var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- наводим курсор на геометрию
*/

var testSuite = [	
	function geometriesWithHintsMouseOverGeometry(driver) {
		return helper.waitForDownload(driver)
			.then(function () {
				helper.mouseOver(driver, '54.98751, 82.88876', 14);
			});
	}
];

module.exports.testSuite = testSuite;
var demoName = 'geometriesWithHints';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';