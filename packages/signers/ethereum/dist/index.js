function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// ../../types/dist/index.js
var require_dist = __commonJS({
    "../../types/dist/index.js": function(exports, module2) {
        var __defProp2 = Object.defineProperty;
        var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames2 = Object.getOwnPropertyNames;
        var __hasOwnProp2 = Object.prototype.hasOwnProperty;
        var __export2 = function __export2(target, all) {
            for(var name in all)__defProp2(target, name, {
                get: all[name],
                enumerable: true
            });
        };
        var __copyProps2 = function __copyProps2(to, from, except, desc) {
            if (from && typeof from === "object" || typeof from === "function") {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
                try {
                    var _loop = function _loop() {
                        var key = _step.value;
                        if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
                            get: function get() {
                                return from[key];
                            },
                            enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
                        });
                    };
                    for(var _iterator = __getOwnPropNames2(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            return to;
        };
        var __toCommonJS2 = function __toCommonJS2(mod) {
            return __copyProps2(__defProp2({}, "__esModule", {
                value: true
            }), mod);
        };
        var src_exports2 = {};
        __export2(src_exports2, {
            CoingeckoPlatform: function CoingeckoPlatform1() {
                return CoingeckoPlatform;
            },
            Errors: function Errors() {
                return Errors2;
            },
            HWwalletCapabilities: function HWwalletCapabilities1() {
                return HWwalletCapabilities;
            },
            HWwalletType: function HWwalletType1() {
                return HWwalletType;
            },
            NetworkNames: function NetworkNames1() {
                return NetworkNames;
            },
            SignerType: function SignerType1() {
                return SignerType;
            },
            WalletType: function WalletType1() {
                return WalletType;
            }
        });
        module2.exports = __toCommonJS2(src_exports2);
        var NetworkNames = /* @__PURE__ */ function(NetworkNames2) {
            NetworkNames2["Ethereum"] = "ETH";
            NetworkNames2["Okc"] = "OKT";
            NetworkNames2["Binance"] = "BNB";
            NetworkNames2["Bitindi"] = "BNI";
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
            NetworkNames2["TomoChain"] = "TOMO";
            NetworkNames2["ZkSync"] = "zkSync";
            NetworkNames2["SkaleEuropa"] = "skaleEUROPA";
            NetworkNames2["SkaleBlockBrawlers"] = "skaleBRAWL";
            NetworkNames2["SkaleCalypso"] = "skaleCALYPSO";
            NetworkNames2["SkaleCryptoBlades"] = "skaleCRYPTOBLADES";
            NetworkNames2["SkaleCryptoColosseum"] = "skaleROME";
            NetworkNames2["SkaleExorde"] = "skaleEXORDE";
            NetworkNames2["SkaleNebula"] = "skaleNEBULA";
            NetworkNames2["SkaleRazor"] = "skaleRAZOR";
            NetworkNames2["SkaleTitan"] = "skaleTITAN";
            NetworkNames2["SkaleChaos"] = "skaleCHAOS";
            NetworkNames2["OntologyEVM"] = "ontologyEVM";
            NetworkNames2["Arbitrum"] = "ARB";
            NetworkNames2["Gnosis"] = "GNO";
            NetworkNames2["Avalanche"] = "AVAX";
            NetworkNames2["Fantom"] = "FTM";
            NetworkNames2["Klaytn"] = "KLAY";
            NetworkNames2["Aurora"] = "AURORA";
            NetworkNames2["PuppyNet"] = "puppyNet";
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
            CoingeckoPlatform2["Okc"] = "okex-chain";
            CoingeckoPlatform2["Astar"] = "astar";
            CoingeckoPlatform2["Shiden"] = "shiden network";
            CoingeckoPlatform2["Optimism"] = "optimistic-ethereum";
            CoingeckoPlatform2["Canto"] = "canto";
            CoingeckoPlatform2["Bifrost"] = "bifrost-native-coin";
            CoingeckoPlatform2["Edgeware"] = "edgeware";
            CoingeckoPlatform2["EdgeEVM"] = "edgeware";
            CoingeckoPlatform2["TomoChain"] = "tomochain";
            CoingeckoPlatform2["SKALE"] = "skale";
            CoingeckoPlatform2["OntologyEVM"] = "ontology";
            CoingeckoPlatform2["Arbitrum"] = "arbitrum-one";
            CoingeckoPlatform2["Gnosis"] = "xdai";
            CoingeckoPlatform2["Avalanche"] = "avalanche";
            CoingeckoPlatform2["Fantom"] = "avalanche";
            CoingeckoPlatform2["Klaytn"] = "klay-token";
            CoingeckoPlatform2["Aurora"] = "aurora";
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
        var SignerType = /* @__PURE__ */ function(SignerType2) {
            SignerType2["ecdsa"] = "ecdsa";
            SignerType2["ed25519"] = "ed25519";
            SignerType2["sr25519"] = "sr25519";
            SignerType2["secp256k1"] = "secp256k1";
            SignerType2["secp256k1btc"] = "secp256k1-btc";
            return SignerType2;
        }(SignerType || {});
        var Errors2 = {
            SigningErrors: SigningErrors,
            KeyringErrors: KeyringErrors,
            OtherErrors: OtherErrors
        };
    }
});
// src/index.ts
var src_exports = {};
__export(src_exports, {
    default: function() {
        return src_default;
    }
});
module.exports = __toCommonJS(src_exports);
var import_ethereumjs_util = require("ethereumjs-util");
var import_bip39 = require("bip39");
var import_types = __toESM(require_dist());
var import_utils2 = require("@yetiwallet/utils");
var import_hdkey = __toESM(require("hdkey"));
var import_tweetnacl2 = require("tweetnacl");
var import_tweetnacl_util2 = require("tweetnacl-util");
// src/utils.ts
var import_utils = require("@yetiwallet/utils");
var import_tweetnacl_util = require("tweetnacl-util");
var import_tweetnacl = require("tweetnacl");
var naclDecodeHex = function(msgHex) {
    return (0, import_tweetnacl_util.decodeBase64)((0, import_utils.hexToBuffer)(msgHex).toString("base64"));
};
var encryptedDataStringToJson = function(strData) {
    var buf = (0, import_utils.hexToBuffer)(strData);
    return JSON.parse(buf.toString("utf8"));
};
var naclDecrypt = function(param) {
    var encryptedData = param.encryptedData, privateKey = param.privateKey;
    switch(encryptedData.version){
        case "x25519-xsalsa20-poly1305":
            {
                var recieverPrivateKeyUint8Array = naclDecodeHex(privateKey);
                var recieverEncryptionPrivateKey = import_tweetnacl.box.keyPair.fromSecretKey(recieverPrivateKeyUint8Array).secretKey;
                var nonce = (0, import_tweetnacl_util.decodeBase64)(encryptedData.nonce);
                var ciphertext = (0, import_tweetnacl_util.decodeBase64)(encryptedData.ciphertext);
                var ephemPublicKey = (0, import_tweetnacl_util.decodeBase64)(encryptedData.ephemPublicKey);
                var decryptedMessage = import_tweetnacl.box.open(ciphertext, nonce, ephemPublicKey, recieverEncryptionPrivateKey);
                var output;
                try {
                    output = (0, import_tweetnacl_util.encodeUTF8)(decryptedMessage);
                    return output;
                } catch (err) {
                    throw new Error("Decryption failed.");
                }
            }
        default:
            throw new Error("Encryption type/version not supported.");
    }
};
// src/index.ts
var Signer = /*#__PURE__*/ function() {
    "use strict";
    function Signer() {
        _classCallCheck(this, Signer);
    }
    _createClass(Signer, [
        {
            key: "generate",
            value: function generate(mnemonic) {
                var derivationPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
                return _asyncToGenerator(function() {
                    var seed, hdkey, key;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0, import_bip39.mnemonicToSeed)(mnemonic)
                                ];
                            case 1:
                                seed = _state.sent();
                                hdkey = import_hdkey.default.fromMasterSeed(seed);
                                key = hdkey.derive(derivationPath);
                                return [
                                    2,
                                    {
                                        address: (0, import_utils2.bufferToHex)((0, import_ethereumjs_util.privateToAddress)(key.privateKey)),
                                        privateKey: (0, import_utils2.bufferToHex)(key.privateKey),
                                        publicKey: (0, import_utils2.bufferToHex)((0, import_ethereumjs_util.privateToPublic)(key.privateKey))
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "verify",
            value: function verify(msgHash, sig, publicKey) {
                return _asyncToGenerator(function() {
                    var sigdecoded, rpubkey;
                    return __generator(this, function(_state) {
                        sigdecoded = (0, import_ethereumjs_util.fromRpcSig)(sig);
                        rpubkey = (0, import_ethereumjs_util.ecrecover)((0, import_utils2.hexToBuffer)(msgHash), sigdecoded.v, sigdecoded.r, sigdecoded.s);
                        return [
                            2,
                            (0, import_utils2.bufferToHex)(rpubkey) === publicKey
                        ];
                    });
                })();
            }
        },
        {
            key: "sign",
            value: function sign(msgHash, keyPair) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var msgHashBuffer, privateKeyBuffer, signature, rpcSig;
                    return __generator(this, function(_state) {
                        msgHashBuffer = (0, import_utils2.hexToBuffer)(msgHash);
                        privateKeyBuffer = (0, import_utils2.hexToBuffer)(keyPair.privateKey);
                        signature = (0, import_ethereumjs_util.ecsign)(msgHashBuffer, privateKeyBuffer);
                        rpcSig = (0, import_ethereumjs_util.toRpcSig)(signature.v, signature.r, signature.s);
                        if (!_this.verify((0, import_utils2.bufferToHex)(msgHashBuffer), rpcSig, keyPair.publicKey)) {
                            throw new Error(import_types.Errors.SigningErrors.UnableToVerify);
                        }
                        return [
                            2,
                            (0, import_ethereumjs_util.toRpcSig)(signature.v, signature.r, signature.s)
                        ];
                    });
                })();
            }
        },
        {
            key: "getEncryptionPublicKey",
            value: function getEncryptionPublicKey(keyPair) {
                return _asyncToGenerator(function() {
                    var privateKeyUint8Array, encryptionPublicKey;
                    return __generator(this, function(_state) {
                        privateKeyUint8Array = naclDecodeHex(keyPair.privateKey);
                        encryptionPublicKey = import_tweetnacl2.box.keyPair.fromSecretKey(privateKeyUint8Array).publicKey;
                        return [
                            2,
                            (0, import_tweetnacl_util2.encodeBase64)(encryptionPublicKey)
                        ];
                    });
                })();
            }
        },
        {
            key: "decrypt",
            value: function decrypt(encryptedDataStr, keyPair) {
                return _asyncToGenerator(function() {
                    var encryptedData;
                    return __generator(this, function(_state) {
                        encryptedData = encryptedDataStringToJson(encryptedDataStr);
                        return [
                            2,
                            naclDecrypt({
                                encryptedData: encryptedData,
                                privateKey: keyPair.privateKey
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return Signer;
}();
var src_default = Signer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
