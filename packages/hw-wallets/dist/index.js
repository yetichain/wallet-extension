var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  ledgerAppNames: () => ledgerAppNames
});
module.exports = __toCommonJS(src_exports);
var import_types8 = require("@yetiwallet/types");

// src/ledger/ethereum/index.ts
var import_hw_transport_webusb = __toESM(require("@ledgerhq/hw-transport-webusb"));
var import_ledger = __toESM(require("@ledgerhq/hw-app-eth/lib/services/ledger"));
var import_types3 = require("@yetiwallet/types");
var import_hw_app_eth = __toESM(require("@ledgerhq/hw-app-eth"));
var import_ethereumjs_util = require("ethereumjs-util");
var import_hdkey = __toESM(require("hdkey"));
var import_utils = require("@yetiwallet/utils");

// src/ledger/ethereum/configs.ts
var import_types2 = require("@yetiwallet/types");

// src/configs.ts
var import_types = require("@yetiwallet/types");
var walletConfigs = {
  [import_types.HWwalletType.ledger]: {
    isBackground: false
  },
  [import_types.HWwalletType.trezor]: {
    isBackground: true
  }
};
var ledgerAppNames = {
  [import_types.NetworkNames.Ethereum]: "Ethereum",
  [import_types.NetworkNames.Matic]: "Ethereum",
  [import_types.NetworkNames.Rootstock]: "RSK",
  [import_types.NetworkNames.EthereumClassic]: "Ethereum Classic",
  [import_types.NetworkNames.Ropsten]: "Ethereum",
  [import_types.NetworkNames.Goerli]: "Ethereum",
  [import_types.NetworkNames.Acala]: "Acala",
  [import_types.NetworkNames.Kusama]: "Kusama",
  [import_types.NetworkNames.Polkadot]: "Polkadot",
  [import_types.NetworkNames.Karura]: "Karura",
  [import_types.NetworkNames.Edgeware]: "Edgeware"
};
var bip44Paths = {
  ethereumLedger: {
    path: "m/44'/60'/0'/{index}",
    basePath: "m/44'/60'/0'",
    label: "Ethereum"
  },
  ethereumLedgerLive: {
    path: "m/44'/60'/{index}'/0/0",
    basePath: "m/44'/60'",
    label: "Ethereum - Ledger Live"
  },
  ethereumTestnetLedger: {
    path: "m/44'/1'/0'/{index}",
    basePath: "m/44'/1'/0'",
    label: "Testnet"
  },
  ethereumClassicLedger: {
    path: "m/44'/61'/0'/{index}",
    basePath: "m/44'/61'/0'",
    label: "Ethereum Classic"
  },
  ethereumClassicLedgerLive: {
    path: "m/44'/61'/{index}'/0/0",
    basePath: "m/44'/61'",
    label: "Ethereum Classic -  Ledger Live"
  },
  ethereum: {
    path: "m/44'/60'/0'/0/{index}",
    basePath: "m/44'/60'/0'/0",
    label: "Ethereum"
  },
  rootstock: {
    path: "m/44'/137'/0'/0/{index}",
    basePath: "m/44'/137'/0'/0",
    label: "Rootstock"
  },
  rootstockLedger: {
    path: "m/44'/137'/0'/{index}",
    basePath: "m/44'/137'/0'/0",
    label: "Rootstock"
  },
  ethereumClassic: {
    path: "m/44'/61'/0'/0/{index}",
    basePath: "m/44'/61'/0'/0",
    label: "Ethereum Classic"
  },
  ethereumTestnet: {
    path: "m/44'/1'/0'/0/{index}",
    basePath: "m/44'/1'/0'/0",
    label: "Testnet"
  },
  substrateLedger: {
    path: "m/0'/0'/{index}'",
    basePath: "m/0'/0'/0",
    label: "Substrate"
  }
};

// src/ledger/ethereum/configs.ts
var supportedPaths = {
  [import_types2.NetworkNames.Ethereum]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [import_types2.NetworkNames.Matic]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [import_types2.NetworkNames.Rootstock]: [bip44Paths.rootstockLedger],
  [import_types2.NetworkNames.EthereumClassic]: [
    bip44Paths.ethereumClassicLedger,
    bip44Paths.ethereumClassicLedgerLive
  ],
  [import_types2.NetworkNames.Moonbeam]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [import_types2.NetworkNames.Moonriver]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [import_types2.NetworkNames.Ropsten]: [bip44Paths.ethereumTestnetLedger],
  [import_types2.NetworkNames.Goerli]: [bip44Paths.ethereumTestnetLedger]
};

