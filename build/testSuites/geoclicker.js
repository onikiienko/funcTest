var wd = require('selenium-webdriver');

var testSuite = [];
var test1 = function(driver) {
	return wd.promise.Promise;
}

var test2 = function(driver) {
	return wd.promise.Promise;
}

testSuite.push(test1);
testSuite.push(test2);
module.exports.testSuite = testSuite;
module.exports.testUrl = '@@functest/demos/@@skinColor/test/geoclicker.html';
module.exports.publicUrl = '@@functest/demos/@@skinColor/public/geoclicker.html';
//module.exports.testUrl = 'http://127.0.0.1:3001/demos/dark/public/wkt.html';
//module.exports.publicUrl = 'http://127.0.0.1:3001/demos/dark/public/wkt.html';