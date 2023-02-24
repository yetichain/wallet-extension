// src/index.ts
import {
  Errors,
  SignerType as SignerType2,
  HWwalletType,
  WalletType
} from "@yetiwallet/types";
import { entropyToMnemonic, generateMnemonic, mnemonicToEntropy } from "bip39";
import { hexToBuffer, encrypt, decrypt } from "@yetiwallet/utils";
import PolkadotSigner from "@yetiwallet/signer-polkadot";
import EthereumSigner from "@yetiwallet/signer-ethereum";
import BitcoinSigner from "@yetiwallet/signer-bitcoin";
import assert from "assert";

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
import { SignerType } from "@yetiwallet/types";
var pathParser = (basePath, index, type) => {
  if ([SignerType.ecdsa, SignerType.ed25519, SignerType.sr25519].includes(type) && basePath === "//") {
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
      [SignerType2.secp256k1]: new EthereumSigner(),
      [SignerType2.ecdsa]: new PolkadotSigner(SignerType2.ecdsa),
      [SignerType2.ed25519]: new PolkadotSigner(SignerType2.ed25519),
      [SignerType2.sr25519]: new PolkadotSigner(SignerType2.sr25519),
      [SignerType2.secp256k1btc]: new BitcoinSigner()
    };
  }
  async init(password, {
    strength = configs_default.MNEMONIC_STRENGTH,
    mnemonic = generateMnemonic(strength)
  } = {}) {
    assert(
      !await this.#storage.get(configs_default.STORAGE_KEYS.ENCRYPTED_MNEMONIC),
      Errors.KeyringErrors.MnemonicExists
    );
    assert(password, Errors.KeyringErrors.NoPassword);
    const entropy = hexToBuffer(mnemonicToEntropy(mnemonic));
    const encrypted = await encrypt(entropy, password);
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
    assert(encrypted, Errors.KeyringErrors.NotInitialized);
    const decryptedEntropy = await decrypt(encrypted, password);
    return entropyToMnemonic(decryptedEntropy);
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
    assert(!this.#isLocked, Errors.KeyringErrors.Locked);
    const nextIndex = await this.#getPathIndex(key.basePath);
    let keypair;
    if (key.walletType === WalletType.privkey) {
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
    assert(
      !existingKeys[keyRecord.address],
      Errors.KeyringErrors.AddressExists
    );
    existingKeys[keyRecord.address] = keyRecord;
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
    const pathIndexes = await this.#storage.get(configs_default.STORAGE_KEYS.PATH_INDEXES) || {};
    pathIndexes[keyRecord.basePath] = keyRecord.pathIndex;
    await this.#storage.set(configs_default.STORAGE_KEYS.PATH_INDEXES, pathIndexes);
  }
  async sign(msgHash, options) {
    assert(!this.#isLocked, Errors.KeyringErrors.Locked);
    assert(
      !Object.values(HWwalletType).includes(
        options.walletType
      ),
      Errors.KeyringErrors.CannotUseKeyring
    );
    let keypair;
    if (options.walletType === WalletType.privkey) {
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
    assert(!this.#isLocked, Errors.KeyringErrors.Locked);
    assert(
      !Object.values(HWwalletType).includes(
        options.walletType
      ),
      Errors.KeyringErrors.CannotUseKeyring
    );
    assert(
      options.signerType === SignerType2.secp256k1,
      Errors.KeyringErrors.EnckryptDecryptNotSupported
    );
    const keypair = await this.#signers[options.signerType].generate(
      this.#mnemonic,
      pathParser(options.basePath, options.pathIndex, options.signerType)
    );
    return this.#signers[options.signerType].getEncryptionPublicKey(keypair);
  }
  async ethereumDecrypt(encryptedMessage, options) {
    assert(!this.#isLocked, Errors.KeyringErrors.Locked);
    assert(
      !Object.values(HWwalletType).includes(
        options.walletType
      ),
      Errors.KeyringErrors.CannotUseKeyring
    );
    assert(
      options.signerType === SignerType2.secp256k1,
      Errors.KeyringErrors.EnckryptDecryptNotSupported
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
    assert(!existingKeys[account.address], Errors.KeyringErrors.AddressExists);
    const hwAcc = { isHardware: true, ...account };
    existingKeys[account.address] = hwAcc;
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
    return hwAcc;
  }
  async renameAccount(address, newName) {
    const existingKeys = await this.getKeysObject();
    assert(existingKeys[address], Errors.KeyringErrors.AddressDoesntExists);
    const account = existingKeys[address];
    account.name = newName;
    existingKeys[address] = account;
    await this.#storage.set(configs_default.STORAGE_KEYS.KEY_INFO, existingKeys);
    return account;
  }
  async deleteAccount(address) {
    const existingKeys = await this.getKeysObject();
    assert(existingKeys[address], Errors.KeyringErrors.AddressDoesntExists);
    assert(
      existingKeys[address].walletType !== WalletType.mnemonic,
      Errors.KeyringErrors.CantRemoveMnemonicAddress
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
    const decrypted = await decrypt(encrypted, keyringPassword);
    return JSON.parse(decrypted.toString("utf-8"));
  }
  async #setPrivateKey(pathIndex, privKey, keyringPassword) {
    const allKeys = await this.#getPrivateKeys(keyringPassword);
    assert(!allKeys[pathIndex], Errors.KeyringErrors.AddressExists);
    allKeys[pathIndex] = privKey;
    const encrypted = await encrypt(
      Buffer.from(JSON.stringify(allKeys), "utf-8"),
      keyringPassword
    );
    await this.#storage.set(configs_default.STORAGE_KEYS.ENCRYPTED_PRIVKEYS, encrypted);
    this.#privkeys = allKeys;
  }
  async addKeyPair(keyPair, keyringPassword) {
    const existingKeys = await this.getKeysObject();
    assert(!existingKeys[keyPair.address], Errors.KeyringErrors.AddressExists);
    const kpAcc = await this.createKey({
      basePath: configs_default.PRIVEY_BASE_PATH,
      name: keyPair.name,
      signerType: keyPair.signerType,
      walletType: WalletType.privkey
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
export {
  src_default as default
};
