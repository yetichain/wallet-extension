import { NetworkNames } from "@yetiwallet/types";
import { numberToHex } from "web3-utils";
import { ProviderName, SupportedNetworkName, WalletIdentifier } from "./types";

const FEE_CONFIGS = {
  [ProviderName.oneInch]: {
    [WalletIdentifier.yeti]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.00875,
    },
    [WalletIdentifier.mew]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.025,
    },
  },
  [ProviderName.paraswap]: {
    [WalletIdentifier.yeti]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.00875,
    },
    [WalletIdentifier.mew]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.025,
    },
  },
  [ProviderName.zerox]: {
    [WalletIdentifier.yeti]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.00875,
    },
    [WalletIdentifier.mew]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.025,
    },
  },
};

const TOKEN_LISTS: {
  [key in NetworkNames]?: string;
} = {
  [NetworkNames.Ethereum]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Ethereum}.json`,
  [NetworkNames.Binance]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Binance}.json`,
  [NetworkNames.Bitindi]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Bitindi}.json`,
  [NetworkNames.Matic]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Matic}.json`,
  [NetworkNames.Optimism]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Optimism}.json`,
  [NetworkNames.Arbitrum]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Arbitrum}.json`,
  [NetworkNames.Aurora]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Aurora}.json`,
  [NetworkNames.Avalanche]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Avalanche}.json`,
  [NetworkNames.EthereumClassic]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.EthereumClassic}.json`,
  [NetworkNames.Fantom]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Fantom}.json`,
  [NetworkNames.Moonbeam]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Moonbeam}.json`,
  [NetworkNames.Gnosis]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Gnosis}.json`,
  [NetworkNames.Klaytn]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Klaytn}.json`,
};

const CHANGELLY_LIST =
  "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/changelly.json";

const TOP_TOKEN_INFO_LIST =
  "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/top-tokens.json";

const GAS_LIMITS = {
  approval: numberToHex(300000),
  transferToken: numberToHex(300000),
  swap: numberToHex(1000000),
};
const NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const DEFAULT_SLIPPAGE = "0.5";
export {
  FEE_CONFIGS,
  GAS_LIMITS,
  NATIVE_TOKEN_ADDRESS,
  TOKEN_LISTS,
  CHANGELLY_LIST,
  TOP_TOKEN_INFO_LIST,
  DEFAULT_SLIPPAGE,
};
