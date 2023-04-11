// src/index.ts
import { HWwalletType as HWwalletType2 } from "@yetiwallet/types";

// src/ledger/ethereum/index.ts
import webUsbTransport from "@ledgerhq/hw-transport-webusb";
import ledgerService from "@ledgerhq/hw-app-eth/lib/services/ledger";
import { HWwalletCapabilities } from "@yetiwallet/types";
import EthApp from "@ledgerhq/hw-app-eth";
import { toRpcSig, publicToAddress, rlp } from "ethereumjs-util";
import HDKey from "hdkey";
import { bigIntToHex, bufferToHex, hexToBuffer } from "@yetiwallet/utils";

// src/ledger/ethereum/configs.ts
import { NetworkNames as NetworkNames2 } from "@yetiwallet/types";

// src/configs.ts
import { HWwalletType, NetworkNames } from "@yetiwallet/types";
var walletConfigs = {
  [HWwalletType.ledger]: {
    isBackground: false
  },
  [HWwalletType.trezor]: {
    isBackground: true
  }
};
var ledgerAppNames = {
  [NetworkNames.Ethereum]: "Ethereum",
  [NetworkNames.Matic]: "Ethereum",
  [NetworkNames.Rootstock]: "RSK",
  [NetworkNames.EthereumClassic]: "Ethereum Classic",
  [NetworkNames.Ropsten]: "Ethereum",
  [NetworkNames.Goerli]: "Ethereum",
  [NetworkNames.Acala]: "Acala",
  [NetworkNames.Kusama]: "Kusama",
  [NetworkNames.Polkadot]: "Polkadot",
  [NetworkNames.Karura]: "Karura",
  [NetworkNames.Edgeware]: "Edgeware"
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
  [NetworkNames2.Ethereum]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [NetworkNames2.Matic]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [NetworkNames2.Rootstock]: [bip44Paths.rootstockLedger],
  [NetworkNames2.EthereumClassic]: [
    bip44Paths.ethereumClassicLedger,
    bip44Paths.ethereumClassicLedgerLive
  ],
  [NetworkNames2.Moonbeam]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [NetworkNames2.Moonriver]: [
    bip44Paths.ethereumLedger,
    bip44Paths.ethereumLedgerLive
  ],
  [NetworkNames2.Ropsten]: [bip44Paths.ethereumTestnetLedger],
  [NetworkNames2.Goerli]: [bip44Paths.ethereumTestnetLedger]
};

