module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "ganache-cli",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ci: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  }
};
