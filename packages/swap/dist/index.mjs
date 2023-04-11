// src/index.ts
import fetch4 from "node-fetch";
import { merge } from "lodash";
import EventEmitter from "eventemitter3";

// src/configs.ts
import { NetworkNames as NetworkNames2 } from "@yetiwallet/types";
import { numberToHex } from "web3-utils";

// src/types/index.ts
import { NetworkNames } from "@yetiwallet/types";
var SupportedNetworkName = ((SupportedNetworkName3) => {
  SupportedNetworkName3[SupportedNetworkName3["Ethereum"] = NetworkNames.Ethereum] = "Ethereum";
  SupportedNetworkName3[SupportedNetworkName3["Binance"] = NetworkNames.Binance] = "Binance";
  SupportedNetworkName3[SupportedNetworkName3["Bitindi"] = NetworkNames.Bitindi] = "Bitindi";
  SupportedNetworkName3[SupportedNetworkName3["Matic"] = NetworkNames.Matic] = "Matic";
  SupportedNetworkName3[SupportedNetworkName3["Optimism"] = NetworkNames.Optimism] = "Optimism";
  SupportedNetworkName3[SupportedNetworkName3["Polkadot"] = NetworkNames.Polkadot] = "Polkadot";
  SupportedNetworkName3[SupportedNetworkName3["Kusama"] = NetworkNames.Kusama] = "Kusama";
  SupportedNetworkName3[SupportedNetworkName3["Bitcoin"] = NetworkNames.Bitcoin] = "Bitcoin";
  SupportedNetworkName3[SupportedNetworkName3["EthereumClassic"] = NetworkNames.EthereumClassic] = "EthereumClassic";
  SupportedNetworkName3[SupportedNetworkName3["Moonbeam"] = NetworkNames.Moonbeam] = "Moonbeam";
  SupportedNetworkName3[SupportedNetworkName3["Arbitrum"] = NetworkNames.Arbitrum] = "Arbitrum";
  SupportedNetworkName3[SupportedNetworkName3["Gnosis"] = NetworkNames.Gnosis] = "Gnosis";
  SupportedNetworkName3[SupportedNetworkName3["Avalanche"] = NetworkNames.Avalanche] = "Avalanche";
  SupportedNetworkName3[SupportedNetworkName3["Fantom"] = NetworkNames.Fantom] = "Fantom";
  SupportedNetworkName3[SupportedNetworkName3["Klaytn"] = NetworkNames.Klaytn] = "Klaytn";
  SupportedNetworkName3[SupportedNetworkName3["Aurora"] = NetworkNames.Aurora] = "Aurora";
  return SupportedNetworkName3;
})(SupportedNetworkName || {});
var NetworkType = /* @__PURE__ */ ((NetworkType2) => {
  NetworkType2["EVM"] = "evm";
  NetworkType2["Substrate"] = "substrate";
  NetworkType2["Bitcoin"] = "bitcoin";
  return NetworkType2;
})(NetworkType || {});
var WalletIdentifier = /* @__PURE__ */ ((WalletIdentifier2) => {
  WalletIdentifier2["yeti"] = "yeti";
  WalletIdentifier2["mew"] = "mew";
  return WalletIdentifier2;
})(WalletIdentifier || {});
var TransactionStatus = /* @__PURE__ */ ((TransactionStatus2) => {
  TransactionStatus2["pending"] = "pending";
  TransactionStatus2["failed"] = "failed";
  TransactionStatus2["success"] = "success";
  return TransactionStatus2;
})(TransactionStatus || {});
var TransactionType = /* @__PURE__ */ ((TransactionType2) => {
  TransactionType2["evm"] = "evm";
  TransactionType2["generic"] = "generic";
  return TransactionType2;
})(TransactionType || {});
var ProviderClass = class {
  constructor(_web3eth, network) {
    this.network = network;
  }
};

// src/configs.ts
var FEE_CONFIGS = {
  ["oneInch" /* oneInch */]: {
    ["yeti" /* yeti */]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 875e-5
    },
    ["mew" /* mew */]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.025
    }
  },
  ["paraswap" /* paraswap */]: {
    ["yeti" /* yeti */]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 875e-5
    },
    ["mew" /* mew */]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.025
    }
  },
  ["zerox" /* zerox */]: {
    ["yeti" /* yeti */]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 875e-5
    },
    ["mew" /* mew */]: {
      referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
      fee: 0.025
    }
  }
};
var TOKEN_LISTS = {
  [NetworkNames2.Ethereum]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Ethereum}.json`,
  [NetworkNames2.Binance]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Binance}.json`,
  [NetworkNames2.Bitindi]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Bitindi}.json`,
  [NetworkNames2.Matic]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Matic}.json`,
  [NetworkNames2.Optimism]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Optimism}.json`,
  [NetworkNames2.Arbitrum]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Arbitrum}.json`,
  [NetworkNames2.Aurora]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Aurora}.json`,
  [NetworkNames2.Avalanche]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Avalanche}.json`,
  [NetworkNames2.EthereumClassic]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.EthereumClassic}.json`,
  [NetworkNames2.Fantom]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Fantom}.json`,
  [NetworkNames2.Moonbeam]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Moonbeam}.json`,
  [NetworkNames2.Gnosis]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Gnosis}.json`,
  [NetworkNames2.Klaytn]: `https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/${SupportedNetworkName.Klaytn}.json`
};
var CHANGELLY_LIST = "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/changelly.json";
var TOP_TOKEN_INFO_LIST = "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/top-tokens.json";
var GAS_LIMITS = {
  approval: numberToHex(3e5),
  transferToken: numberToHex(3e5),
  swap: numberToHex(1e6)
};
var NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
var DEFAULT_SLIPPAGE = "0.5";

