# Truffle dapp

This is a simple development environment for web3 Ethereum based dapps using Truffle and Ganache (ganache-cli)
that run using docker and docker-compose.

### Requirements
For run the environment only docker and docker-compose is needed, all dependencies like Node are in the containers.
For the dapp to work a web wallet like Metamask is needed to be installed in the browser and then importing an account using the seed phrase
found in the docker-compose.yml file.

The configuration set an static account and the transaction history will be stored in the `ganache_data` folder so is possible to continue working withtout loosing history or setting new accounts each time.

### Runing the enviroment
Execute the following to run the containers in the background (-d) 
```sh
docker-compose up -d
```

### Modifying the dapp
The smart contract code is under the `truffle-dapp` folder and the frontend is in the `client` folder under the `truffle-dapp` folder. 

Edition for the client could be done in the host and the dapp is using lite-server so every change saved in the code will reload the dapp.

Edition of the smart contract is also done in the host and as they need to be compile and migrated restarting the services is needed:
```sh
docker-compose restart
```

> Could be useful to have `docker-compose logs -f` running on another terminal to see the output of the smart contracts recompiling and tests. 

### Development CI Pipeline
For convenience there is a Jenkinsfile that automate this process so we can have a CI pipeline locally in a Jenkins container.
