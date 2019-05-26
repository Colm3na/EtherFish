const Web3 = require('web3');
const fs = require('fs');
//const Motor = require('./motor.js'); // Module GPIO (Raspberry Pi 2)

var infuraWS = fs.readFileSync('../secret/infuraWS.txt', 'utf8');
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraWS));

var options = {
	fromBlock: 4439954,
	address: "0x0451a1c0E4194967363aD9cF1A202419Ba4fe83E",
	topics: ["0xd7912fcf88b9813d94870cbde9f39a918aa37a93e03cb9ffab574870931eb56d"]
};

var subscription = web3.eth.subscribe('logs',options);
subscription.on('data', (log) => {
	console.log("* NEW TX *");
	console.log("Block: " + log.blockNumber);
	console.log("Tx Hash: " + log.transactionHash);
	console.log("Feeder: " + log.data);
	console.log("");
//	Motor.rotationFW();
//	setTimeout(Motor.rotationBW, 2000);
//	setTimeout(Motor.endRotation, 4000);
});

