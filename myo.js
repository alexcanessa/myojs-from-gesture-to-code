var Myo = require('myo');

Myo.connect('com.alexcanessa.myApp');

function logIt(data, string) {
	return (new Array(Math.floor((data + 0.90) * 100))).join(string);
}

function fireEvents(myo) {
	myo.on('fist', function() {
		myo.on('orientation', function(data) {
			var x = logIt(data.x, '*');
			var y = logIt(data.y, '/');
			var z = logIt(data.z, '.');

			console.log(x, y, z);
		});
	});

	myo.on('fist_off', function() {
		myo.off('orientation');
	});
}

Myo.on('connected', function() {
	fireEvents(this);
});