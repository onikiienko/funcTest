function waitForElement(driver, element){
	driver.isElementPresent(element).then(function() {
		driver.sleep(500);
	    return;
	});
}

function waitForDownload(driver){
	driver.isElementPresent({ css: '.loaded' }).then(function() {
		driver.sleep(1000);
	    return;
	});
}

function clickCenter(driver){
	driver.findElement({id: "map"}).click();
}

module.exports.waitForDownload = waitForDownload;
module.exports.waitForElement = waitForElement;
module.exports.clickCenter = clickCenter;