// src/providers/oneInch/index.ts
import { numberToHex as numberToHex3, toBN as toBN3 } from "web3-utils";

// src/utils/approvals.ts
import Web3Eth from "web3-eth";
import { toBN } from "web3-utils";

// src/utils/abi/erc20.ts
var erc20_default = [
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

// src/utils/approvals.ts
var TOKEN_AMOUNT_INFINITY_AND_BEYOND = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
var getAllowance = (options) => {
  const contract = new options.web3eth.Contract(
    erc20_default,
    options.contract
  );
  return contract.methods.allowance(options.owner, options.spender).call();
};
var getTransfer = (options) => {
  const web3Eth = new Web3Eth();
  const contract = new web3Eth.Contract(erc20_default);
  return {
    from: options.from,
    data: contract.methods.transfer(options.to, options.value).encodeABI(),
    gasLimit: GAS_LIMITS.transferToken,
    to: options.contract,
    value: "0x0",
    type: "evm" /* evm */
  };
};
var getApproval = (options) => {
  const web3Eth = new Web3Eth();
  const contract = new web3Eth.Contract(erc20_default);
  return {
    from: options.from,
    data: contract.methods.approve(options.spender, options.value).encodeABI(),
    gasLimit: GAS_LIMITS.approval,
    to: options.contract,
    value: "0x0",
    type: "evm" /* evm */
  };
};
var getAllowanceTransactions = async (options) => {
  const transactions = [];
  const approvedAmount = toBN(
    await getAllowance({
      contract: options.fromToken.address,
      owner: options.fromAddress,
      spender: options.spender,
      web3eth: options.web3eth
    })
  );
  if (approvedAmount.lt(options.amount)) {
    if (approvedAmount.eqn(0)) {
      transactions.push(
        getApproval({
          from: options.fromAddress,
          spender: options.spender,
          value: options.infinityApproval ? TOKEN_AMOUNT_INFINITY_AND_BEYOND : options.amount.toString(),
          contract: options.fromToken.address
        })
      );
    } else {
      transactions.push(
        getApproval({
          from: options.fromAddress,
          spender: options.spender,
          value: "0",
          contract: options.fromToken.address
        })
      );
      transactions.push(
        getApproval({
          from: options.fromAddress,
          spender: options.spender,
          value: options.infinityApproval ? TOKEN_AMOUNT_INFINITY_AND_BEYOND : options.amount.toString(),
          contract: options.fromToken.address
        })
      );
    }
  }
  return transactions;
};

// src/common/estimateGasList.ts
import fetch2 from "node-fetch";
import { numberToHex as numberToHex2, toBN as toBN2 } from "web3-utils";
var supportedNetworks = {
  [SupportedNetworkName.Ethereum]: {
    url: "https://estimategas.mewapi.io/eth"
  },
  [SupportedNetworkName.Binance]: {
    url: "https://estimategas.mewapi.io/bsc"
  },
  [SupportedNetworkName.Matic]: {
    url: "https://estimategas.mewapi.io/matic"
  },
  [SupportedNetworkName.Arbitrum]: {
    url: "https://nodes.mewapi.io/rpc/arb"
  }
};
var useStandardEstimate = (transactions, network) => fetch2(supportedNetworks[network].url, {
  method: "POST",
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 0,
    method: "eth_estimateGas",
    params: [transactions[0]]
  }),
  headers: {
    "Content-Type": "application/json"
  }
}).then((res) => {
  if (res.ok)
    return res.json();
  throw new Error("Something went wrong");
}).then((json) => {
  if (json.error)
    return {
      isError: true,
      errorMessage: json.error.message
    };
  const isApproval = transactions[0].data.startsWith("0x095ea7b3");
  const genericTx0Gas = isApproval ? toBN2(GAS_LIMITS.approval) : toBN2(GAS_LIMITS.swap);
  const tx0gas = toBN2(json.result);
  if (genericTx0Gas.gt(tx0gas)) {
    if (isApproval) {
      return {
        result: transactions.length === 2 ? [json.result, GAS_LIMITS.swap] : [json.result, GAS_LIMITS.approval, GAS_LIMITS.swap]
      };
    }
    return {
      result: [json.result]
    };
  }
  const multiplier = tx0gas.div(genericTx0Gas);
  if (isApproval) {
    return {
      result: transactions.length === 2 ? [
        json.result,
        numberToHex2(toBN2(GAS_LIMITS.swap).mul(multiplier.addn(3)))
      ] : [
        json.result,
        numberToHex2(toBN2(GAS_LIMITS.approval).mul(multiplier)),
        numberToHex2(toBN2(GAS_LIMITS.swap).mul(multiplier.addn(3)))
      ]
    };
  }
  return {
    result: [json.result]
  };
}).catch(() => null);
var estimateGasList = (transactions, network) => {
  if (!Object.keys(supportedNetworks).includes(network))
    return null;
  if (network === SupportedNetworkName.Arbitrum)
    return useStandardEstimate(transactions, network);
  const strippedTxs = transactions.map((tx) => {
    const { from, to, data, value } = tx;
    return {
      from,
      to,
      data,
      value
    };
  });
  return fetch2(supportedNetworks[network].url, {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 0,
      method: "eth_estimateGasList",
      params: [strippedTxs]
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => {
    if (res.ok)
      return res.json();
    throw new Error("Something went wrong");
  }).then((json) => {
    if (json.error)
      return {
        isError: true,
        errorMessage: json.error.message
      };
    return {
      result: json.result
    };
  }).catch(() => null);
};
var estimateGasList_default = estimateGasList;

// src/utils/common.ts
import { polkadotEncodeAddress } from "@yetiwallet/utils";
import { isAddress } from "web3-utils";
var isPolkadotAddress = (address, prefix) => {
  try {
    return polkadotEncodeAddress(address, prefix) === address;
  } catch {
    return false;
  }
};
var isEVMAddress = (address) => {
  try {
    return isAddress(address);
  } catch {
    return false;
  }
};
var sortByRank = (x, y) => {
  if (!x.rank)
    x.rank = 1e7;
  if (!y.rank)
    y.rank = 1e7;
  return x.rank - y.rank;
};
var sortNativeToFront = (x, y) => (
  // eslint-disable-next-line no-nested-ternary
  x.address === NATIVE_TOKEN_ADDRESS ? -1 : y.address === NATIVE_TOKEN_ADDRESS ? 1 : 0
);

// src/providers/oneInch/index.ts
var ONEINCH_APPROVAL_ADDRESS = "0x1111111254eeb25477b68fb85ed929f73a960582";
var supportedNetworks2 = {
  [SupportedNetworkName.Ethereum]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "1"
  },
  [SupportedNetworkName.Binance]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "56"
  },
  [SupportedNetworkName.Matic]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "137"
  },
  [SupportedNetworkName.Optimism]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "10"
  },
  [SupportedNetworkName.Avalanche]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "43114"
  },
  [SupportedNetworkName.Fantom]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "250"
  },
  [SupportedNetworkName.Klaytn]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "8217"
  },
  [SupportedNetworkName.Aurora]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "1313161554"
  },
  [SupportedNetworkName.Gnosis]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "100"
  },
  [SupportedNetworkName.Arbitrum]: {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "42161"
  }
};
var BASE_URL = "https://api.1inch.io/v5.0/";
var OneInch = class extends ProviderClass {
  constructor(web3eth, network) {
    super(web3eth, network);
    this.network = network;
    this.tokenList = [];
    this.web3eth = web3eth;
    this.name = "oneInch" /* oneInch */;
    this.fromTokens = {};
    this.toTokens = {};
  }
  init(tokenList) {
    if (!OneInch.isSupported(this.network))
      return;
    tokenList.forEach((t) => {
      this.fromTokens[t.address] = t;
      if (!this.toTokens[this.network])
        this.toTokens[this.network] = {};
      this.toTokens[this.network][t.address] = {
        ...t,
        networkInfo: {
          name: this.network,
          isAddress: (address) => Promise.resolve(isEVMAddress(address))
        }
      };
    });
  }
  static isSupported(network) {
    return Object.keys(supportedNetworks2).includes(
      network
    );
  }
  getFromTokens() {
    return this.fromTokens;
  }
  getToTokens() {
    return this.toTokens;
  }
  getMinMaxAmount() {
    return Promise.resolve({
      minimumFrom: toBN3("1"),
      maximumFrom: toBN3(TOKEN_AMOUNT_INFINITY_AND_BEYOND),
      minimumTo: toBN3("1"),
      maximumTo: toBN3(TOKEN_AMOUNT_INFINITY_AND_BEYOND)
    });
  }
  getOneInchSwap(options, meta, accurateEstimate) {
    if (!OneInch.isSupported(
      options.toToken.networkInfo.name
    ) || this.network !== options.toToken.networkInfo.name)
      return Promise.resolve(null);
    const feeConfig = FEE_CONFIGS[this.name][meta.walletIdentifier];
    const params = new URLSearchParams({
      fromTokenAddress: options.fromToken.address,
      toTokenAddress: options.toToken.address,
      amount: options.amount.toString(),
      fromAddress: options.fromAddress,
      destReceiver: options.toAddress,
      slippage: meta.slippage ? meta.slippage : DEFAULT_SLIPPAGE,
      fee: feeConfig ? (feeConfig.fee * 100).toFixed(3) : "0",
      referrerAddress: feeConfig ? feeConfig.referrer : "",
      disableEstimate: "true"
    });
    return fetch(
      `${BASE_URL}${supportedNetworks2[this.network].chainId}/swap?${params.toString()}`
    ).then((res) => res.json()).then(async (response) => {
      if (response.error) {
        console.error(response.error, response.description);
        return Promise.resolve(null);
      }
      const transactions = [];
      if (options.fromToken.address !== NATIVE_TOKEN_ADDRESS) {
        const approvalTxs = await getAllowanceTransactions({
          infinityApproval: meta.infiniteApproval,
          spender: supportedNetworks2[this.network].approvalAddress,
          web3eth: this.web3eth,
          amount: options.amount,
          fromAddress: options.fromAddress,
          fromToken: options.fromToken
        });
        transactions.push(...approvalTxs);
      }
      transactions.push({
        from: options.fromAddress,
        gasLimit: GAS_LIMITS.swap,
        to: response.tx.to,
        value: numberToHex3(response.tx.value),
        data: response.tx.data,
        type: "evm" /* evm */
      });
      if (accurateEstimate) {
        const accurateGasEstimate = await estimateGasList_default(
          transactions,
          this.network
        );
        if (accurateGasEstimate) {
          if (accurateGasEstimate.isError)
            return null;
          transactions.forEach((tx, idx) => {
            tx.gasLimit = accurateGasEstimate.result[idx];
          });
        }
      }
      return {
        transactions,
        toTokenAmount: toBN3(response.toTokenAmount),
        fromTokenAmount: toBN3(response.fromTokenAmount)
      };
    });
  }
  getQuote(options, meta) {
    return this.getOneInchSwap(options, meta, false).then(async (res) => {
      if (!res)
        return null;
      const response = {
        fromTokenAmount: res.fromTokenAmount,
        toTokenAmount: res.toTokenAmount,
        provider: this.name,
        quote: {
          meta,
          options,
          provider: this.name
        },
        totalGaslimit: res.transactions.reduce(
          (total, curVal) => total + toBN3(curVal.gasLimit).toNumber(),
          0
        ),
        minMax: await this.getMinMaxAmount()
      };
      return response;
    });
  }
  getSwap(quote) {
    return this.getOneInchSwap(quote.options, quote.meta, true).then((res) => {
      if (!res)
        return null;
      const feeConfig = FEE_CONFIGS[this.name][quote.meta.walletIdentifier].fee || 0;
      const response = {
        fromTokenAmount: res.fromTokenAmount,
        provider: this.name,
        toTokenAmount: res.toTokenAmount,
        transactions: res.transactions,
        slippage: quote.meta.slippage || DEFAULT_SLIPPAGE,
        fee: feeConfig * 100,
        getStatusObject: async (options) => ({
          options,
          provider: this.name
        })
      };
      return response;
    });
  }
  getStatus(options) {
    const promises = options.transactionHashes.map(
      (hash) => this.web3eth.getTransactionReceipt(hash)
    );
    return Promise.all(promises).then((receipts) => {
      for (const receipt of receipts) {
        if (!receipt || receipt && !receipt.blockNumber) {
          return "pending" /* pending */;
        }
        if (receipt && !receipt.status)
          return "failed" /* failed */;
      }
      return "success" /* success */;
    });
  }
};
var oneInch_default = OneInch;

