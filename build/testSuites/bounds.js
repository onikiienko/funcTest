var wd = require('selenium-webdriver'),
	helper = require('../../helper');

/*
- отзумится
- попробовать продрагать карту за баунд
*/

var testSuite = [	
	function boundsZoomOut(driver) {
		return helper.waitForDownload(driver)
			.then(function (){
				driver.executeScript('map.setZoom(10);');
			});
	},
	function boundsDragMap(driver){
		return new wd.ActionSequence(driver)
			.dragAndDrop(driver.findElement({id: "map"}), {x: 500, y: 0})
			.perform();
	}
];

module.exports.testSuite = testSuite;
var demoName = 'bounds';
module.exports.testUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/' + demoName + '.html';