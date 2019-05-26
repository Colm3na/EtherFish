## EtherFish
Alimentador de peces mediante pagos en la blockchain de Ethereum.

:warning: Work in Progress :warning:

#### Hardware:

  - Raspberry Pi

#### Software:

  - Nodejs

#### Blockchain:

  - Ethereum

### Concept
[ES] El usuario mira online una pecera y puede alimentar al pez de forma remota y pagar con Ether.

[EN] User watches a fish tank online and can feed the fish remotely and pay with Ether.

### Fish Computer

```
$ git clone https://github.com/Colm3na/EtherFish.git
$ cd EtherFish
$ npm i web3
$ mkdir secret
$ echo "wss://rinkeby.infura.io/ws/v3/YOUR-API-KEY" > secret/infuraWS.txt
$ cd src
$ node main.js
```

### Client Side
Any browser with Metamask enabled and account unlocked.

[Contract](https://rinkeby.etherscan.io/address/0x0451a1c0e4194967363ad9cf1a202419ba4fe83e)

[Website](http://magmatest.000webhostapp.com/EtherFish/)

### TODO List

- Use IPC as Provider
```
const net = require('net');
const web3 = new Web3(new Web3.providers.IpcProvider('/users/myuser/.ethereum/geth.ipc', net, {}));
```
- Use a Stepper Motor
