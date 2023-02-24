// src/ens/index.ts
import { ethers } from "ethers";
import { formatsByName } from "@ensdomains/address-encoder";

// src/utils.ts
var getTLD = (name) => {
  const labels = name.split(".");
  if (labels.length < 2)
    return "";
  return labels[labels.length - 1];
};

// src/ens/index.ts
var ENSResolver = class {
  constructor(options) {
    this.options = options;
    this.name = "ens";
  }
  async init() {
    this.ENSProvider = new ethers.providers.JsonRpcProvider(this.options.node);
  }
  async resolveReverseName(address) {
    const nameAddress = await this.ENSProvider.lookupAddress(address);
    if (nameAddress)
      return nameAddress;
    return null;
  }
  async resolveAddress(name, coin = "ETH") {
    const resolver = await this.ENSProvider.getResolver(name);
    if (resolver) {
      return resolver.getAddress(formatsByName[coin].coinType).then((address) => {
        if (address)
          return address;
        return null;
      });
    }
    return null;
  }
  // eslint-disable-next-line class-methods-use-this
  isSupportedName(name) {
    return getTLD(name).length > 2;
  }
};
var ens_default = ENSResolver;

// src/ud/index.ts
import { Resolution } from "@unstoppabledomains/resolution";
var UDResolver = class {
  constructor() {
    this.supportedTLDs = [
      "blockchain",
      "bitcoin",
      "crypto",
      "nft",
      "wallet",
      "x",
      "dao",
      "888",
      "zil"
    ];
    this.UDProvider = new Resolution();
    this.name = "ud";
  }
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  async init() {
  }
  async resolveReverseName(address) {
    return this.UDProvider.reverse(address).then((name) => name).catch(() => null);
  }
  async resolveAddress(name, coin = "ETH") {
    return this.UDProvider.addr(name, coin).then((address) => address).catch(() => null);
  }
  isSupportedName(name) {
    return this.supportedTLDs.includes(getTLD(name));
  }
};
var ud_default = UDResolver;

// src/rns/index.ts
import { ethers as ethers2, Contract, utils, constants } from "ethers";
var ROOTSTOCK_RPC_NODE = "https://public-node.rsk.co";
var RNS_REGISTRY_ADDRESS = "0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5";
var stripHexPrefix = (hex) => hex.slice(2);
var RNS_REGISTRY_ABI = [
  "function resolver(bytes32 node) public view returns (address)"
];
var RNS_ADDR_RESOLVER_ABI = [
  "function addr(bytes32 node) public view returns (address)"
];
var RNS_NAME_RESOLVER_ABI = [
  "function name(bytes32 node) external view returns (string)"
];
var RNSResolver = class {
  constructor() {
    this.name = "rns";
  }
  async init() {
    this.RNSProvider = new ethers2.providers.JsonRpcProvider(ROOTSTOCK_RPC_NODE);
    this.rnsRegistryContract = new Contract(
      RNS_REGISTRY_ADDRESS,
      RNS_REGISTRY_ABI,
      this.RNSProvider
    );
  }
  async resolveReverseName(address) {
    const reverseRecordHash = utils.namehash(
      `${stripHexPrefix(address)}.addr.reverse`
    );
    const resolverAddress = await this.rnsRegistryContract.resolver(
      reverseRecordHash
    );
    if (resolverAddress === constants.AddressZero) {
      return null;
    }
    const nameResolverContract = new Contract(
      resolverAddress,
      RNS_NAME_RESOLVER_ABI,
      this.RNSProvider
    );
    const name = await nameResolverContract.name(reverseRecordHash);
    if (name === void 0) {
      return null;
    }
    return name;
  }
  async resolveAddress(name, _coin = "RSK") {
    const nameHash = utils.namehash(name);
    const resolverAddress = await this.rnsRegistryContract.resolver(nameHash);
    if (resolverAddress === constants.AddressZero) {
      return null;
    }
    const addrResolverContract = new Contract(
      resolverAddress,
      RNS_ADDR_RESOLVER_ABI,
      this.RNSProvider
    );
    const address = await addrResolverContract.addr(nameHash);
    if (address === void 0 || address === null) {
      return null;
    }
    return address.toLowerCase();
  }
  isSupportedName(name) {
    return getTLD(name) === "rsk";
  }
};
var rns_default = RNSResolver;

// src/index.ts
var NameResolver = class {
  constructor(options) {
    this.ens = new ens_default(options.ens);
    this.rns = new rns_default();
    this.ud = new ud_default();
    this.initDone = Promise.all([this.ens.init(), this.rns.init(), this.ud.init()]);
  }
  async resolveReverseName(address) {
    return this.initDone.then(
      () => Promise.all([
        this.ens.resolveReverseName(address),
        this.rns.resolveReverseName(address),
        this.ud.resolveReverseName(address)
      ]).then((results) => {
        for (const name of results) {
          if (name !== null)
            return name;
        }
        return null;
      })
    );
  }
  async resolveAddress(name, coin = "ETH") {
    return this.initDone.then(() => {
      if (this.rns.isSupportedName(name))
        return this.rns.resolveAddress(name, coin);
      if (this.ud.isSupportedName(name))
        return this.ud.resolveAddress(name, coin);
      if (this.ens.isSupportedName(name))
        return this.ens.resolveAddress(name, coin);
      return null;
    });
  }
};
var src_default = NameResolver;
export {
  ens_default as ENSResolver,
  ud_default as UDResolver,
  src_default as default
};
