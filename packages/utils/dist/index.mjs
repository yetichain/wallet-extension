// src/index.ts
import {
  stripHexPrefix,
  bytesToHex,
  hexToBytes,
  keccak256 as keccak2562,
  utf8ToHex,
  numberToHex
} from "web3-utils";
import { bigIntToBuffer, bigIntToHex } from "@ethereumjs/util";
import { encodeAddress as polkadotEncodeAddress } from "@polkadot/util-crypto";

// src/encrypt.ts
import {
  randomBytes,
  createCipheriv,
  createDecipheriv
} from "crypto";
import { scrypt } from "ethereum-cryptography/scrypt";
import { keccak256 } from "web3-utils";
import { Errors } from "@yetiwallet/types";
var scryptParams = {
  cipher: "aes-128-ctr",
  kdf: "scrypt",
  dklen: 32,
  n: 262144,
  r: 8,
  p: 1
};
var runCipherBuffer = (cipher, data) => Buffer.concat([cipher.update(data), cipher.final()]);
var encrypt = async (msg, password) => {
  const sparams = {
    ...{
      salt: randomBytes(32),
      iv: randomBytes(16)
    },
    ...scryptParams
  };
  const derivedKey = await scrypt(
    Buffer.from(password),
    sparams.salt,
    sparams.n,
    sparams.p,
    sparams.r,
    sparams.dklen
  );
  const cipher = createCipheriv(
    sparams.cipher,
    derivedKey.slice(0, 16),
    sparams.iv
  );
  const ciphertext = runCipherBuffer(cipher, msg);
  const mac = keccak256(
    bufferToHex(
      Buffer.concat([
        Buffer.from(derivedKey.slice(16, 32)),
        Buffer.from(ciphertext)
      ])
    )
  );
  return {
    ciphertext: bufferToHex(ciphertext),
    salt: bufferToHex(sparams.salt),
    iv: bufferToHex(sparams.iv),
    version: 1,
    mac
  };
};
var decrypt = async (encryptedData, password) => {
  const sparams = {
    ...{
      ciphertext: hexToBuffer(encryptedData.ciphertext),
      salt: hexToBuffer(encryptedData.salt),
      iv: hexToBuffer(encryptedData.iv),
      version: encryptedData.version,
      mac: encryptedData.mac
    },
    ...scryptParams
  };
  const derivedKey = await scrypt(
    Buffer.from(password),
    sparams.salt,
    sparams.n,
    sparams.p,
    sparams.r,
    sparams.dklen
  );
  const mac = keccak256(
    bufferToHex(
      Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), sparams.ciphertext])
    )
  );
  if (mac !== sparams.mac)
    throw new Error(Errors.OtherErrors.WrongPassword);
  const decipher = createDecipheriv(
    sparams.cipher,
    derivedKey.slice(0, 16),
    sparams.iv
  );
  return runCipherBuffer(decipher, sparams.ciphertext);
};

// src/memory-storage.ts
var MemoryStorage = class {
  constructor() {
    this.storage = {};
  }
  async get(key) {
    return this.storage[key] ? { [key]: this.storage[key] } : {};
  }
  async set(items) {
    Object.keys(items).forEach((key) => {
      this.storage[key] = items[key];
    });
  }
  async remove(key) {
    delete this.storage[key];
  }
  async clear() {
    this.storage = {};
  }
  async getWholeStorage() {
    return this.storage;
  }
};
var memory_storage_default = MemoryStorage;

// src/index.ts
var bufferToHex = (buf, nozerox = false) => nozerox ? Buffer.from(buf).toString("hex") : `0x${Buffer.from(buf).toString("hex")}`;
var hexToBuffer = (hex) => Buffer.from(
  stripHexPrefix(hex).length % 2 === 1 ? `0${stripHexPrefix(hex)}` : stripHexPrefix(hex),
  "hex"
);
export {
  memory_storage_default as MemoryStorage,
  bigIntToBuffer,
  bigIntToHex,
  bufferToHex,
  bytesToHex,
  decrypt,
  encrypt,
  hexToBuffer,
  hexToBytes,
  keccak2562 as keccak256,
  numberToHex,
  polkadotEncodeAddress,
  stripHexPrefix,
  utf8ToHex
};
