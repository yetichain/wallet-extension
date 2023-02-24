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
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_types2 = require("@yetiwallet/types");
var import_bip39 = require("bip39");
var import_utils = require("@yetiwallet/utils");
var import_signer_polkadot = __toESM(require("@yetiwallet/signer-polkadot"));
var import_signer_ethereum = __toESM(require("@yetiwallet/signer-ethereum"));
var import_signer_bitcoin = __toESM(require("@yetiwallet/signer-bitcoin"));
var import_assert = __toESM(require("assert"));

// src/configs.ts
var configs_default = {
  STORAGE_KEYS: {
    KEY_INFO: "enkrypt_keyInfo",
    ENCRYPTED_MNEMONIC: "enkrypt_mnemonic",
    ENCRYPTED_PRIVKEYS: "enkrypt_privkey",
    PATH_INDEXES: "enkrypt_path_indexes"
  },
  PRIVEY_BASE_PATH: "/privkey/",
  MNEMONIC_STRENGTH: 128
  // 12 words
};

// src/utils.ts
var import_types = require("@yetiwallet/types");
var pathParser = (basePath, index, type) => {
  if ([import_types.SignerType.ecdsa, import_types.SignerType.ed25519, import_types.SignerType.sr25519].includes(type) && basePath === "//") {
    return index === 0 ? "" : `//${--index}`;
  }
  return `${basePath}/${index}`;
};

