import "@shardlabs/starknet-hardhat-plugin";
import { HardhatUserConfig } from "hardhat/types";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  // solidity: "0.8.17",
  starknet: {
    // venv: ".venv",
    network: "l2_testnet",
    wallets: {
      OpenZeppelin: {
        accountName: "OpenZeppelin",
        modulePath:
          "starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount",
        accountPath: "~/.starknet_accounts",
      },
    },
  },
  networks: {
    l2_testnet: {
      url: "http://localhost:5050",
    },
    /* mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    }, */
  },
};

export default config;