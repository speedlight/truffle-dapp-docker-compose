## Truffle dapp

This is a simple development environment for web3 Ethereum based dapps using Truffle and Ganache (ganache-cli)
that run using docker and docker-compose.

#Requirements
For run the environment only docker and docker-compose is needed, all dependencies like Node are in the containers.
For the dapp to work a web wallet like Metamask is needed to be installed in the browser and then importing an account using the seed phrase
found in the docker-compose.yml file.

The configuration set an static account and the transaction history will be stored in the `ganache_data` folder so is possible to continue working withtout loosing history or setting new accounts each time.


