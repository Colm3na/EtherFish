window.addEventListener('load', function() {
	if (typeof web3 !== 'undefined') {
		console.log('Web3 Detected! ' + web3.currentProvider.constructor.name);
		window.web3 = new Web3(web3.currentProvider);
		$("#metamask").html("<p>Metamask detected &#x2714;</p>");
		$("#metamask").css("background-color","#0c0");
	} else {
		console.log('No Web3 Detected... get Metamask');
		$("#metamask").html("<p>Metamask not detected!</p>");
		$("#metamask").css("background-color","#c00");
	}
});