// src/providers/changelly/index.ts
import { v4 as uuidv4 } from "uuid";
import fetch3 from "node-fetch";
import { fromBase, toBase } from "@yetiwallet/utils";
import { numberToHex as numberToHex4, toBN as toBN4 } from "web3-utils";

// src/providers/changelly/supported.ts
var supportedNetworks3 = {
  [SupportedNetworkName.Ethereum]: {
    changellyName: "ethereum",
    isAddress: (address) => Promise.resolve(isEVMAddress(address))
  },
  [SupportedNetworkName.Binance]: {
    changellyName: "binance_smart_chain",
    isAddress: (address) => Promise.resolve(isEVMAddress(address))
  },
  [SupportedNetworkName.Matic]: {
    changellyName: "polygon",
    isAddress: (address) => Promise.resolve(isEVMAddress(address))
  },
  [SupportedNetworkName.EthereumClassic]: {
    changellyName: "ethereum_classic",
    isAddress: (address) => Promise.resolve(isEVMAddress(address))
  },
  [SupportedNetworkName.Optimism]: {
    changellyName: "optimism",
    isAddress: (address) => Promise.resolve(isEVMAddress(address))
  },
  [SupportedNetworkName.Moonbeam]: {
    changellyName: "glmr",
    isAddress: (address) => Promise.resolve(isEVMAddress(address))
  },
  [SupportedNetworkName.Polkadot]: {
    changellyName: "polkadot",
    isAddress: (address) => Promise.resolve(isPolkadotAddress(address, 0))
  },
  [SupportedNetworkName.Kusama]: {
    changellyName: "kusama",
    isAddress: (address) => Promise.resolve(isPolkadotAddress(address, 2))
  },
  [SupportedNetworkName.Bitcoin]: {
    changellyName: "bitcoin"
  }
};
var supported_default = supportedNetworks3;