// src/ledger/ledgerConnect.ts
var import_getDeviceInfo = __toESM(require("@ledgerhq/live-common/src/hw/getDeviceInfo"));
var import_openApp = __toESM(require("@ledgerhq/live-common/src/hw/openApp"));
var import_getAppAndVersion = __toESM(require("@ledgerhq/live-common/src/hw/getAppAndVersion"));
function connect(networkName) {
  return (0, import_getDeviceInfo.default)(this.transport).then(
    () => (0, import_openApp.default)(this.transport, ledgerAppNames[networkName]).then(() => true).catch(() => {
      throw new Error(
        `Make sure you have ${ledgerAppNames[networkName]} App installed on your ledger`
      );
    })
  ).catch((e) => {
    if (e.message === "DeviceOnDashboardExpected") {
      return (0, import_getAppAndVersion.default)(this.transport).then((appInfo) => {
        if (appInfo.name !== ledgerAppNames[networkName])
          throw new Error(
            `Make sure you have ${ledgerAppNames[networkName]} App opened`
          );
        return true;
      });
    }
    throw e;
  });
}
var ledgerConnect_default = connect;

// src/ledger/ethereum/index.ts
var LedgerEthereum = class {
  transport;
  network;
  HDNodes;
  constructor(network) {
    this.transport = null;
    this.network = network;
    this.HDNodes = {};
  }
  async init() {
    if (!this.transport) {
      const support = await import_hw_transport_webusb.default.isSupported();
      if (support) {
        this.transport = await import_hw_transport_webusb.default.openConnected().then((res) => {
          if (!res)
            return import_hw_transport_webusb.default.create();
          return res;
        });
      } else {
        return Promise.reject(
          new Error("ledger-ethereum: webusb is not supported")
        );
      }
    }
    return true;
  }
  async getAddress(options) {
    if (!supportedPaths[this.network])
      return Promise.reject(new Error("ledger-ethereum: Invalid network name"));
    const isHardened = options.pathType.basePath.split("/").length - 1 === 2;
    const connection = new import_hw_app_eth.default(this.transport);
    if (!isHardened) {
      if (!this.HDNodes[options.pathType.basePath]) {
        const rootPub = await connection.getAddress(
          options.pathType.basePath,
          options.confirmAddress,
          true
        );
        const hdKey = new import_hdkey.default();
        hdKey.publicKey = Buffer.from(rootPub.publicKey, "hex");
        hdKey.chainCode = Buffer.from(rootPub.chainCode, "hex");
        this.HDNodes[options.pathType.basePath] = hdKey;
      }
      const pubkey = this.HDNodes[options.pathType.basePath].derive(
        `m/${options.pathIndex}`
      ).publicKey;
      return {
        address: (0, import_utils.bufferToHex)((0, import_ethereumjs_util.publicToAddress)(pubkey, true)),
        publicKey: (0, import_utils.bufferToHex)(pubkey)
      };
    }
    return connection.getAddress(
      options.pathType.path.replace(`{index}`, options.pathIndex),
      options.confirmAddress
    ).then((res) => ({
      address: res.address.toLowerCase(),
      publicKey: `0x${res.publicKey}`
    }));
  }
  signPersonalMessage(options) {
    const connection = new import_hw_app_eth.default(this.transport);
    return connection.signPersonalMessage(
      options.pathType.path.replace(`{index}`, options.pathIndex),
      options.message.toString("hex")
    ).then((result) => {
      const v = result.v - 27;
      let vs = v.toString(16);
      if (vs.length < 2) {
        vs = `0${v}`;
      }
      return `0x${result.r}${result.s}${vs}`;
    });
  }
  async signTransaction(options) {
    const connection = new import_hw_app_eth.default(this.transport);
    let tx;
    let msgToSign;
    if (options.transaction.gasPrice) {
      tx = options.transaction;
      msgToSign = import_ethereumjs_util.rlp.encode(tx.getMessageToSign(false)).toString("hex");
    } else {
      tx = options.transaction;
      msgToSign = tx.getMessageToSign(false).toString("hex");
    }
    const resolution = await import_ledger.default.resolveTransaction(
      msgToSign,
      {},
      {}
    );
    return connection.signTransaction(
      options.pathType.path.replace(`{index}`, options.pathIndex),
      msgToSign,
      resolution
    ).then((result) => {
      if (tx.gasPrice) {
        const rv = BigInt(parseInt(result.v, 16));
        const cv = tx.common.chainId() * 2n + 35n;
        return (0, import_ethereumjs_util.toRpcSig)(
          (0, import_utils.bigIntToHex)(rv - cv),
          (0, import_utils.hexToBuffer)(result.r),
          (0, import_utils.hexToBuffer)(result.s)
        );
      }
      return (0, import_ethereumjs_util.toRpcSig)(
        `0x${result.v}`,
        (0, import_utils.hexToBuffer)(result.r),
        (0, import_utils.hexToBuffer)(result.s)
      );
    });
  }
  getSupportedPaths() {
    return supportedPaths[this.network];
  }
  close() {
    return this.transport.close().catch(() => {
    });
  }
  isConnected(networkName) {
    return ledgerConnect_default.bind(this)(networkName);
  }
  static getSupportedNetworks() {
    return Object.keys(supportedPaths);
  }
  static getCapabilities() {
    return [
      import_types3.HWwalletCapabilities.eip1559,
      import_types3.HWwalletCapabilities.signMessage,
      import_types3.HWwalletCapabilities.signTx
    ];
  }
};
var ethereum_default = LedgerEthereum;

