const Web3 = require('web3');
const fs = require('fs');
var infuraURL = fs.readFileSync('../secret/infuraURL.txt', 'utf8');
const web3 = new Web3(new Web3.providers.HttpProvider(infuraURL));
const Tx = require('ethereumjs-tx');

// Module GPIO (Raspberry Pi 2)
const Motor = require('./motor.js');

var privateKey0 = fs.readFileSync('privateKey.txt', 'utf8');
const privateKey = new Buffer(privateKey0, 'hex');
const pk = '0x' + privateKey0;
var _value = web3.utils.toHex(web3.utils.toWei('0.0001', 'ether'));
var _nonce;

var address_obj= web3.eth.accounts.privateKeyToAccount(pk);
const _from = address_obj["address"];
const _to = "0xdf588d9726305d68663e6f025b2c12db7042208e";
var rawTx = {
	"nonce": _nonce,
	"gasPrice": 41000000000,
	"gas": 21000,
	"to": _to,
	"value": _value,
	"data": "0x",
	"chainId": 4
};
var signedTx;

function CB_getTxCount(err,res) {
	if(!err) {_nonce = res;}
}

function CB_signTx(err,res) {
	if(!err) {
		signedTx = res["rawTransaction"];
		console.log(signedTx);
		const tx = new Tx(rawTx);
		tx.sign(privateKey);
		const serializedTx = tx.serialize();
		web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', (res) => {
			console.log(res);
			Motor.rotationFW();
			setTimeout(Motor.rotationBW, 2000);
			setTimeout(Motor.endRotation, 4000);
		});
	}
}

web3.eth.getTransactionCount(_from,"latest",CB_getTxCount)
	.then(web3.eth.accounts.signTransaction(rawTx,pk,CB_signTx));