// src/providers/changelly/index.ts
var BASE_URL2 = "https://swap.mewapi.io/changelly";
var Changelly = class extends ProviderClass {
  constructor(_web3eth, network) {
    super(_web3eth, network);
    this.network = network;
    this.tokenList = [];
    this.name = "changelly" /* changelly */;
    this.fromTokens = {};
    this.toTokens = {};
    this.contractToTicker = {};
  }
  async init() {
    if (!Changelly.isSupported(this.network))
      return;
    this.changellyList = await fetch3(CHANGELLY_LIST).then((res) => res.json());
    const changellyToNetwork = {};
    Object.keys(supported_default).forEach((net) => {
      changellyToNetwork[supported_default[net].changellyName] = net;
    });
    const supportedChangellyNames = Object.values(supported_default).map(
      (s) => s.changellyName
    );
    this.changellyList.forEach((cur) => {
      if (!supportedChangellyNames.includes(cur.blockchain))
        return;
      if (cur.enabledFrom && cur.fixRateEnabled && cur.token && changellyToNetwork[cur.blockchain] === this.network) {
        this.fromTokens[cur.token.address] = cur.token;
      }
      if (cur.enabledTo && cur.fixRateEnabled && cur.token) {
        if (!this.toTokens[changellyToNetwork[cur.blockchain]])
          this.toTokens[changellyToNetwork[cur.blockchain]] = {};
        this.toTokens[changellyToNetwork[cur.blockchain]][cur.token.address] = {
          ...cur.token,
          networkInfo: {
            name: changellyToNetwork[cur.blockchain],
            isAddress: supported_default[changellyToNetwork[cur.blockchain]].isAddress ? supported_default[changellyToNetwork[cur.blockchain]].isAddress : (address) => this.isValidAddress(address, cur.ticker)
          }
        };
      }
      if (cur.token)
        this.setTicker(
          cur.token,
          changellyToNetwork[cur.blockchain],
          cur.ticker
        );
    });
  }
  setTicker(token, network, ticker) {
    this.contractToTicker[`${network}-${token.address}`] = ticker;
  }
  getTicker(token, network) {
    return this.contractToTicker[`${network}-${token.address}`];
  }
  static isSupported(network) {
    return Object.keys(supported_default).includes(
      network
    );
  }
  changellyRequest(method, params) {
    return fetch3(`${BASE_URL2}`, {
      method: "POST",
      body: JSON.stringify({
        id: uuidv4(),
        jsonrpc: "2.0",
        method,
        params
      }),
      headers: { "Content-Type": "application/json" }
    }).then((res) => res.json());
  }
  isValidAddress(address, ticker) {
    return this.changellyRequest("validateAddress", {
      currency: ticker,
      address
    }).then((response) => {
      if (response.error)
        return false;
      return response.result.result;
    });
  }
  getFromTokens() {
    return this.fromTokens;
  }
  getToTokens() {
    if (Object.keys(this.fromTokens).length)
      return this.toTokens;
    return {};
  }
  getMinMaxAmount({
    fromToken,
    toToken
  }) {
    const emptyResponse = {
      minimumFrom: toBN4("0"),
      maximumFrom: toBN4("0"),
      minimumTo: toBN4("0"),
      maximumTo: toBN4("0")
    };
    return this.changellyRequest("getFixRate", {
      from: this.getTicker(fromToken, this.network),
      to: this.getTicker(
        toToken,
        toToken.networkInfo.name
      )
    }).then((response) => {
      if (response.error)
        return emptyResponse;
      const { result } = response;
      return {
        minimumFrom: toBN4(toBase(result.minFrom, fromToken.decimals)),
        maximumFrom: toBN4(toBase(result.maxFrom, fromToken.decimals)),
        minimumTo: toBN4(toBase(result.minTo, toToken.decimals)),
        maximumTo: toBN4(toBase(result.maxTo, toToken.decimals))
      };
    }).catch(() => emptyResponse);
  }
  async getQuote(options, meta) {
    if (!Changelly.isSupported(
      options.toToken.networkInfo.name
    ) || !Changelly.isSupported(this.network) || !this.getTicker(options.fromToken, this.network) || !this.getTicker(
      options.toToken,
      options.toToken.networkInfo.name
    ))
      return Promise.resolve(null);
    const minMax = await this.getMinMaxAmount({
      fromToken: options.fromToken,
      toToken: options.toToken
    });
    let quoteRequestAmount = options.amount;
    if (quoteRequestAmount.lt(minMax.minimumFrom))
      quoteRequestAmount = minMax.minimumFrom;
    else if (quoteRequestAmount.gt(minMax.maximumFrom))
      quoteRequestAmount = minMax.maximumFrom;
    if (quoteRequestAmount.toString() === "0")
      return null;
    return this.changellyRequest("getFixRateForAmount", {
      from: this.getTicker(options.fromToken, this.network),
      to: this.getTicker(
        options.toToken,
        options.toToken.networkInfo.name
      ),
      amountFrom: fromBase(
        quoteRequestAmount.toString(),
        options.fromToken.decimals
      )
    }).then(async (response) => {
      if (response.error || !response.result.id)
        return null;
      const { result } = response;
      const evmGasLimit = options.fromToken.address === NATIVE_TOKEN_ADDRESS && options.fromToken.type === "evm" /* EVM */ ? 21e3 : toBN4(GAS_LIMITS.transferToken).toNumber();
      const retResponse = {
        fromTokenAmount: quoteRequestAmount,
        toTokenAmount: toBN4(
          toBase(result.amountTo, options.toToken.decimals)
        ),
        provider: this.name,
        quote: {
          meta: {
            ...meta,
            changellyQuoteId: result.id
          },
          options: {
            ...options,
            amount: quoteRequestAmount
          },
          provider: this.name
        },
        totalGaslimit: options.fromToken.type === "evm" /* EVM */ ? evmGasLimit : 0,
        minMax
      };
      return retResponse;
    }).catch(() => null);
  }
  getSwap(quote) {
    if (!Changelly.isSupported(
      quote.options.toToken.networkInfo.name
    ) || !Changelly.isSupported(this.network))
      return Promise.resolve(null);
    return this.changellyRequest("createFixTransaction", {
      from: this.getTicker(quote.options.fromToken, this.network),
      to: this.getTicker(
        quote.options.toToken,
        quote.options.toToken.networkInfo.name
      ),
      refundAddress: quote.options.fromAddress,
      address: quote.options.toAddress,
      amountFrom: fromBase(
        quote.options.amount.toString(),
        quote.options.fromToken.decimals
      ),
      rateId: quote.meta.changellyQuoteId
    }).then(async (response) => {
      if (response.error || !response.result.id)
        return null;
      const { result } = response;
      let transaction;
      if (quote.options.fromToken.type === "evm" /* EVM */) {
        if (quote.options.fromToken.address === NATIVE_TOKEN_ADDRESS)
          transaction = {
            from: quote.options.fromAddress,
            data: "0x",
            gasLimit: numberToHex4(21e3),
            to: result.payinAddress,
            value: numberToHex4(quote.options.amount),
            type: "evm" /* evm */
          };
        else
          transaction = getTransfer({
            from: quote.options.fromAddress,
            contract: quote.options.fromToken.address,
            to: result.payinAddress,
            value: quote.options.amount.toString()
          });
        const accurateGasEstimate = await estimateGasList_default(
          [transaction],
          this.network
        );
        if (accurateGasEstimate) {
          if (accurateGasEstimate.isError)
            return null;
          const [txGaslimit] = accurateGasEstimate.result;
          transaction.gasLimit = txGaslimit;
        }
      } else {
        transaction = {
          from: quote.options.fromAddress,
          to: result.payinAddress,
          value: numberToHex4(quote.options.amount),
          type: "generic" /* generic */
        };
      }
      const fee = 1;
      const retResponse = {
        fromTokenAmount: quote.options.amount,
        provider: this.name,
        toTokenAmount: toBN4(
          toBase(result.amountTo, quote.options.toToken.decimals)
        ),
        transactions: [transaction],
        slippage: quote.meta.slippage || DEFAULT_SLIPPAGE,
        fee,
        getStatusObject: async (options) => ({
          options: {
            ...options,
            swapId: result.id
          },
          provider: this.name
        })
      };
      return retResponse;
    }).catch(() => null);
  }
  getStatus(options) {
    return this.changellyRequest("getStatus", {
      id: options.swapId
    }).then(async (response) => {
      if (response.error)
        return "pending" /* pending */;
      const completedStatuses = ["finished"];
      const pendingStatuses = [
        "confirming",
        "exchanging",
        "sending",
        "waiting",
        "new"
      ];
      const failedStatuses = ["failed", "refunded", "hold", "expired"];
      const status = response.result;
      if (pendingStatuses.includes(status))
        return "pending" /* pending */;
      if (completedStatuses.includes(status))
        return "success" /* success */;
      if (failedStatuses.includes(status))
        return "failed" /* failed */;
      return "pending" /* pending */;
    });
  }
};
var changelly_default = Changelly;

