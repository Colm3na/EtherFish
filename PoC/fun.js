const address = "0x6a5a00c2b4d8a07d9B6F680baC51644f3551fEc5";

function funBlock() {
        web3.eth.getBlock("latest", CB_getBlock);
}

function getBalance() {
        web3.eth.getBalance(address, CB_getBalance);
}

function message() {
 document.getElementById("message").innerHTML = "Thanks for keeping the fish alive!";
}

function feed() {
 var signedTx = document.getElementById("signedTx").value;
 web3.eth.sendSignedTransaction(signedTx);
 var counter = 20;
 setInterval(function(){
  counter--;
  document.getElementById("message2").innerHTML = "Tx will be effective in " + counter + " seconds.";
 }, 1000);
 setTimeout(function(){ location.reload(true); }, 20000);
}

