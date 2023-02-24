var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../types/dist/index.js
var require_dist = __commonJS({
  "../../types/dist/index.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = function(target, all) {
      for (var name in all)
        __defProp2(target, name, {
          get: all[name],
          enumerable: true
        });
    };
    var __copyProps2 = function(to, from, except, desc) {
      if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
        try {
          var _loop = function() {
            var key = _step.value;
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, {
                get: function() {
                  return from[key];
                },
                enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
              });
          };
          for (var _iterator = __getOwnPropNames2(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)
            _loop();
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return to;
    };
    var __toCommonJS = function(mod) {
      return __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
    };
    var src_exports = {};
    __export(src_exports, {
      CoingeckoPlatform: function() {
        return CoingeckoPlatform;
      },
      Errors: function() {
        return Errors2;
      },
      HWwalletCapabilities: function() {
        return HWwalletCapabilities;
      },
      HWwalletType: function() {
        return HWwalletType;
      },
      NetworkNames: function() {
        return NetworkNames;
      },
      SignerType: function() {
        return SignerType2;
      },
      WalletType: function() {
        return WalletType;
      }
    });
    module.exports = __toCommonJS(src_exports);
    var NetworkNames = /* @__PURE__ */ function(NetworkNames2) {
      NetworkNames2["Ethereum"] = "ETH";
      NetworkNames2["Okc"] = "OKT";
      NetworkNames2["Binance"] = "BNB";
      NetworkNames2["EthereumClassic"] = "ETC";
      NetworkNames2["Goerli"] = "GOERLI";
      NetworkNames2["Kovan"] = "KOV";
      NetworkNames2["Matic"] = "MATIC";
      NetworkNames2["Moonbeam"] = "GLMR";
      NetworkNames2["Moonriver"] = "MOVR";
      NetworkNames2["Rinkeby"] = "RIN";
      NetworkNames2["Ropsten"] = "ROP";
      NetworkNames2["Rootstock"] = "Rootstock";
      NetworkNames2["Acala"] = "ACA";
      NetworkNames2["Karura"] = "KAR";
      NetworkNames2["KaruraEVM"] = "evmKAR";
      NetworkNames2["Kusama"] = "KSM";
      NetworkNames2["Polkadot"] = "DOT";
      NetworkNames2["Westend"] = "WND";
      NetworkNames2["Bitcoin"] = "BTC";
      NetworkNames2["BitcoinTest"] = "BTCTest";
      NetworkNames2["Astar"] = "ASTR";
      NetworkNames2["Shiden"] = "SDN";
      NetworkNames2["ShidenEVM"] = "SDN EVM";
      NetworkNames2["AstarEVM"] = "ASTR EVM";
      NetworkNames2["Optimism"] = "OP";
      NetworkNames2["Canto"] = "CANTO";
      NetworkNames2["Bifrost"] = "BNC";
      NetworkNames2["BifrostKusama"] = "BNC (Kusama)";
      NetworkNames2["Edgeware"] = "EDG";
      NetworkNames2["EdgeEVM"] = "evmEDG";
      NetworkNames2["ZkSyncGoerli"] = "zkSyncGoerli";
      NetworkNames2["ZkSync"] = "zkSync";
      return NetworkNames2;
    }(NetworkNames || {});
    var CoingeckoPlatform = /* @__PURE__ */ function(CoingeckoPlatform2) {
      CoingeckoPlatform2["Ethereum"] = "ethereum";
      CoingeckoPlatform2["Binance"] = "binance-smart-chain";
      CoingeckoPlatform2["EthereumClassic"] = "ethereum-classic";
      CoingeckoPlatform2["Matic"] = "polygon-pos";
      CoingeckoPlatform2["Moonbeam"] = "moonbeam";
      CoingeckoPlatform2["Moonriver"] = "moonriver";
      CoingeckoPlatform2["Acala"] = "acala";
      CoingeckoPlatform2["Karura"] = "karura";
      CoingeckoPlatform2["KaruraEVM"] = "karura";
      CoingeckoPlatform2["Kusama"] = "kusama";
      CoingeckoPlatform2["Polkadot"] = "polkadot";
      CoingeckoPlatform2["Rootstock"] = "rootstock";
      CoingeckoPlatform2["Okc"] = "okc";
      CoingeckoPlatform2["Astar"] = "astar";
      CoingeckoPlatform2["Shiden"] = "shiden network";
      CoingeckoPlatform2["Optimism"] = "optimistic-ethereum";
      CoingeckoPlatform2["Canto"] = "canto";
      CoingeckoPlatform2["Bifrost"] = "Bifrost Native Coin";
      CoingeckoPlatform2["Edgeware"] = "edgeware";
      CoingeckoPlatform2["EdgeEVM"] = "edgeware";
      return CoingeckoPlatform2;
    }(CoingeckoPlatform || {});
    var WalletType = /* @__PURE__ */ function(WalletType2) {
      WalletType2["mnemonic"] = "mnemonic";
      WalletType2["privkey"] = "privkey";
      WalletType2["ledger"] = "ledger";
      WalletType2["trezor"] = "trezor";
      return WalletType2;
    }(WalletType || {});
    var HWwalletType = /* @__PURE__ */ function(HWwalletType2) {
      HWwalletType2["ledger"] = "ledger";
      HWwalletType2["trezor"] = "trezor";
      return HWwalletType2;
    }(HWwalletType || {});
    var HWwalletCapabilities = /* @__PURE__ */ function(HWwalletCapabilities2) {
      HWwalletCapabilities2["signMessage"] = "signMessage";
      HWwalletCapabilities2["signTx"] = "signTx";
      HWwalletCapabilities2["eip1559"] = "eip1559";
      HWwalletCapabilities2["typedMessage"] = "typedMessage";
      return HWwalletCapabilities2;
    }(HWwalletCapabilities || {});
    var SigningErrors = /* @__PURE__ */ function(SigningErrors2) {
      SigningErrors2["UnableToVerify"] = "Signing verification failed";
      SigningErrors2["NotSupported"] = "Sign type not supported";
      return SigningErrors2;
    }(SigningErrors || {});
    var OtherErrors = /* @__PURE__ */ function(OtherErrors2) {
      OtherErrors2["WrongPassword"] = "Key derivation failed - possibly wrong passphrase";
      return OtherErrors2;
    }(OtherErrors || {});
    var KeyringErrors = /* @__PURE__ */ function(KeyringErrors2) {
      KeyringErrors2["MnemonicExists"] = "Mnemonic already exists";
      KeyringErrors2["NotInitialized"] = "Key ring not initialized";
      KeyringErrors2["NoPassword"] = "No password set";
      KeyringErrors2["AddressExists"] = "Address already exists";
      KeyringErrors2["AddressDoesntExists"] = "Address doesnt exists in the keyring";
      KeyringErrors2["EnckryptDecryptNotSupported"] = "This Keytype doesnt support encrypt and decrypt";
      KeyringErrors2["CannotUseKeyring"] = "Cannot use keyring for HW wallets";
      KeyringErrors2["Locked"] = "Keyring locked";
      KeyringErrors2["CantRemoveMnemonicAddress"] = "Cannot remove mnemonic addresses";
      return KeyringErrors2;
    }(KeyringErrors || {});
    var SignerType2 = /* @__PURE__ */ function(SignerType22) {
      SignerType22["ecdsa"] = "ecdsa";
      SignerType22["ed25519"] = "ed25519";
      SignerType22["sr25519"] = "sr25519";
      SignerType22["secp256k1"] = "secp256k1";
      SignerType22["secp256k1btc"] = "secp256k1-btc";
      return SignerType22;
    }(SignerType2 || {});
    var Errors2 = {
      SigningErrors,
      KeyringErrors,
      OtherErrors
    };
  }
});

