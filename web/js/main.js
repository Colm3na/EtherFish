const contractAddress = "0x0451a1c0E4194967363aD9cF1A202419Ba4fe83E";
var _from;
const fishContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastFeed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"feedFish","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeder","type":"address"}],"name":"Fed","type":"event"}]).at(contractAddress);

getUserAccount();
setInterval(funBlock, 5000);

$(document).ready(function () {
	$("title").text("EtherFish | Colm3na");
	$("#contractAddress").text(contractAddress);
	setInterval(getTime, 1000);
});
