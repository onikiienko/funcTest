
function waitForDownload(driver){
	return driver.isElementPresent({ css: '.loaded' }).then(function() {
		return driver.sleep(1000);
	});
}

function clickCenter(driver){
	driver.findElement({id: "map"}).click();
}

function clickPoint(driver, point){
		if(arguments[2]){
			driver.executeScript('map.setView(new DG.LatLng(' + point + '), ' + arguments[2] + ');');
			waitForDownload(driver);
			clickCenter(driver);
			return;
		}
		driver.executeScript('map.setView(new DG.LatLng(' + point + '));');
		waitForDownload(driver);
		clickCenter(driver);
}

module.exports.waitForDownload = waitForDownload;
module.exports.clickCenter = clickCenter;
module.exports.clickPoint = clickPoint;