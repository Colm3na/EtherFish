function CB_getBlock(err, res) {
	if(!err) {
		document.getElementById("block").innerHTML = res.number;
	}
}

function CB_getBalance(err, res) {
	if(!err) {
		document.getElementById("balance").innerHTML = res;
	}
}
