// web3: API Ehereum
const Web3 = require('web3');

// Provider: Infura (Require API-KEY)
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/API-KEY"));

// Module ethereum-tx
const Tx = require('ethereumjs-tx');

// Module onoff
const Gpio = require('onoff').Gpio;

// Use LED as Tx confirmation
var LED = new Gpio(17,'out');

function blinkLED() {
 if(LED.readSync() == 0) {
  LED.writeSync(1);
 } else {
  LED.writeSync(0);
 }
}

function endBlink() {
 LED.writeSync(0);
 LED.unexport();
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

// Send Tx
const tx = new Tx(rawTx);
tx.sign(privateKey);
const serializedTx = tx.serialize();
console.log('0x'+serializedTx.toString('hex'));

// Sign Tx
web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', (res) => {
	console.log(res);
	blinkLED();
	setTimeout(endBlink, 5000);
});
