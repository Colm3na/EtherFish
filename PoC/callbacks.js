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
