function getUserAccount() {
	web3.eth.getAccounts(function(error, accounts) {
		if(!error) {
            _from = accounts[0];
			document.getElementById("userAccount").innerHTML = _from;
		} else {
			document.getElementById("userAccount").innerHTML = "You need to unblock your Metamask account";
		}
	});
}

function funBlock() {
        web3.eth.getBlock("latest", CB_getBlock);
}

function getBalance() {
        web3.eth.getBalance(contractAddress, CB_getBalance);
}

function feed() {
	var getData = fishContract.feedFish.getData();
	web3.eth.sendTransaction({ 
	from: _from,
	gasPrice: "20000000000",
	gas: "40000",
	to: contractAddress, 
	value: 100000000000000,
	data: getData
 }, function(error, transactionHash) {
	 if(!error) {
		 document.getElementById("message").innerHTML = "Thanks for keeping the fish alive!";
		 var txHash = transactionHash;
		 $("#txHash").html("<a href='https://rinkeby.etherscan.io/tx/"+txHash+"'>"+txHash+"</a>");
		 setTimeout(getBalance, 20000);
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
		var CB_balance = web3.fromWei(res, 'ether');
		document.getElementById("balance").innerHTML = CB_balance + " Ether";
	} else {
		document.getElementById("balance").innerHTML = "Loading...";
	}
}

function getTime() {
	var date = new Date();
	document.getElementById("time").innerHTML = date;
}