// src/ledger/substrate/index.ts
var import_hw_transport_webusb2 = __toESM(require("@ledgerhq/hw-transport-webusb"));
var import_types5 = require("@yetiwallet/types");
var import_util = require("@polkadot/util");

// src/ledger/substrate/substrateApps.ts
var import_ledger_substrate = require("@zondax/ledger-substrate");
var import_types4 = require("@yetiwallet/types");
var LedgerApps = {
  [import_types4.NetworkNames.Acala]: import_ledger_substrate.newAcalaApp,
  [import_types4.NetworkNames.Kusama]: import_ledger_substrate.newKusamaApp,
  [import_types4.NetworkNames.Polkadot]: import_ledger_substrate.newPolkadotApp,
  [import_types4.NetworkNames.Karura]: import_ledger_substrate.newKaruraApp
};

// src/ledger/substrate/utils.ts
var bip32Like = (path) => {
  if (path === "m/")
    return true;
  return /^m(((\/[0-9]+h)+|(\/[0-9]+H)+|(\/[0-9]+')*)((\/[0-9]+)*))$/.test(
    path
  );
};
var HARDENED = 2147483648;
var bip32ToAddressNList = (path) => {
  if (!bip32Like(path)) {
    throw new Error(`Not a bip32 path: '${path}'`);
  }
  if (/^m\//i.test(path)) {
    path = path.slice(2);
  }
  const segments = path.split("/");
  if (segments.length === 1 && segments[0] === "")
    return [];
  const ret = new Array(segments.length);
  for (let i = 0; i < segments.length; i++) {
    const tmp = /(\d+)([hH']?)/.exec(segments[i]);
    if (tmp === null) {
      throw new Error("Invalid input");
    }
    ret[i] = parseInt(tmp[1], 10);
    if (ret[i] >= HARDENED) {
      throw new Error("Invalid child index");
    }
    if (tmp[2] === "h" || tmp[2] === "H" || tmp[2] === "'") {
      ret[i] += HARDENED;
    } else if (tmp[2].length !== 0) {
      throw new Error("Invalid modifier");
    }
  }
  return ret;
};

// src/ledger/substrate/configs.ts
var supportedPaths2 = [bip44Paths.substrateLedger];

// src/ledger/substrate/index.ts
var LedgerSubstrate = class {
  transport;
  network;
  constructor(network) {
    this.transport = null;
    this.network = network;
  }
  validatePathAndNetwork(options) {
    if (!LedgerApps[this.network])
      throw new Error("ledger-substrate: Invalid network name");
    const pathValues = bip32ToAddressNList(
      options.pathType.path.replace(`{index}`, options.pathIndex)
    );
    if (pathValues.length < 3)
      throw new Error("ledger-substrate: Invalid path");
  }
  async init() {
    if (!this.transport) {
      const support = await import_hw_transport_webusb2.default.isSupported();
      if (support) {
        this.transport = await import_hw_transport_webusb2.default.create();
      } else {
        return Promise.reject(
          new Error("ledger-substrate: webusb is not supported")
        );
      }
    }
    return true;
  }
  async getAddress(options) {
    this.validatePathAndNetwork(options);
    const app = LedgerApps[this.network];
    const pathValues = bip32ToAddressNList(
      options.pathType.path.replace(`{index}`, options.pathIndex)
    );
    const connection = app(this.transport);
    return connection.getAddress(
      pathValues[0],
      pathValues[1],
      pathValues[2],
      options.confirmAddress
    ).then((res) => ({
      address: res.address,
      publicKey: `0x${res.pubKey}`
    }));
  }
  signMessage() {
    throw new Error("Not Supported");
  }
  getSupportedPaths() {
    return supportedPaths2;
  }
  close() {
    return this.transport.close().catch(() => {
    });
  }
  isConnected(networkName) {
    return ledgerConnect_default.bind(this)(networkName);
  }
  signPersonalMessage() {
    throw new Error("hw-wallet:substrate: sign Personal message not supported");
  }
  async signTransaction(options) {
    this.validatePathAndNetwork(options);
    const pathValues = bip32ToAddressNList(
      options.pathType.path.replace(`{index}`, options.pathIndex)
    );
    const app = LedgerApps[this.network];
    const tx = options.transaction;
    const connection = app(this.transport);
    return connection.sign(
      pathValues[0],
      pathValues[1],
      pathValues[2],
      (0, import_util.u8aToBuffer)(tx.toU8a(true))
    ).then((result) => {
      if (result.error_message !== "No errors")
        throw new Error(result.error_message);
      else
        return `0x${result.signature.toString("hex")}`;
    });
  }
  static getSupportedNetworks() {
    return Object.keys(LedgerApps);
  }
  static getCapabilities() {
    return [import_types5.HWwalletCapabilities.signTx];
  }
};
var substrate_default = LedgerSubstrate;

// src/trezor/index.ts
var import_connect_web = __toESM(require("@trezor/connect-web"));
var import_types7 = require("@yetiwallet/types");
var import_hdkey2 = __toESM(require("hdkey"));
var import_utils3 = require("@yetiwallet/utils");
var import_ethereumjs_util2 = require("ethereumjs-util");

// src/trezor/configs.ts
var import_types6 = require("@yetiwallet/types");
var supportedPaths3 = {
  [import_types6.NetworkNames.Ethereum]: [bip44Paths.ethereum],
  [import_types6.NetworkNames.Matic]: [bip44Paths.ethereum],
  [import_types6.NetworkNames.EthereumClassic]: [bip44Paths.ethereumClassic],
  [import_types6.NetworkNames.Ropsten]: [bip44Paths.ethereumTestnet],
  [import_types6.NetworkNames.Goerli]: [bip44Paths.ethereumTestnet],
  [import_types6.NetworkNames.Rootstock]: [bip44Paths.rootstock]
};

// src/trezor/index.ts
var TrezorEthereum = class {
  network;
  HDNodes;
  constructor(network) {
    this.network = network;
    this.HDNodes = {};
  }
  async init() {
    import_connect_web.default.manifest({
      email: "info@yetichain.com",
      appUrl: "https://www.yetichain.com"
    });
    return true;
  }
  async getAddress(options) {
    if (!supportedPaths3[this.network])
      return Promise.reject(new Error("trezor-ethereum: Invalid network name"));
    if (!this.HDNodes[options.pathType.basePath]) {
      const rootPub = await import_connect_web.default.ethereumGetPublicKey({
        path: options.pathType.basePath,
        showOnTrezor: options.confirmAddress
      });
      if (!rootPub.payload) {
        throw new Error("popup failed to open");
      }
      if (!rootPub.success)
        throw new Error(rootPub.payload.error);
      const hdKey = new import_hdkey2.default();
      hdKey.publicKey = Buffer.from(rootPub.payload.publicKey, "hex");
      hdKey.chainCode = Buffer.from(rootPub.payload.chainCode, "hex");
      this.HDNodes[options.pathType.basePath] = hdKey;
    }
    const pubkey = this.HDNodes[options.pathType.basePath].derive(
      `m/${options.pathIndex}`
    ).publicKey;
    return {
      address: (0, import_utils3.bufferToHex)((0, import_ethereumjs_util2.publicToAddress)(pubkey, true)),
      publicKey: (0, import_utils3.bufferToHex)(pubkey)
    };
  }
  signMessage() {
    throw new Error("Not Supported");
  }
  getSupportedPaths() {
    return supportedPaths3[this.network];
  }
  close() {
    return Promise.resolve();
  }
  isConnected() {
    return Promise.resolve(true);
  }
  async signPersonalMessage(options) {
    const result = await import_connect_web.default.ethereumSignMessage({
      path: options.pathType.path.replace(`{index}`, options.pathIndex),
      message: options.message.toString("hex"),
      hex: true
    });
    if (!result.success)
      throw new Error(result.payload.error);
    return (0, import_utils3.bufferToHex)((0, import_utils3.hexToBuffer)(result.payload.signature));
  }
  async signTransaction(options) {
    let tx = options.transaction;
    const txObject = {
      to: tx.to.toString(),
      value: (0, import_utils3.bigIntToHex)(tx.value),
      chainId: Number(tx.common.chainId()),
      nonce: (0, import_utils3.bigIntToHex)(tx.nonce),
      gasLimit: (0, import_utils3.bigIntToHex)(tx.gasLimit),
      data: (0, import_utils3.bufferToHex)(tx.data)
    };
    if (options.transaction.gasPrice) {
      return import_connect_web.default.ethereumSignTransaction({
        path: options.pathType.path.replace(`{index}`, options.pathIndex),
        transaction: {
          ...txObject,
          gasPrice: (0, import_utils3.bigIntToHex)(tx.gasPrice)
        }
      }).then((result) => {
        if (!result.success)
          throw new Error(result.payload.error);
        const rv = BigInt(parseInt(result.payload.v, 16));
        const cv = tx.common.chainId() * 2n + 35n;
        return (0, import_ethereumjs_util2.toRpcSig)(
          (0, import_utils3.bigIntToHex)(rv - cv),
          (0, import_utils3.hexToBuffer)(result.payload.r),
          (0, import_utils3.hexToBuffer)(result.payload.s)
        );
      });
    }
    tx = options.transaction;
    return import_connect_web.default.ethereumSignTransaction({
      path: options.pathType.path.replace(`{index}`, options.pathIndex),
      transaction: {
        ...txObject,
        maxFeePerGas: (0, import_utils3.bigIntToHex)(tx.maxFeePerGas),
        maxPriorityFeePerGas: (0, import_utils3.bigIntToHex)(tx.maxPriorityFeePerGas)
      }
    }).then((result) => {
      if (!result.success)
        throw new Error(result.payload.error);
      return (0, import_ethereumjs_util2.toRpcSig)(
        result.payload.v,
        (0, import_utils3.hexToBuffer)(result.payload.r),
        (0, import_utils3.hexToBuffer)(result.payload.s)
      );
    });
  }
  static getSupportedNetworks() {
    return Object.keys(supportedPaths3);
  }
  static getCapabilities() {
    return [
      import_types7.HWwalletCapabilities.eip1559,
      import_types7.HWwalletCapabilities.signMessage,
      import_types7.HWwalletCapabilities.signTx
    ];
  }
};
var trezor_default = TrezorEthereum;

// src/index.ts
var HWwalletManager = class {
  providerTypes;
  providers;
  constructor() {
    this.providerTypes = {
      [import_types8.HWwalletType.ledger]: [ethereum_default, substrate_default],
      [import_types8.HWwalletType.trezor]: [trezor_default]
    };
    this.providers = {};
  }
  async #initialize(wallet, network) {
    if (!this.providers[network]) {
      this.providers[network] = this.#getProvider(wallet, network);
      await this.providers[network].init();
    }
  }
  async getAddress(options) {
    await this.#initialize(options.wallet, options.networkName);
    return this.providers[options.networkName].getAddress(
      options
    );
  }
  async signPersonalMessage(options) {
    await this.#initialize(options.wallet, options.networkName);
    return this.providers[options.networkName].signPersonalMessage(options);
  }
  async signTransaction(options) {
    await this.#initialize(options.wallet, options.networkName);
    return this.providers[options.networkName].signTransaction(options);
  }
  async getSupportedPaths(options) {
    return this.#getProvider(
      options.wallet,
      options.networkName
    ).getSupportedPaths();
  }
  isNetworkSupported(networkName) {
    for (const wallet of Object.keys(this.providerTypes)) {
      for (const P of this.providerTypes[wallet]) {
        if (P.getSupportedNetworks().includes(networkName))
          return true;
      }
    }
    return false;
  }
  async isConnected(options) {
    await this.#initialize(options.wallet, options.networkName);
    return this.providers[options.networkName].isConnected(options.networkName);
  }
  async close() {
    return Promise.all(
      Object.values(this.providers).map((p) => p.close())
    ).then();
  }
  #getProvider(wallet, network) {
    for (const P of this.providerTypes[wallet]) {
      if (P.getSupportedNetworks().includes(network))
        return new P(network);
    }
    throw new Error(`hw-wallets: no suitable wallets found:${network}`);
  }
};
var src_default = HWwalletManager;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ledgerAppNames
});
