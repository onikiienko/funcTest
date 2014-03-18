
function waitForDownload(driver){
	return driver.isElementPresent({ css: '.loaded' }).then(function() {
		return driver.sleep(2000);
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

module.exports.waitForDownload = waitForDownload;
module.exports.clickCenter = clickCenter;
module.exports.clickPoint = clickPoint;