var wd = require('selenium-webdriver'),
	fs = require('fs'),
	assert = require('assert'),
	imageDiff = require('image-diff'),
	async = require('async');

var SELENIUM_HOST = 'http://localhost:4455/wd/hub';
var URL = 'http://127.0.0.1:3001/darkDemos/publicApplications/wkt.html';

var driver1 = new wd.Builder()
   .usingServer(SELENIUM_HOST)
   .withCapabilities({ browserName: 'firefox' })
   .build();

var driver2 = new wd.Builder()
   .usingServer(SELENIUM_HOST)
   .withCapabilities({ browserName: 'firefox' })
   .build();


async.parallel([
	function(callback) {
    	makeMoves(driver1, callback)
	},
	function(callback) {
    	makeMoves(driver2, callback)
	}
],
// optional callback
function(err, results){
compareImages(results)
});

//screenName1 = makeMoves(driver1);
//screenName2 = makeMoves(driver2);



function makeMoves(wd, callback){
	wd.get(URL).then(function() {
		var screenName = Date.now() + ".png";
	    //take screenshot
	    wd.takeScreenshot().then(function(data){
	        var base64Data = data.replace(/^data:image\/png;base64,/,"");
	        fs.writeFile(screenName, base64Data, 'base64', function(err) {
	        	if(err) console.log(err);
	        	callback(null, screenName);
	        });
	    });
		wd.quit();
	});
}

function compareImages(screenshots){
	console.log(screenshots[0], screenshots[1])
	imageDiff({
	  actualImage: screenshots[0],
	  expectedImage: screenshots[1],
	  diffImage: 'diff' + Date.now() + '.png',
	}, function (err, imagesAreSame) {
	  // error will be any errors that occurred
	  // imagesAreSame is a boolean whether the images were the same or not
	  // diffImage will have an image which highlights differences
	  console.log(err);
	  console.log(imagesAreSame);
	});
}