const addr = "0x0451a1c0E4194967363aD9cF1A202419Ba4fe83E";

const fishContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastFeed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"feedFish","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeder","type":"address"}],"name":"Fed","type":"event"}], addr);

var _from;

function getAcc() {
	web3.eth.getAccounts(function(err, accounts) {
            _from = accounts[0];
			document.getElementById("acc").innerHTML = _from;
	});
}

function funBlock() {
        web3.eth.getBlock("latest", CB_getBlock);
}

function getBalance() {
        web3.eth.getBalance(addr, CB_getBalance);
}

function feed() {
        fishContract.methods.feedFish().send({from: _from, value: 100000000000000}, (error, result) => {
                if(!error) {
                        document.getElementById("message").innerHTML = "Thanks for keeping the fish alive!";
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

function CB_getAccounts(err,res) {
	if(!err) {
		
	}
}
