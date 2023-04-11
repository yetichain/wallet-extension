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

// src/units.ts
import { toBN } from "web3-utils";
var zero = toBN(0);
var negative1 = toBN(-1);
var getValueOfUnit = (decimals) => toBN(10).pow(toBN(decimals));
var numberToString = (arg) => {
  if (typeof arg === "string") {
    if (!arg.match(/^-?[0-9.]+$/)) {
      throw new Error(
        `while converting number to string, invalid number value '${arg}', should be a number matching (^-?[0-9.]+).`
      );
    }
    return arg;
  }
  if (typeof arg === "number") {
    return String(arg);
  }
  if (typeof arg === "object" && arg.toString && (arg.toTwos || arg.dividedToIntegerBy)) {
    if (arg.toPrecision) {
      return String(arg.toPrecision());
    }
    return arg.toString(10);
  }
  throw new Error(
    `while converting number to string, invalid number value '${arg}' type ${typeof arg}.`
  );
};
var fromBase = (weiInput, decimals, optionsInput) => {
  let wei = toBN(weiInput);
  const negative = wei.lt(zero);
  const base = getValueOfUnit(decimals);
  const baseLength = base.toString().length - 1 || 1;
  const options = optionsInput || {};
  if (negative) {
    wei = wei.mul(negative1);
  }
  let fraction = wei.mod(base).toString(10);
  while (fraction.length < baseLength) {
    fraction = `0${fraction}`;
  }
  if (!options.pad) {
    fraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  }
  let whole = wei.div(base).toString(10);
  if (options.commify) {
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let value = `${whole}${fraction === "0" ? "" : `.${fraction}`}`;
  if (negative) {
    value = `-${value}`;
  }
  return value;
};
var toBase = (etherInput, decimals) => {
  let ether = numberToString(etherInput);
  const base = getValueOfUnit(decimals);
  const baseLength = base.toString().length - 1 || 1;
  const negative = ether.substring(0, 1) === "-";
  if (negative) {
    ether = ether.substring(1);
  }
  if (ether === ".") {
    throw new Error(
      `[ethjs-unit] while converting number ${etherInput} to wei, invalid value`
    );
  }
  const comps = ether.split(".");
  if (comps.length > 2) {
    throw new Error(
      `[ethjs-unit] while converting number ${etherInput} to wei,  too many decimal points`
    );
  }
  let whole = comps[0];
  let fraction = comps[1];
  if (!whole) {
    whole = "0";
  }
  if (!fraction) {
    fraction = "0";
  }
  if (fraction.length > baseLength) {
    throw new Error(
      `[ethjs-unit] while converting number ${etherInput} to wei, too many decimal places`
    );
  }
  while (fraction.length < baseLength) {
    fraction += "0";
  }
  whole = toBN(whole);
  fraction = toBN(fraction);
  let wei = whole.mul(base).add(fraction);
  if (negative) {
    wei = wei.mul(negative1);
  }
  return wei.toString();
};
var isValidDecimals = (amount, decimals) => {
  const numDecimals = amount.split(".")[1]?.length;
  if (numDecimals && numDecimals > decimals) {
    return false;
  }
  return true;
};

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
  fromBase,
  hexToBuffer,
  hexToBytes,
  isValidDecimals,
  keccak2562 as keccak256,
  numberToHex,
  polkadotEncodeAddress,
  stripHexPrefix,
  toBase,
  utf8ToHex
};
