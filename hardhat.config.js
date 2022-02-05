const { privateKey, polygonscanApiKey, etherscanApiKey, alchemyApiKey } = require("./secrets.json");

require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    matic_testnet: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/" + alchemyApiKey,
      chainId: 80001,
      accounts: [ privateKey ]
    },
    matic_mainnet: {
      url: "https://matic-mainnet.chainstacklabs.com",
      chainId: 137,
      accounts: [ privateKey ]
    },
  },
    etherscan: {
    apiKey: polygonscanApiKey
    }
};