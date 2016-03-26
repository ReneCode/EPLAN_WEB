var assert = require('assert');


describe('DateTime / MongoDb', function() {
	it ('should read the correct time', function() {
		var str = "2016-03-26T16:19:28.000Z";
		var dt = new Date(str);
		assert.equal(2016, dt.getUTCFullYear());
		assert.equal(3, dt.getUTCMonth()+1);
		assert.equal(26, dt.getUTCDate());
		assert.equal(16, dt.getUTCHours());
		assert.equal(19, dt.getUTCMinutes());
		assert.equal(28, dt.getUTCSeconds());
	});


	it ('should read the correct time', function() {
		var str = "2016-03-26T17:10:44.000Z";
		var dt = new Date(str);
		assert.equal(2016, dt.getUTCFullYear());
		assert.equal(3, dt.getUTCMonth()+1);
		assert.equal(26, dt.getUTCDate());
		assert.equal(17, dt.getUTCHours());
		assert.equal(10, dt.getUTCMinutes());
		assert.equal(44, dt.getUTCSeconds());
	});



});