// src/common/supportedNetworks.ts
import { SignerType as SignerType2 } from "@yetiwallet/types";
var NetworkDetails = {
  [SupportedNetworkName.Bitcoin]: {
    id: SupportedNetworkName.Bitcoin,
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
    name: "Bitcoin",
    symbol: "BTC",
    cgId: "bitcoin",
    rank: 1,
    signerType: [SignerType2.secp256k1btc],
    type: "bitcoin" /* Bitcoin */
  },
  [SupportedNetworkName.Ethereum]: {
    id: SupportedNetworkName.Ethereum,
    cgId: "ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Binance]: {
    id: SupportedNetworkName.Binance,
    cgId: "binancecoin",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
    name: "BNB",
    symbol: "BNB",
    rank: 3,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Bitindi]: {
    id: SupportedNetworkName.Bitindi,
    cgId: "bitindi-chain",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/22026.png",
    name: "BNI",
    symbol: "BNI",
    rank: 4,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Matic]: {
    id: SupportedNetworkName.Matic,
    cgId: "matic-network",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    name: "Polygon",
    symbol: "MATIC",
    rank: 5,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Optimism]: {
    id: SupportedNetworkName.Optimism,
    cgId: "optimism",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Optimism",
    symbol: "ETH",
    rank: 6,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Arbitrum]: {
    id: SupportedNetworkName.Arbitrum,
    cgId: "ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Arbitrum",
    symbol: "ETH",
    rank: 7,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Gnosis]: {
    id: SupportedNetworkName.Gnosis,
    cgId: "dai",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    name: "Gnosis",
    symbol: "xDAI",
    rank: 8,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Avalanche]: {
    id: SupportedNetworkName.Avalanche,
    cgId: "avalanche-2",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png",
    name: "Avalanche",
    symbol: "AVAX",
    rank: 9,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Fantom]: {
    id: SupportedNetworkName.Fantom,
    cgId: "fantom",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
    name: "Fantom",
    symbol: "FTM",
    rank: 10,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Klaytn]: {
    id: SupportedNetworkName.Klaytn,
    cgId: "klay-token",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xe4f05a66ec68b54a58b17c22107b02e0232cc817.png",
    name: "Klaytn",
    symbol: "KLAY",
    rank: 11,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Moonbeam]: {
    id: SupportedNetworkName.Moonbeam,
    cgId: "moonbeam",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/22459/thumb/glmr.png",
    name: "Moonbeam",
    symbol: "GLMR",
    rank: 12,
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */
  },
  [SupportedNetworkName.Kusama]: {
    id: SupportedNetworkName.Kusama,
    decimals: 12,
    logoURI: "https://assets.coingecko.com/coins/images/9568/thumb/m4zRhP5e_400x400.jpg",
    name: "Kusama",
    symbol: "ksm",
    cgId: "kusama",
    rank: 13,
    signerType: [SignerType2.sr25519, SignerType2.ed25519],
    type: "substrate" /* Substrate */
  },
  [SupportedNetworkName.Polkadot]: {
    id: SupportedNetworkName.Polkadot,
    decimals: 10,
    logoURI: "https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png",
    name: "Polkadot",
    symbol: "DOT",
    cgId: "polkadot",
    rank: 14,
    signerType: [SignerType2.sr25519, SignerType2.ed25519],
    type: "substrate" /* Substrate */
  },
  [SupportedNetworkName.EthereumClassic]: {
    id: SupportedNetworkName.EthereumClassic,
    cgId: "ethereum-classic",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/453/thumb/ethereum-classic-logo.png",
    name: "Ethereum Classic",
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */,
    rank: 15,
    symbol: "ETC"
  },
  [SupportedNetworkName.Aurora]: {
    id: SupportedNetworkName.Aurora,
    cgId: "ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Ethereum",
    signerType: [SignerType2.secp256k1],
    type: "evm" /* EVM */,
    rank: 16,
    symbol: "ETH"
  }
};
var isSupportedNetwork = (networkName) => !!NetworkDetails[networkName];
var getSupportedNetworks = () => Object.values(NetworkDetails);
var getNetworkInfoByName = (networkName) => NetworkDetails[networkName];
var supportedNetworks_default = NetworkDetails;

