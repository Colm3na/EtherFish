// web3: API Ehereum
const Web3 = require('web3');

// Provider: Infura (Require API-KEY)
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/API-KEY"));

// Module ethereum-tx
const Tx = require('ethereumjs-tx');

// Module onoff
const Gpio = require('onoff').Gpio;

const Motor1A = new Gpio(23, 'out'); // pin 16
const Motor1B = new Gpio(24, 'out'); // pin 18
const Motor1E = new Gpio(25, 'out'); // pin 22


// Rotation Clockwise
function motorFW() {
	Motor1A.writeSync(1);
	Motor1B.writeSync(0);
	Motor1E.writeSync(1);
}

// Rotation Counter-Clockwise
function motorBW() {
	Motor1A.writeSync(0);
	Motor1B.writeSync(1);
	Motor1E.writeSync(1);
}

function motorOFF() {
	Motor1E.writeSync(0);
}

const privateKey = new Buffer('PRIVATE KEY', 'hex')

var _value = web3.utils.toHex(web3.utils.toWei('0.001', 'ether'));

const rawTx = {
  nonce: '0x15',
  gasPrice: '0x098bca5a00',
  gasLimit: '0x5208',
  to: '0xdf588d9726305d68663e6f025b2c12db7042208e',
  value: _value,
  data: '0x',
  chainId: 4
};

// Sign Tx
const tx = new Tx(rawTx);
tx.sign(privateKey);
const serializedTx = tx.serialize();
console.log('0x'+serializedTx.toString('hex'));

// Send Tx
web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', (res) => {
	console.log(res);
	motorFW();
	setTimeout(motorBW, 2000);
	setTimeout(motorOFF, 4000);
});
