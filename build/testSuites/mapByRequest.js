var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- кликаем в кнопку для создания карты
*/

var testSuite = [	
	function mapByRequestClickButton(driver) {
		return driver.findElement({id: 'create'}).click();
	}
];

module.exports.testSuite = testSuite;
var demoName = 'mapByRequest';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';