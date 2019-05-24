const address = "0x0451a1c0E4194967363aD9cF1A202419Ba4fe83E";

const fishContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastFeed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"feedFish","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeder","type":"address"}],"name":"Fed","type":"event"}],
      address, {data: "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600181905550610469806100676000396000f3fe608060405260043610610067576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe01461006c57806365107df3146100975780636bd42bcf146100c2578063f3fef3a3146100cc578063f851a44014610127575b600080fd5b34801561007857600080fd5b5061008161017e565b6040518082815260200191505060405180910390f35b3480156100a357600080fd5b506100ac61019d565b6040518082815260200191505060405180910390f35b6100ca6101a3565b005b3480156100d857600080fd5b50610125600480360360408110156100ef57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610309565b005b34801561013357600080fd5b5061013c610418565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b60015481565b655af3107a40003410151515610221576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f436f73743a20302e30303031206574686572000000000000000000000000000081525060200191505060405180910390fd5b4260015410151561029a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f576169742031206d696e7574650000000000000000000000000000000000000081525060200191505060405180910390fd5b603c42016001819055507fd7912fcf88b9813d94870cbde9f39a918aa37a93e03cb9ffab574870931eb56d33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f50726f686962697465640000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610413573d6000803e3d6000fd5b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820825e233919a7337e430397b0d48efb3204b4eba9604f6db548dde48e5a76384e0029", 
                address: address});

var _from = web3.eth.defaultAccount;

function funBlock() {
        web3.eth.getBlock("latest", CB_getBlock);
}

function getBalance() {
        web3.eth.getBalance(address, CB_getBalance);
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
