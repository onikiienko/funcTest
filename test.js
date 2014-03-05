var wd = require('selenium-webdriver');
	var assert = require('assert');

	var SELENIUM_HOST = 'http://localhost:4455/wd/hub';
	var URL = 'http://127.0.0.1:3001/darkDemos/publicApplications/wkt.html';

	var client = new wd.Builder()
	   .usingServer(SELENIUM_HOST)
	   .withCapabilities({ browserName: 'firefox' })
	   .build();

	client.get(URL).then(function() {
	    client.findElement({ id: 'map' });
	    //client.findElement({ css: '.b-form-button__input' }).click();

	    //client.getTitle().then(function(title) {
	    //    assert.ok(title.indexOf('test — Яндекс: нашлось') > -1, 'Ничего не нашлось :(');
	    //});

	    client.quit();
	});