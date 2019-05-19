const Gpio = require('onoff').Gpio;

const Motor1A = new Gpio(23,'out'); // pin 16
const Motor1B = new Gpio(24,'out'); // pin 18
const Motor1E = new Gpio(25,'out'); // pin 22

exports.rotationFW = function () {
	Motor1A.writeSync(1);
	Motor1B.writeSync(0);
	Motor1E.writeSync(1);
	console.log("Motor gira en sentido horario.");
};

exports.rotationBW = function () {
	Motor1A.writeSync(0);
	Motor1B.writeSync(1);
	Motor1E.writeSync(1);
	console.log("Motor gira en sentido anti-horario.");
};

exports.endRotation = function () {
	Motor1E.writeSync(0);
	console.log("Motor parado.");
};