// src/ledger/ledgerConnect.ts
import getDeviceInfo from "@ledgerhq/live-common/src/hw/getDeviceInfo";
import openApp from "@ledgerhq/live-common/src/hw/openApp";
import getAppAndVersion from "@ledgerhq/live-common/src/hw/getAppAndVersion";
function connect(networkName) {
  return getDeviceInfo(this.transport).then(
    () => openApp(this.transport, ledgerAppNames[networkName]).then(() => true).catch(() => {
      throw new Error(
        `Make sure you have ${ledgerAppNames[networkName]} App installed on your ledger`
      );
    })
  ).catch((e) => {
    if (e.message === "DeviceOnDashboardExpected") {
      return getAppAndVersion(this.transport).then((appInfo) => {
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
      const support = await webUsbTransport.isSupported();
      if (support) {
        this.transport = await webUsbTransport.openConnected().then((res) => {
          if (!res)
            return webUsbTransport.create();
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
    const connection = new EthApp(this.transport);
    if (!isHardened) {
      if (!this.HDNodes[options.pathType.basePath]) {
        const rootPub = await connection.getAddress(
          options.pathType.basePath,
          options.confirmAddress,
          true
        );
        const hdKey = new HDKey();
        hdKey.publicKey = Buffer.from(rootPub.publicKey, "hex");
        hdKey.chainCode = Buffer.from(rootPub.chainCode, "hex");
        this.HDNodes[options.pathType.basePath] = hdKey;
      }
      const pubkey = this.HDNodes[options.pathType.basePath].derive(
        `m/${options.pathIndex}`
      ).publicKey;
      return {
        address: bufferToHex(publicToAddress(pubkey, true)),
        publicKey: bufferToHex(pubkey)
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
    const connection = new EthApp(this.transport);
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
    const connection = new EthApp(this.transport);
    let tx;
    let msgToSign;
    if (options.transaction.gasPrice) {
      tx = options.transaction;
      msgToSign = rlp.encode(tx.getMessageToSign(false)).toString("hex");
    } else {
      tx = options.transaction;
      msgToSign = tx.getMessageToSign(false).toString("hex");
    }
    const resolution = await ledgerService.resolveTransaction(
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
        return toRpcSig(
          bigIntToHex(rv - cv),
          hexToBuffer(result.r),
          hexToBuffer(result.s)
        );
      }
      return toRpcSig(
        `0x${result.v}`,
        hexToBuffer(result.r),
        hexToBuffer(result.s)
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
      HWwalletCapabilities.eip1559,
      HWwalletCapabilities.signMessage,
      HWwalletCapabilities.signTx
    ];
  }
};
var ethereum_default = LedgerEthereum;

// src/ledger/substrate/index.ts
import webUsbTransport2 from "@ledgerhq/hw-transport-webusb";
import { HWwalletCapabilities as HWwalletCapabilities2 } from "@yetiwallet/types";
import { u8aToBuffer } from "@polkadot/util";

// src/ledger/substrate/substrateApps.ts
import {
  newAcalaApp,
  newKusamaApp,
  newPolkadotApp,
  newKaruraApp
} from "@zondax/ledger-substrate";
import { NetworkNames as NetworkNames4 } from "@yetiwallet/types";
var LedgerApps = {
  [NetworkNames4.Acala]: newAcalaApp,
  [NetworkNames4.Kusama]: newKusamaApp,
  [NetworkNames4.Polkadot]: newPolkadotApp,
  [NetworkNames4.Karura]: newKaruraApp
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
      const support = await webUsbTransport2.isSupported();
      if (support) {
        this.transport = await webUsbTransport2.create();
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
      u8aToBuffer(tx.toU8a(true))
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
    return [HWwalletCapabilities2.signTx];
  }
};
var substrate_default = LedgerSubstrate;

// src/trezor/index.ts
import TrezorConnect from "@trezor/connect-web";
import { HWwalletCapabilities as HWwalletCapabilities3 } from "@yetiwallet/types";
import HDKey2 from "hdkey";
import { bigIntToHex as bigIntToHex2, bufferToHex as bufferToHex2, hexToBuffer as hexToBuffer2 } from "@yetiwallet/utils";
import { publicToAddress as publicToAddress2, toRpcSig as toRpcSig2 } from "ethereumjs-util";

// src/trezor/configs.ts
import { NetworkNames as NetworkNames6 } from "@yetiwallet/types";
var supportedPaths3 = {
  [NetworkNames6.Ethereum]: [bip44Paths.ethereum],
  [NetworkNames6.Matic]: [bip44Paths.ethereum],
  [NetworkNames6.EthereumClassic]: [bip44Paths.ethereumClassic],
  [NetworkNames6.Ropsten]: [bip44Paths.ethereumTestnet],
  [NetworkNames6.Goerli]: [bip44Paths.ethereumTestnet],
  [NetworkNames6.Rootstock]: [bip44Paths.rootstock]
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
    TrezorConnect.manifest({
      email: "info@yetichain.com",
      appUrl: "https://www.yetichain.com"
    });
    return true;
  }
  async getAddress(options) {
    if (!supportedPaths3[this.network])
      return Promise.reject(new Error("trezor-ethereum: Invalid network name"));
    if (!this.HDNodes[options.pathType.basePath]) {
      const rootPub = await TrezorConnect.ethereumGetPublicKey({
        path: options.pathType.basePath,
        showOnTrezor: options.confirmAddress
      });
      if (!rootPub.payload) {
        throw new Error("popup failed to open");
      }
      if (!rootPub.success)
        throw new Error(rootPub.payload.error);
      const hdKey = new HDKey2();
      hdKey.publicKey = Buffer.from(rootPub.payload.publicKey, "hex");
      hdKey.chainCode = Buffer.from(rootPub.payload.chainCode, "hex");
      this.HDNodes[options.pathType.basePath] = hdKey;
    }
    const pubkey = this.HDNodes[options.pathType.basePath].derive(
      `m/${options.pathIndex}`
    ).publicKey;
    return {
      address: bufferToHex2(publicToAddress2(pubkey, true)),
      publicKey: bufferToHex2(pubkey)
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
    const result = await TrezorConnect.ethereumSignMessage({
      path: options.pathType.path.replace(`{index}`, options.pathIndex),
      message: options.message.toString("hex"),
      hex: true
    });
    if (!result.success)
      throw new Error(result.payload.error);
    return bufferToHex2(hexToBuffer2(result.payload.signature));
  }
  async signTransaction(options) {
    let tx = options.transaction;
    const txObject = {
      to: tx.to.toString(),
      value: bigIntToHex2(tx.value),
      chainId: Number(tx.common.chainId()),
      nonce: bigIntToHex2(tx.nonce),
      gasLimit: bigIntToHex2(tx.gasLimit),
      data: bufferToHex2(tx.data)
    };
    if (options.transaction.gasPrice) {
      return TrezorConnect.ethereumSignTransaction({
        path: options.pathType.path.replace(`{index}`, options.pathIndex),
        transaction: {
          ...txObject,
          gasPrice: bigIntToHex2(tx.gasPrice)
        }
      }).then((result) => {
        if (!result.success)
          throw new Error(result.payload.error);
        const rv = BigInt(parseInt(result.payload.v, 16));
        const cv = tx.common.chainId() * 2n + 35n;
        return toRpcSig2(
          bigIntToHex2(rv - cv),
          hexToBuffer2(result.payload.r),
          hexToBuffer2(result.payload.s)
        );
      });
    }
    tx = options.transaction;
    return TrezorConnect.ethereumSignTransaction({
      path: options.pathType.path.replace(`{index}`, options.pathIndex),
      transaction: {
        ...txObject,
        maxFeePerGas: bigIntToHex2(tx.maxFeePerGas),
        maxPriorityFeePerGas: bigIntToHex2(tx.maxPriorityFeePerGas)
      }
    }).then((result) => {
      if (!result.success)
        throw new Error(result.payload.error);
      return toRpcSig2(
        result.payload.v,
        hexToBuffer2(result.payload.r),
        hexToBuffer2(result.payload.s)
      );
    });
  }
  static getSupportedNetworks() {
    return Object.keys(supportedPaths3);
  }
  static getCapabilities() {
    return [
      HWwalletCapabilities3.eip1559,
      HWwalletCapabilities3.signMessage,
      HWwalletCapabilities3.signTx
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
      [HWwalletType2.ledger]: [ethereum_default, substrate_default],
      [HWwalletType2.trezor]: [trezor_default]
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
export {
  src_default as default,
  ledgerAppNames
};
