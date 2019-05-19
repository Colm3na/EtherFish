# EtherFish
Alimentador de peces mediante pagos en la blockchain de Ethereum

*** Work in Progress ***

### Hardware:

  - Raspberry Pi
  
  - Pi camera (or any live streaming service)
  
  - DC motor

### Software:

  - Nodejs

### Blockchain:

  - Ethereum

## Concept
[ES] El usuario mira online una pecera y puede alimentar al pez de forma remota y pagar con Ether.

[EN] User watchs a fish tank online and can feed the fish remotely and pay with Ether.

## Build and Run

```$ git clone https://github.com/Colm3na/EtherFish.git```

```$ cd EtherFish```

```$ mkdir secret```

```$ echo "https://rinkeby.infura.io/v3/YOUR-API-KEY" > secret/infuraURL.txt```

```$ echo "Your-Private-Key-without-0x" > secret/privateKey.txt```

```$ node src/main.js```