// src/index.ts
var import_types = __toESM(require_dist());
import { bufferToHex, hexToBuffer } from "@yetiwallet/utils";
import { waitReady } from "@polkadot/wasm-crypto";
import {
  sr25519PairFromSeed,
  ed25519PairFromSeed,
  secp256k1PairFromSeed,
  ed25519Sign,
  secp256k1Sign,
  sr25519Sign,
  signatureVerify,
  keyExtractSuri,
  keyFromPath,
  mnemonicToMiniSecret,
  encodeAddress,
  blake2AsU8a
} from "@polkadot/util-crypto";
import assert from "assert";
var SUBSTRATE_PREFIX = 42;
var Signer = class {
  constructor(signer) {
    this.type = signer;
  }
  generate(_0) {
    return __async(this, arguments, function* (mnemonic, derivationPath = "", options = { onlyJS: false }) {
      yield waitReady();
      const { path, phrase, password } = keyExtractSuri(
        `${mnemonic}${derivationPath}`
      );
      const seed = mnemonicToMiniSecret(phrase, password, options.onlyJS);
      let pair;
      switch (this.type) {
        case import_types.SignerType.ecdsa:
          pair = keyFromPath(
            secp256k1PairFromSeed(seed, options.onlyJS),
            path,
            "ecdsa"
          );
          break;
        case import_types.SignerType.ed25519:
          pair = keyFromPath(
            ed25519PairFromSeed(seed, options.onlyJS),
            path,
            "ed25519"
          );
          break;
        case import_types.SignerType.sr25519:
          pair = keyFromPath(sr25519PairFromSeed(seed), path, "sr25519");
          break;
        default:
          throw new Error(import_types.Errors.SigningErrors.NotSupported);
      }
      return {
        address: this.type === import_types.SignerType.ecdsa ? encodeAddress(blake2AsU8a(pair.publicKey), SUBSTRATE_PREFIX) : encodeAddress(pair.publicKey, SUBSTRATE_PREFIX),
        privateKey: bufferToHex(pair.secretKey),
        publicKey: bufferToHex(pair.publicKey)
      };
    });
  }
  verify(msgHash, sig, publicKey) {
    return __async(this, null, function* () {
      yield waitReady();
      const rpubkey = signatureVerify(msgHash, sig, publicKey);
      return rpubkey.isValid;
    });
  }
  sign(_0, _1) {
    return __async(this, arguments, function* (msgHash, keyPair, options = { onlyJS: false }) {
      const msgHashBuffer = hexToBuffer(msgHash);
      let sig;
      const pair = {
        secretKey: hexToBuffer(keyPair.privateKey),
        publicKey: hexToBuffer(keyPair.publicKey)
      };
      yield waitReady();
      switch (this.type) {
        case import_types.SignerType.ecdsa:
          sig = Buffer.from(
            secp256k1Sign(msgHashBuffer, pair, "blake2", options.onlyJS)
          );
          assert(
            this.verify(
              bufferToHex(msgHashBuffer),
              bufferToHex(sig),
              bufferToHex(pair.publicKey)
            ),
            import_types.Errors.SigningErrors.UnableToVerify
          );
          return bufferToHex(sig);
        case import_types.SignerType.ed25519:
          sig = Buffer.from(ed25519Sign(msgHashBuffer, pair, options.onlyJS));
          assert(
            this.verify(
              bufferToHex(msgHashBuffer),
              bufferToHex(sig),
              bufferToHex(pair.publicKey)
            ),
            import_types.Errors.SigningErrors.UnableToVerify
          );
          return bufferToHex(sig);
        case import_types.SignerType.sr25519:
          sig = Buffer.from(sr25519Sign(msgHashBuffer, pair));
          assert(
            this.verify(
              bufferToHex(msgHashBuffer),
              bufferToHex(sig),
              bufferToHex(pair.publicKey)
            ),
            import_types.Errors.SigningErrors.UnableToVerify
          );
          return bufferToHex(sig);
        default:
          throw new Error(import_types.Errors.SigningErrors.NotSupported);
      }
    });
  }
};
var src_default = Signer;
var export_SignerType = import_types.SignerType;
export {
  export_SignerType as SignerType,
  src_default as default
};
