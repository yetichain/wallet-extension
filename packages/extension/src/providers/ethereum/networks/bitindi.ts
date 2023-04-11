import { NetworkNames } from "@yetiwallet/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import { EtherscanActivity } from "../libs/activity-handlers";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";

const bitindiOptions: EvmNetworkOptions = {
  name: NetworkNames.Bitindi,
  name_long: "Bitindi Chain",
  homePage: "https://www.bitindi.org/",
  blockExplorerTX: "https://bitindiscan.com/tx/[[txHash]]",
  blockExplorerAddr: "https://bitindiscan.com/address/[[address]]",
  chainID: "0x1003",
  isTestNetwork: false,
  currencyName: "BNI",
  currencyNameLong: "Bitindi",
  node: "https://rpc-mainnet.bitindi.org",
  icon: require("./icons/bitindi.svg"),
  gradient: "#E80273",
  coingeckoID: "bitindi-chain",
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const bitindi = new EvmNetwork(bitindiOptions);

export default bitindi;