// src/index.ts
var KeyRing = class {
  #storage;
  #isLocked;
  #signers;
  #mnemonic;
  #privkeys;
  #autoLock;
  autoLockTime;
  constructor(storage, locktime = 30 * 60 * 1e3) {
    this.#storage = storage;
    this.#isLocked = true;
    this.autoLockTime = locktime;
    this.#privkeys = {};
    this.#signers = {
      [import_types2.SignerType.secp256k1]: new import_signer_ethereum.default(),
      [import_types2.SignerType.ecdsa]: new import_signer_polkadot.default(import_types2.SignerType.ecdsa),
      [import_types2.SignerType.ed25519]: new import_signer_polkadot.default(import_types2.SignerType.ed25519),
      [import_types2.SignerType.sr25519]: new import_signer_polkadot.default(import_types2.SignerType.sr25519),
      [import_types2.SignerType.secp256k1btc]: new import_signer_bitcoin.default()
    };
  }
  async init(password, {
    strength = configs_default.MNEMONIC_STRENGTH,
    mnemonic = (0, import_bip39.generateMnemonic)(strength)
  } = {}) {
    (0, import_assert.default)(
      !await this.#storage.get(configs_default.STORAGE_KEYS.ENCRYPTED_MNEMONIC),
      import_types2.Errors.KeyringErrors.MnemonicExists
    );
    (0, import_assert.default)(password, import_types2.Errors.KeyringErrors.NoPassword);
    const entropy = (0, import_utils.hexToBuffer)((0, import_bip39.mnemonicToEntropy)(mnemonic));
    const encrypted = await (0, import_utils.encrypt)(entropy, password);
    await this.#storage.set(configs_default.STORAGE_KEYS.ENCRYPTED_MNEMONIC, encrypted);
  }
  async isInitialized() {
    if (await this.#storage.get(configs_default.STORAGE_KEYS.ENCRYPTED_MNEMONIC))
      return true;
    return false;
  }
  async #getPathIndex(basePath) {
    const pathIndexes = await this.#storage.get(configs_default.STORAGE_KEYS.PATH_INDEXES) || {};
    if (pathIndexes[basePath] === void 0)
      return 0;
    return pathIndexes[basePath] + 1;
  }
  async #getMnemonic(password) {
    const encrypted = await this.#storage.get(
      configs_default.STORAGE_KEYS.ENCRYPTED_MNEMONIC
    );
    (0, import_assert.default)(encrypted, import_types2.Errors.KeyringErrors.NotInitialized);
    const decryptedEntropy = await (0, import_utils.decrypt)(encrypted, password);
    return (0, import_bip39.entropyToMnemonic)(decryptedEntropy);
  }
  async unlockMnemonic(password) {
    await Promise.all([
      this.#getMnemonic(password),
      this.#getPrivateKeys(password)
    ]).then((results) => {
      [this.#mnemonic, this.#privkeys] = results;
      this.#isLocked = false;
      if (this.autoLockTime !== 0) {
        clearTimeout(this.#autoLock);
        setTimeout(() => {
          this.#mnemonic = null;
          this.#isLocked = true;
          this.#privkeys = {};
        }, this.autoLockTime);
      }
    });
  }
  async getMnemonic(password) {
    return this.#getMnemonic(password);
  }
  async createKey(key) {
    (0, import_assert.default)(!this.#isLocked, import_types2.Errors.KeyringErrors.Locked);
    const nextIndex = await this.#getPathIndex(key.basePath);
    let keypair;
    if (key.walletType === import_types2.WalletType.privkey) {
      keypair = {
        privateKey: "",
        // we will manually set these
        publicKey: "",
        address: ""
      };
    } else {
      keypair = await this.#signers[key.signerType].generate(
        this.#mnemonic,
        pathParser(key.basePath, nextIndex, key.signerType)
      );
    }
    return {
      address: keypair.address,
      basePath: key.basePath,
      name: key.name,
      pathIndex: nextIndex,
      publicKey: keypair.publicKey,
      signerType: key.signerType,
      walletType: key.walletType,
      isHardware: false
    };
  }
  async createAndSaveKey(key) {
    const keyRecord = await this.createKey(key);
    await this.#saveKeyRecord(keyRecord);
    return keyRecord;
  }
  async #saveKeyRecord(keyRecord) {
    const existingKeys = await this.getKeysObject();
    (0, import_assert.default)(
      !existingKeys[keyRecord.address],
      import_types2.Errors.KeyringErrors.AddressExists
    );
    existingKeys[keyRecord.address] = keyRecord;
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
    const pathIndexes = await this.#storage.get(configs_default.STORAGE_KEYS.PATH_INDEXES) || {};
    pathIndexes[keyRecord.basePath] = keyRecord.pathIndex;
    await this.#storage.set(configs_default.STORAGE_KEYS.PATH_INDEXES, pathIndexes);
  }
  async sign(msgHash, options) {
    (0, import_assert.default)(!this.#isLocked, import_types2.Errors.KeyringErrors.Locked);
    (0, import_assert.default)(
      !Object.values(import_types2.HWwalletType).includes(
        options.walletType
      ),
      import_types2.Errors.KeyringErrors.CannotUseKeyring
    );
    let keypair;
    if (options.walletType === import_types2.WalletType.privkey) {
      const pubKey = (await this.getKeysArray()).find(
        (i) => i.basePath === options.basePath && i.pathIndex === options.pathIndex
      ).publicKey;
      keypair = {
        privateKey: this.#privkeys[options.pathIndex.toString()],
        publicKey: pubKey
      };
    } else {
      keypair = await this.#signers[options.signerType].generate(
        this.#mnemonic,
        pathParser(options.basePath, options.pathIndex, options.signerType)
      );
    }
    return this.#signers[options.signerType].sign(msgHash, keypair);
  }
  async getEthereumEncryptionPublicKey(options) {
    (0, import_assert.default)(!this.#isLocked, import_types2.Errors.KeyringErrors.Locked);
    (0, import_assert.default)(
      !Object.values(import_types2.HWwalletType).includes(
        options.walletType
      ),
      import_types2.Errors.KeyringErrors.CannotUseKeyring
    );
    (0, import_assert.default)(
      options.signerType === import_types2.SignerType.secp256k1,
      import_types2.Errors.KeyringErrors.EnckryptDecryptNotSupported
    );
    const keypair = await this.#signers[options.signerType].generate(
      this.#mnemonic,
      pathParser(options.basePath, options.pathIndex, options.signerType)
    );
    return this.#signers[options.signerType].getEncryptionPublicKey(keypair);
  }
  async ethereumDecrypt(encryptedMessage, options) {
    (0, import_assert.default)(!this.#isLocked, import_types2.Errors.KeyringErrors.Locked);
    (0, import_assert.default)(
      !Object.values(import_types2.HWwalletType).includes(
        options.walletType
      ),
      import_types2.Errors.KeyringErrors.CannotUseKeyring
    );
    (0, import_assert.default)(
      options.signerType === import_types2.SignerType.secp256k1,
      import_types2.Errors.KeyringErrors.EnckryptDecryptNotSupported
    );
    const keypair = await this.#signers[options.signerType].generate(
      this.#mnemonic,
      pathParser(options.basePath, options.pathIndex, options.signerType)
    );
    return this.#signers[options.signerType].decrypt(
      encryptedMessage,
      keypair
    );
  }
  async getKeysObject() {
    const jsonstr = await this.#storage.get(configs_default.STORAGE_KEYS.KEY_INFO);
    if (!jsonstr)
      return {};
    return jsonstr;
  }
  async getKeysArray() {
    return Object.values(await this.getKeysObject());
  }
  async addHWAccount(account) {
    const existingKeys = await this.getKeysObject();
    (0, import_assert.default)(!existingKeys[account.address], import_types2.Errors.KeyringErrors.AddressExists);
    const hwAcc = { isHardware: true, ...account };
    existingKeys[account.address] = hwAcc;
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
    return hwAcc;
  }
  async renameAccount(address, newName) {
    const existingKeys = await this.getKeysObject();
    (0, import_assert.default)(existingKeys[address], import_types2.Errors.KeyringErrors.AddressDoesntExists);
    const account = existingKeys[address];
    account.name = newName;
    existingKeys[address] = account;
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
    return account;
  }
  async deleteAccount(address) {
    const existingKeys = await this.getKeysObject();
    (0, import_assert.default)(existingKeys[address], import_types2.Errors.KeyringErrors.AddressDoesntExists);
    (0, import_assert.default)(
      existingKeys[address].walletType !== import_types2.WalletType.mnemonic,
      import_types2.Errors.KeyringErrors.CantRemoveMnemonicAddress
    );
    delete existingKeys[address];
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
  }
  async #getPrivateKeys(keyringPassword) {
    const encrypted = await this.#storage.get(
      configs_default.STORAGE_KEYS.ENCRYPTED_PRIVKEYS
    );
    if (!encrypted)
      return {};
    const decrypted = await (0, import_utils.decrypt)(encrypted, keyringPassword);
    return JSON.parse(decrypted.toString("utf-8"));
  }
  async #setPrivateKey(pathIndex, privKey, keyringPassword) {
    const allKeys = await this.#getPrivateKeys(keyringPassword);
    (0, import_assert.default)(!allKeys[pathIndex], import_types2.Errors.KeyringErrors.AddressExists);
    allKeys[pathIndex] = privKey;
    const encrypted = await (0, import_utils.encrypt)(
      Buffer.from(JSON.stringify(allKeys), "utf-8"),
      keyringPassword
    );
    await this.#storage.set(configs_default.STORAGE_KEYS.ENCRYPTED_PRIVKEYS, encrypted);
    this.#privkeys = allKeys;
  }
  async addKeyPair(keyPair, keyringPassword) {
    const existingKeys = await this.getKeysObject();
    (0, import_assert.default)(!existingKeys[keyPair.address], import_types2.Errors.KeyringErrors.AddressExists);
    const kpAcc = await this.createKey({
      basePath: configs_default.PRIVEY_BASE_PATH,
      name: keyPair.name,
      signerType: keyPair.signerType,
      walletType: import_types2.WalletType.privkey
    });
    kpAcc.address = keyPair.address;
    kpAcc.publicKey = keyPair.publicKey;
    await this.#setPrivateKey(
      kpAcc.pathIndex.toString(),
      keyPair.privateKey,
      keyringPassword
    );
    await this.#saveKeyRecord(kpAcc);
    return kpAcc;
  }
  async reset() {
    const resetPromises = Object.values(configs_default.STORAGE_KEYS).map(
      (name) => this.#storage.remove(name)
    );
    await Promise.all(resetPromises);
  }
  isLocked() {
    return this.#isLocked;
  }
  lock() {
    clearTimeout(this.#autoLock);
    this.#mnemonic = null;
    this.#isLocked = true;
  }
};
var src_default = KeyRing;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
