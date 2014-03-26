var wd = require('selenium-webdriver');

function waitForDownload(driver){
	return driver.isElementPresent({ css: '.loaded' }).then(function() {
		return driver.sleep(1000);
	});
}

function waitForPopup(driver){
	return driver.isElementPresent({ css: '.dg-popup-header-title' }).then(function() {
		return driver.sleep(1000);
	});
}

function clickCenter(driver){
	return driver.findElement({id: "map"}).click();
}

function clickPoint(driver, point){
	var zoom = '';
	if(arguments[2]){
		zoom = ', ' + arguments[2];
	} 
	return driver.executeScript('map.setView(new DG.LatLng(' + point + ')' + zoom + ');')		
	.then(function() {
		return waitForDownload(driver);
	})
	.then(function() {
		return clickCenter(driver);
	});
}

function mouseOver(driver, point) {
	var zoom = '';
	if(arguments[2]){
		zoom = ', ' + arguments[2];
	} 
	return driver.executeScript('map.setView(new DG.LatLng(' + point + ')' + zoom + ');')
	.then(function(){
		driver.sleep(1000)
	})
	.then(function(){
		return new wd.ActionSequence(driver)
			.mouseMove(driver.findElement({id: "map"}))
			.perform();
	});
}

module.exports.mouseOver = mouseOver;
module.exports.waitForPopup = waitForPopup;
module.exports.waitForDownload = waitForDownload;
module.exports.clickCenter = clickCenter;
module.exports.clickPoint = clickPoint;