// src/swapToken.ts
import { fromBase as fromBase2, toBase as toBase2 } from "@yetiwallet/utils";
import BigNumber from "bignumber.js";
import { toBN as toBN5 } from "web3-utils";
var SwapToken = class {
  constructor(token) {
    this.token = token;
  }
  setBalance(balance) {
    this.token.balance = balance;
  }
  getBalanceReadable() {
    if (!this.token.balance)
      return "0";
    return this.toReadable(this.token.balance);
  }
  getBalanceRaw() {
    if (!this.token.balance)
      return toBN5("0");
    return this.token.balance;
  }
  toReadable(amount) {
    return fromBase2(amount.toString(), this.token.decimals);
  }
  toRaw(amount) {
    return toBN5(toBase2(amount, this.token.decimals));
  }
  getFiatTotal() {
    if (!this.token.balance || !this.token.price)
      return 0;
    return BigNumber(this.getBalanceReadable()).times(this.token.price).toNumber();
  }
  getFiatValue() {
    if (!this.token.price)
      return 0;
    return this.token.price;
  }
  getReadableToFiat(value) {
    if (!this.token.price)
      return 0;
    return BigNumber(value).times(this.token.price).toNumber();
  }
  getRawToFiat(value) {
    if (!this.token.price)
      return 0;
    return BigNumber(this.toReadable(value)).times(this.token.price).toNumber();
  }
};
var swapToken_default = SwapToken;

