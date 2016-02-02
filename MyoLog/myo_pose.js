var Myo = require('myo');

Myo.connect('com.alexcanessa.myApp');

Myo.on('connect', function() {
	this.vibrate();
	
	this.on('pose', function(pose_name) {
		console.log(pose_name);
	});
});