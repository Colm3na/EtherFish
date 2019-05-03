// NOT TESTED

var Gpio = require('onoff').Gpio

var Motor1A = new Gpio(16,'out');
var Motor1B = new Gpio(18,'out');
var Motor1E = new Gpio(22,'out');

var Motor2A = new Gpio(23,'out');
var Motor2B = new Gpio(21,'out');
var Motor2E = new Gpio(19,'out');

function rotationFW() {
 Motor1A.writeSync(1);
 Motor1B.writeSync(0);
 Motor1E.writeSync(1);
}

function rotationBW() {
 Motor1A.writeSync(0);
 Motor1B.writeSync(1);
 Motor1E.writeSync(1);
}

function endRotation() {
 Motor1E.writeSync(0);
}

rotationFW();

setTimeout(endRotation, 5000);

rotationBW();

setTimeout(endRotation, 5000);

Motor1A.unexport();
Motor1B.unexport();
Motor1E.unexport();