// src/index.ts
var Swap = class extends EventEmitter {
  constructor(options) {
    super();
    this.network = options.network;
    this.evmOptions = options.evmOptions ? options.evmOptions : {
      infiniteApproval: true
    };
    this.api = options.api;
    this.walletId = options.walletIdentifier;
    this.providerClasses = [oneInch_default, changelly_default];
    this.topTokenInfo = {
      contractsToId: {},
      topTokens: {},
      trendingTokens: {}
    };
    this.tokenList = {
      all: [],
      top: [],
      trending: []
    };
    this.toTokens = {
      all: {},
      top: {},
      trending: {}
    };
    this.fromTokens = {
      all: [],
      top: [],
      trending: []
    };
    this.initPromise = this.init();
  }
  async init() {
    if (TOKEN_LISTS[this.network])
      this.tokenList = await fetch4(TOKEN_LISTS[this.network]).then(
        (res) => res.json()
      );
    this.topTokenInfo = await fetch4(TOP_TOKEN_INFO_LIST).then(
      (res) => res.json()
    );
    this.providers = this.providerClasses.map(
      (Provider) => new Provider(this.api, this.network)
    );
    await Promise.all(
      this.providers.map((Provider) => Provider.init(this.tokenList.all))
    );
    const allFromTokens = {};
    [...this.providers].reverse().forEach((p) => {
      Object.assign(allFromTokens, p.getFromTokens());
    });
    this.fromTokens = {
      all: Object.values(allFromTokens).sort(sortNativeToFront),
      top: this.tokenList.top.filter((topt) => !!allFromTokens[topt.address]),
      trending: this.tokenList.trending.filter(
        (trendt) => !!allFromTokens[trendt.address]
      )
    };
    const native = this.fromTokens.all.shift();
    this.fromTokens.all.sort(sortByRank);
    this.fromTokens.all.unshift(native);
    const allToTokens = {};
    [...this.providers].reverse().forEach((p) => {
      merge(allToTokens, p.getToTokens());
    });
    Object.keys(allToTokens).forEach((nName) => {
      const values = Object.values(allToTokens[nName]);
      values.sort(sortNativeToFront);
      const nativeTo = values.shift();
      values.sort(sortByRank);
      values.unshift(nativeTo);
      values.forEach((val) => {
        if (val.cgId && this.topTokenInfo.topTokens[val.cgId]) {
          if (!this.toTokens.top[nName])
            this.toTokens.top[nName] = [];
          this.toTokens.top[nName].push({
            ...val,
            rank: this.topTokenInfo.topTokens[val.cgId].rank
          });
        }
        if (val.cgId && this.topTokenInfo.trendingTokens[val.cgId]) {
          if (!this.toTokens.trending[nName])
            this.toTokens.trending[nName] = [];
          this.toTokens.trending[nName].push({
            ...val,
            rank: this.topTokenInfo.trendingTokens[val.cgId]
          });
        }
      });
      if (this.toTokens.top[nName])
        this.toTokens.top[nName].sort(sortByRank);
      if (this.toTokens.trending[nName])
        this.toTokens.trending[nName].sort(sortByRank);
      this.toTokens.all[nName] = values;
    });
  }
  getFromTokens() {
    return this.fromTokens;
  }
  getToTokens() {
    return this.toTokens;
  }
  async getQuotes(options) {
    const response = await Promise.all(
      this.providers.map(
        (Provider) => Provider.getQuote(options, {
          infiniteApproval: this.evmOptions.infiniteApproval,
          walletIdentifier: this.walletId
        }).then((res) => {
          if (!res)
            return res;
          this.emit("quote-update" /* QuoteUpdate */, res.toTokenAmount);
          return res;
        })
      )
    );
    return response.filter((res) => res !== null).sort((a, b) => b.toTokenAmount.gt(a.toTokenAmount) ? 1 : -1);
  }
  getSwap(quote) {
    const provider = this.providers.find((p) => p.name === quote.provider);
    return provider.getSwap(quote);
  }
  getStatus(options) {
    const provider = this.providers.find((p) => p.name === options.provider);
    return provider.getStatus(options.options);
  }
  static networkNameToInfo(networkName) {
    return supportedNetworks_default[networkName];
  }
};
var src_default = Swap;
export {
  NetworkType,
  SupportedNetworkName,
  swapToken_default as SwapToken,
  TransactionStatus,
  TransactionType,
  WalletIdentifier,
  src_default as default,
  getNetworkInfoByName,
  getSupportedNetworks,
  isSupportedNetwork,
  sortByRank,
  sortNativeToFront
};
