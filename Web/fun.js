const addr = "0x0451a1c0E4194967363aD9cF1A202419Ba4fe83E";

var _from;

const fishContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastFeed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"feedFish","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeder","type":"address"}],"name":"Fed","type":"event"}]).at(addr);

function getAcc() {
	web3.eth.getAccounts(function(error, accounts) {
		if(!error) {
            _from = accounts[0];
			document.getElementById("acc").innerHTML = _from;
		} else {
			document.getElementById("acc").innerHTML = "You need to unblock your Metamask account";
		}
	});
}

function funBlock() {
        web3.eth.getBlock("latest", CB_getBlock);
}

function getBalance() {
        web3.eth.getBalance(addr, CB_getBalance);
}

function feed() {
	var getData = fishContract.feedFish.getData();
	web3.eth.sendTransaction({ 
	from: _from,
	gasPrice: "20000000000",
	gas: "100000",
	to: addr, 
	value: 100000000000000,
	data: getData
 }, function(error, transactionHash) {
	 if(!error) {
		 document.getElementById("message").innerHTML = "Thanks for keeping the fish alive!";
		 document.getElementById("txHash").innerHTML = transactionHash;
	} else {
			 document.getElementById("message").innerHTML = "Something went wrong...";
	}
});
}

function CB_getBlock(err, res) {
	if(!err) {
		document.getElementById("block").innerHTML = res["number"];
	} else {
		document.getElementById("block").innerHTML = "Loading...";
	}
}

function CB_getBalance(err, res) {
	if(!err) {
		document.getElementById("balance").innerHTML = res;
	} else {
		document.getElementById("balance").innerHTML = "Loading...";
	}
}
