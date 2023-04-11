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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    MemoryStorage: function() {
        return memory_storage_default;
    },
    bigIntToBuffer: function() {
        return import_util.bigIntToBuffer;
    },
    bigIntToHex: function() {
        return import_util.bigIntToHex;
    },
    bufferToHex: function() {
        return bufferToHex;
    },
    bytesToHex: function() {
        return import_web3_utils3.bytesToHex;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    fromBase: function() {
        return fromBase;
    },
    hexToBuffer: function() {
        return hexToBuffer;
    },
    hexToBytes: function() {
        return import_web3_utils3.hexToBytes;
    },
    isValidDecimals: function() {
        return isValidDecimals;
    },
    keccak256: function() {
        return import_web3_utils3.keccak256;
    },
    numberToHex: function() {
        return import_web3_utils3.numberToHex;
    },
    polkadotEncodeAddress: function() {
        return import_util_crypto.encodeAddress;
    },
    stripHexPrefix: function() {
        return import_web3_utils3.stripHexPrefix;
    },
    toBase: function() {
        return toBase;
    },
    utf8ToHex: function() {
        return import_web3_utils3.utf8ToHex;
    }
});
module.exports = __toCommonJS(src_exports);
var import_web3_utils3 = require("web3-utils");
var import_util = require("@ethereumjs/util");
var import_util_crypto = require("@polkadot/util-crypto");
// src/encrypt.ts
var import_crypto = require("crypto");
var import_scrypt = require("ethereum-cryptography/scrypt");
var import_web3_utils = require("web3-utils");
var import_types = require("@yetiwallet/types");
var scryptParams = {
    cipher: "aes-128-ctr",
    kdf: "scrypt",
    dklen: 32,
    n: 262144,
    r: 8,
    p: 1
};
var runCipherBuffer = function(cipher, data) {
    return Buffer.concat([
        cipher.update(data),
        cipher.final()
    ]);
};
var encrypt = function() {
    var _ref = _asyncToGenerator(function(msg, password) {
        var sparams, derivedKey, cipher, ciphertext, mac;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sparams = _objectSpread({}, {
                        salt: (0, import_crypto.randomBytes)(32),
                        iv: (0, import_crypto.randomBytes)(16)
                    }, scryptParams);
                    return [
                        4,
                        (0, import_scrypt.scrypt)(Buffer.from(password), sparams.salt, sparams.n, sparams.p, sparams.r, sparams.dklen)
                    ];
                case 1:
                    derivedKey = _state.sent();
                    cipher = (0, import_crypto.createCipheriv)(sparams.cipher, derivedKey.slice(0, 16), sparams.iv);
                    ciphertext = runCipherBuffer(cipher, msg);
                    mac = (0, import_web3_utils.keccak256)(bufferToHex(Buffer.concat([
                        Buffer.from(derivedKey.slice(16, 32)),
                        Buffer.from(ciphertext)
                    ])));
                    return [
                        2,
                        {
                            ciphertext: bufferToHex(ciphertext),
                            salt: bufferToHex(sparams.salt),
                            iv: bufferToHex(sparams.iv),
                            version: 1,
                            mac: mac
                        }
                    ];
            }
        });
    });
    return function encrypt(msg, password) {
        return _ref.apply(this, arguments);
    };
}();
var decrypt = function() {
    var _ref = _asyncToGenerator(function(encryptedData, password) {
        var sparams, derivedKey, mac, decipher;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sparams = _objectSpread({}, {
                        ciphertext: hexToBuffer(encryptedData.ciphertext),
                        salt: hexToBuffer(encryptedData.salt),
                        iv: hexToBuffer(encryptedData.iv),
                        version: encryptedData.version,
                        mac: encryptedData.mac
                    }, scryptParams);
                    return [
                        4,
                        (0, import_scrypt.scrypt)(Buffer.from(password), sparams.salt, sparams.n, sparams.p, sparams.r, sparams.dklen)
                    ];
                case 1:
                    derivedKey = _state.sent();
                    mac = (0, import_web3_utils.keccak256)(bufferToHex(Buffer.concat([
                        Buffer.from(derivedKey.slice(16, 32)),
                        sparams.ciphertext
                    ])));
                    if (mac !== sparams.mac) throw new Error(import_types.Errors.OtherErrors.WrongPassword);
                    decipher = (0, import_crypto.createDecipheriv)(sparams.cipher, derivedKey.slice(0, 16), sparams.iv);
                    return [
                        2,
                        runCipherBuffer(decipher, sparams.ciphertext)
                    ];
            }
        });
    });
    return function decrypt(encryptedData, password) {
        return _ref.apply(this, arguments);
    };
}();
// src/memory-storage.ts
var MemoryStorage = /*#__PURE__*/ function() {
    "use strict";
    function MemoryStorage() {
        _classCallCheck(this, MemoryStorage);
        this.storage = {};
    }
    _createClass(MemoryStorage, [
        {
            key: "get",
            value: function get(key) {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.storage[key] ? _defineProperty({}, key, _this.storage[key]) : {}
                        ];
                    });
                })();
            }
        },
        {
            key: "set",
            value: function set(items) {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        Object.keys(items).forEach(function(key) {
                            _this.storage[key] = items[key];
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "remove",
            value: function remove(key) {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        delete _this.storage[key];
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        _this.storage = {};
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "getWholeStorage",
            value: function getWholeStorage() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.storage
                        ];
                    });
                })();
            }
        }
    ]);
    return MemoryStorage;
}();
var memory_storage_default = MemoryStorage;
// src/units.ts
var import_web3_utils2 = require("web3-utils");
var zero = (0, import_web3_utils2.toBN)(0);
var negative1 = (0, import_web3_utils2.toBN)(-1);
var getValueOfUnit = function(decimals) {
    return (0, import_web3_utils2.toBN)(10).pow((0, import_web3_utils2.toBN)(decimals));
};
var numberToString = function(arg) {
    if (typeof arg === "string") {
        if (!arg.match(/^-?[0-9.]+$/)) {
            throw new Error("while converting number to string, invalid number value '".concat(arg, "', should be a number matching (^-?[0-9.]+)."));
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
    throw new Error("while converting number to string, invalid number value '".concat(arg, "' type ").concat(typeof arg === "undefined" ? "undefined" : _typeof(arg), "."));
};
var fromBase = function(weiInput, decimals, optionsInput) {
    var wei = (0, import_web3_utils2.toBN)(weiInput);
    var negative = wei.lt(zero);
    var base = getValueOfUnit(decimals);
    var baseLength = base.toString().length - 1 || 1;
    var options = optionsInput || {};
    if (negative) {
        wei = wei.mul(negative1);
    }
    var fraction = wei.mod(base).toString(10);
    while(fraction.length < baseLength){
        fraction = "0".concat(fraction);
    }
    if (!options.pad) {
        fraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    }
    var whole = wei.div(base).toString(10);
    if (options.commify) {
        whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var value = "".concat(whole).concat(fraction === "0" ? "" : ".".concat(fraction));
    if (negative) {
        value = "-".concat(value);
    }
    return value;
};
var toBase = function(etherInput, decimals) {
    var ether = numberToString(etherInput);
    var base = getValueOfUnit(decimals);
    var baseLength = base.toString().length - 1 || 1;
    var negative = ether.substring(0, 1) === "-";
    if (negative) {
        ether = ether.substring(1);
    }
    if (ether === ".") {
        throw new Error("[ethjs-unit] while converting number ".concat(etherInput, " to wei, invalid value"));
    }
    var comps = ether.split(".");
    if (comps.length > 2) {
        throw new Error("[ethjs-unit] while converting number ".concat(etherInput, " to wei,  too many decimal points"));
    }
    var whole = comps[0];
    var fraction = comps[1];
    if (!whole) {
        whole = "0";
    }
    if (!fraction) {
        fraction = "0";
    }
    if (fraction.length > baseLength) {
        throw new Error("[ethjs-unit] while converting number ".concat(etherInput, " to wei, too many decimal places"));
    }
    while(fraction.length < baseLength){
        fraction += "0";
    }
    whole = (0, import_web3_utils2.toBN)(whole);
    fraction = (0, import_web3_utils2.toBN)(fraction);
    var wei = whole.mul(base).add(fraction);
    if (negative) {
        wei = wei.mul(negative1);
    }
    return wei.toString();
};
var isValidDecimals = function(amount, decimals) {
    var _amount_split_;
    var numDecimals = (_amount_split_ = amount.split(".")[1]) === null || _amount_split_ === void 0 ? void 0 : _amount_split_.length;
    if (numDecimals && numDecimals > decimals) {
        return false;
    }
    return true;
};
// src/index.ts
var bufferToHex = function(buf) {
    var nozerox = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return nozerox ? Buffer.from(buf).toString("hex") : "0x".concat(Buffer.from(buf).toString("hex"));
};
var hexToBuffer = function(hex) {
    return Buffer.from((0, import_web3_utils3.stripHexPrefix)(hex).length % 2 === 1 ? "0".concat((0, import_web3_utils3.stripHexPrefix)(hex)) : (0, import_web3_utils3.stripHexPrefix)(hex), "hex");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    MemoryStorage: MemoryStorage,
    bigIntToBuffer: bigIntToBuffer,
    bigIntToHex: bigIntToHex,
    bufferToHex: bufferToHex,
    bytesToHex: bytesToHex,
    decrypt: decrypt,
    encrypt: encrypt,
    fromBase: fromBase,
    hexToBuffer: hexToBuffer,
    hexToBytes: hexToBytes,
    isValidDecimals: isValidDecimals,
    keccak256: keccak256,
    numberToHex: numberToHex,
    polkadotEncodeAddress: polkadotEncodeAddress,
    stripHexPrefix: stripHexPrefix,
    toBase: toBase,
    utf8ToHex: utf8ToHex
});
