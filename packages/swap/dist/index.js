function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
// src/index.ts
var src_exports = {};
__export(src_exports, {
    NetworkType: function() {
        return NetworkType;
    },
    SupportedNetworkName: function() {
        return SupportedNetworkName;
    },
    SwapToken: function() {
        return swapToken_default;
    },
    TransactionStatus: function() {
        return TransactionStatus;
    },
    TransactionType: function() {
        return TransactionType;
    },
    WalletIdentifier: function() {
        return WalletIdentifier;
    },
    default: function() {
        return src_default;
    },
    getNetworkInfoByName: function() {
        return getNetworkInfoByName;
    },
    getSupportedNetworks: function() {
        return getSupportedNetworks;
    },
    isSupportedNetwork: function() {
        return isSupportedNetwork;
    },
    sortByRank: function() {
        return sortByRank;
    },
    sortNativeToFront: function() {
        return sortNativeToFront;
    }
});
module.exports = __toCommonJS(src_exports);
var import_node_fetch3 = __toESM(require("node-fetch"));
var import_lodash = require("lodash");
var import_eventemitter3 = __toESM(require("eventemitter3"));
// src/configs.ts
var import_types2 = require("@yetiwallet/types");
var import_web3_utils = require("web3-utils");
// src/types/index.ts
var import_types = require("@yetiwallet/types");
var SupportedNetworkName = function(SupportedNetworkName3) {
    SupportedNetworkName3[SupportedNetworkName3["Ethereum"] = import_types.NetworkNames.Ethereum] = "Ethereum";
    SupportedNetworkName3[SupportedNetworkName3["Binance"] = import_types.NetworkNames.Binance] = "Binance";
    SupportedNetworkName3[SupportedNetworkName3["Bitindi"] = import_types.NetworkNames.Bitindi] = "Bitindi";
    SupportedNetworkName3[SupportedNetworkName3["Matic"] = import_types.NetworkNames.Matic] = "Matic";
    SupportedNetworkName3[SupportedNetworkName3["Optimism"] = import_types.NetworkNames.Optimism] = "Optimism";
    SupportedNetworkName3[SupportedNetworkName3["Polkadot"] = import_types.NetworkNames.Polkadot] = "Polkadot";
    SupportedNetworkName3[SupportedNetworkName3["Kusama"] = import_types.NetworkNames.Kusama] = "Kusama";
    SupportedNetworkName3[SupportedNetworkName3["Bitcoin"] = import_types.NetworkNames.Bitcoin] = "Bitcoin";
    SupportedNetworkName3[SupportedNetworkName3["EthereumClassic"] = import_types.NetworkNames.EthereumClassic] = "EthereumClassic";
    SupportedNetworkName3[SupportedNetworkName3["Moonbeam"] = import_types.NetworkNames.Moonbeam] = "Moonbeam";
    SupportedNetworkName3[SupportedNetworkName3["Arbitrum"] = import_types.NetworkNames.Arbitrum] = "Arbitrum";
    SupportedNetworkName3[SupportedNetworkName3["Gnosis"] = import_types.NetworkNames.Gnosis] = "Gnosis";
    SupportedNetworkName3[SupportedNetworkName3["Avalanche"] = import_types.NetworkNames.Avalanche] = "Avalanche";
    SupportedNetworkName3[SupportedNetworkName3["Fantom"] = import_types.NetworkNames.Fantom] = "Fantom";
    SupportedNetworkName3[SupportedNetworkName3["Klaytn"] = import_types.NetworkNames.Klaytn] = "Klaytn";
    SupportedNetworkName3[SupportedNetworkName3["Aurora"] = import_types.NetworkNames.Aurora] = "Aurora";
    return SupportedNetworkName3;
}(SupportedNetworkName || {});
var NetworkType = /* @__PURE__ */ function(NetworkType2) {
    NetworkType2["EVM"] = "evm";
    NetworkType2["Substrate"] = "substrate";
    NetworkType2["Bitcoin"] = "bitcoin";
    return NetworkType2;
}(NetworkType || {});
var WalletIdentifier = /* @__PURE__ */ function(WalletIdentifier2) {
    WalletIdentifier2["yeti"] = "yeti";
    WalletIdentifier2["mew"] = "mew";
    return WalletIdentifier2;
}(WalletIdentifier || {});
var TransactionStatus = /* @__PURE__ */ function(TransactionStatus2) {
    TransactionStatus2["pending"] = "pending";
    TransactionStatus2["failed"] = "failed";
    TransactionStatus2["success"] = "success";
    return TransactionStatus2;
}(TransactionStatus || {});
var TransactionType = /* @__PURE__ */ function(TransactionType2) {
    TransactionType2["evm"] = "evm";
    TransactionType2["generic"] = "generic";
    return TransactionType2;
}(TransactionType || {});
var ProviderClass = function ProviderClass(_web3eth, network) {
    "use strict";
    _classCallCheck(this, ProviderClass);
    this.network = network;
};
var _obj, _obj1, _obj2, _obj3;
// src/configs.ts
var FEE_CONFIGS = (_obj3 = {}, _defineProperty(_obj3, "oneInch" /* oneInch */ , (_obj = {}, _defineProperty(_obj, "yeti" /* yeti */ , {
    referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
    fee: 875e-5
}), _defineProperty(_obj, "mew" /* mew */ , {
    referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
    fee: 0.025
}), _obj)), _defineProperty(_obj3, "paraswap" /* paraswap */ , (_obj1 = {}, _defineProperty(_obj1, "yeti" /* yeti */ , {
    referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
    fee: 875e-5
}), _defineProperty(_obj1, "mew" /* mew */ , {
    referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
    fee: 0.025
}), _obj1)), _defineProperty(_obj3, "zerox" /* zerox */ , (_obj2 = {}, _defineProperty(_obj2, "yeti" /* yeti */ , {
    referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
    fee: 875e-5
}), _defineProperty(_obj2, "mew" /* mew */ , {
    referrer: "0xA4e085De64A2dFE5eAF0E811779ab15dcf26522e",
    fee: 0.025
}), _obj2)), _obj3);
var _obj4;
var TOKEN_LISTS = (_obj4 = {}, _defineProperty(_obj4, import_types2.NetworkNames.Ethereum, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Ethereum, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Binance, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Binance, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Bitindi, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Bitindi, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Matic, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Matic, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Optimism, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Optimism, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Arbitrum, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Arbitrum, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Aurora, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Aurora, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Avalanche, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Avalanche, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.EthereumClassic, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.EthereumClassic, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Fantom, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Fantom, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Moonbeam, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Moonbeam, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Gnosis, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Gnosis, ".json")), _defineProperty(_obj4, import_types2.NetworkNames.Klaytn, "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/".concat(SupportedNetworkName.Klaytn, ".json")), _obj4);
var CHANGELLY_LIST = "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/changelly.json";
var TOP_TOKEN_INFO_LIST = "https://raw.githubusercontent.com/yetichain/dynamic-data/main/swaplists/top-tokens.json";
var GAS_LIMITS = {
    approval: (0, import_web3_utils.numberToHex)(3e5),
    transferToken: (0, import_web3_utils.numberToHex)(3e5),
    swap: (0, import_web3_utils.numberToHex)(1e6)
};
var NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
var DEFAULT_SLIPPAGE = "0.5";
// src/providers/oneInch/index.ts
var import_web3_utils5 = require("web3-utils");
// src/utils/approvals.ts
var import_web3_eth = __toESM(require("web3-eth"));
var import_web3_utils2 = require("web3-utils");
// src/utils/abi/erc20.ts
var erc20_default = [
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "balance",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            },
            {
                name: "_spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];
// src/utils/approvals.ts
var TOKEN_AMOUNT_INFINITY_AND_BEYOND = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
var getAllowance = function(options) {
    var contract = new options.web3eth.Contract(erc20_default, options.contract);
    return contract.methods.allowance(options.owner, options.spender).call();
};
var getTransfer = function(options) {
    var web3Eth = new import_web3_eth.default();
    var contract = new web3Eth.Contract(erc20_default);
    return {
        from: options.from,
        data: contract.methods.transfer(options.to, options.value).encodeABI(),
        gasLimit: GAS_LIMITS.transferToken,
        to: options.contract,
        value: "0x0",
        type: "evm" /* evm */ 
    };
};
var getApproval = function(options) {
    var web3Eth = new import_web3_eth.default();
    var contract = new web3Eth.Contract(erc20_default);
    return {
        from: options.from,
        data: contract.methods.approve(options.spender, options.value).encodeABI(),
        gasLimit: GAS_LIMITS.approval,
        to: options.contract,
        value: "0x0",
        type: "evm" /* evm */ 
    };
};
var getAllowanceTransactions = function() {
    var _ref = _asyncToGenerator(function(options) {
        var transactions, approvedAmount, _;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    transactions = [];
                    _ = (0, import_web3_utils2.toBN);
                    return [
                        4,
                        getAllowance({
                            contract: options.fromToken.address,
                            owner: options.fromAddress,
                            spender: options.spender,
                            web3eth: options.web3eth
                        })
                    ];
                case 1:
                    approvedAmount = _.apply(void 0, [
                        _state.sent()
                    ]);
                    if (approvedAmount.lt(options.amount)) {
                        if (approvedAmount.eqn(0)) {
                            transactions.push(getApproval({
                                from: options.fromAddress,
                                spender: options.spender,
                                value: options.infinityApproval ? TOKEN_AMOUNT_INFINITY_AND_BEYOND : options.amount.toString(),
                                contract: options.fromToken.address
                            }));
                        } else {
                            transactions.push(getApproval({
                                from: options.fromAddress,
                                spender: options.spender,
                                value: "0",
                                contract: options.fromToken.address
                            }));
                            transactions.push(getApproval({
                                from: options.fromAddress,
                                spender: options.spender,
                                value: options.infinityApproval ? TOKEN_AMOUNT_INFINITY_AND_BEYOND : options.amount.toString(),
                                contract: options.fromToken.address
                            }));
                        }
                    }
                    return [
                        2,
                        transactions
                    ];
            }
        });
    });
    return function getAllowanceTransactions(options) {
        return _ref.apply(this, arguments);
    };
}();
// src/common/estimateGasList.ts
var import_node_fetch = __toESM(require("node-fetch"));
var import_web3_utils3 = require("web3-utils");
var _obj5;
var supportedNetworks = (_obj5 = {}, _defineProperty(_obj5, SupportedNetworkName.Ethereum, {
    url: "https://estimategas.mewapi.io/eth"
}), _defineProperty(_obj5, SupportedNetworkName.Binance, {
    url: "https://estimategas.mewapi.io/bsc"
}), _defineProperty(_obj5, SupportedNetworkName.Matic, {
    url: "https://estimategas.mewapi.io/matic"
}), _defineProperty(_obj5, SupportedNetworkName.Arbitrum, {
    url: "https://nodes.mewapi.io/rpc/arb"
}), _obj5);
var useStandardEstimate = function(transactions, network) {
    return (0, import_node_fetch.default)(supportedNetworks[network].url, {
        method: "POST",
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "eth_estimateGas",
            params: [
                transactions[0]
            ]
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        if (res.ok) return res.json();
        throw new Error("Something went wrong");
    }).then(function(json) {
        if (json.error) return {
            isError: true,
            errorMessage: json.error.message
        };
        var isApproval = transactions[0].data.startsWith("0x095ea7b3");
        var genericTx0Gas = isApproval ? (0, import_web3_utils3.toBN)(GAS_LIMITS.approval) : (0, import_web3_utils3.toBN)(GAS_LIMITS.swap);
        var tx0gas = (0, import_web3_utils3.toBN)(json.result);
        if (genericTx0Gas.gt(tx0gas)) {
            if (isApproval) {
                return {
                    result: transactions.length === 2 ? [
                        json.result,
                        GAS_LIMITS.swap
                    ] : [
                        json.result,
                        GAS_LIMITS.approval,
                        GAS_LIMITS.swap
                    ]
                };
            }
            return {
                result: [
                    json.result
                ]
            };
        }
        var multiplier = tx0gas.div(genericTx0Gas);
        if (isApproval) {
            return {
                result: transactions.length === 2 ? [
                    json.result,
                    (0, import_web3_utils3.numberToHex)((0, import_web3_utils3.toBN)(GAS_LIMITS.swap).mul(multiplier.addn(3)))
                ] : [
                    json.result,
                    (0, import_web3_utils3.numberToHex)((0, import_web3_utils3.toBN)(GAS_LIMITS.approval).mul(multiplier)),
                    (0, import_web3_utils3.numberToHex)((0, import_web3_utils3.toBN)(GAS_LIMITS.swap).mul(multiplier.addn(3)))
                ]
            };
        }
        return {
            result: [
                json.result
            ]
        };
    }).catch(function() {
        return null;
    });
};
var estimateGasList = function(transactions, network) {
    if (!Object.keys(supportedNetworks).includes(network)) return null;
    if (network === SupportedNetworkName.Arbitrum) return useStandardEstimate(transactions, network);
    var strippedTxs = transactions.map(function(tx) {
        var from = tx.from, to = tx.to, data = tx.data, value = tx.value;
        return {
            from: from,
            to: to,
            data: data,
            value: value
        };
    });
    return (0, import_node_fetch.default)(supportedNetworks[network].url, {
        method: "POST",
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "eth_estimateGasList",
            params: [
                strippedTxs
            ]
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        if (res.ok) return res.json();
        throw new Error("Something went wrong");
    }).then(function(json) {
        if (json.error) return {
            isError: true,
            errorMessage: json.error.message
        };
        return {
            result: json.result
        };
    }).catch(function() {
        return null;
    });
};
var estimateGasList_default = estimateGasList;
// src/utils/common.ts
var import_utils = require("@yetiwallet/utils");
var import_web3_utils4 = require("web3-utils");
var isPolkadotAddress = function(address, prefix) {
    try {
        return (0, import_utils.polkadotEncodeAddress)(address, prefix) === address;
    } catch (e) {
        return false;
    }
};
var isEVMAddress = function(address) {
    try {
        return (0, import_web3_utils4.isAddress)(address);
    } catch (e) {
        return false;
    }
};
var sortByRank = function(x, y) {
    if (!x.rank) x.rank = 1e7;
    if (!y.rank) y.rank = 1e7;
    return x.rank - y.rank;
};
var sortNativeToFront = function(x, y) {
    return(// eslint-disable-next-line no-nested-ternary
    x.address === NATIVE_TOKEN_ADDRESS ? -1 : y.address === NATIVE_TOKEN_ADDRESS ? 1 : 0);
};
// src/providers/oneInch/index.ts
var ONEINCH_APPROVAL_ADDRESS = "0x1111111254eeb25477b68fb85ed929f73a960582";
var _obj6;
var supportedNetworks2 = (_obj6 = {}, _defineProperty(_obj6, SupportedNetworkName.Ethereum, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "1"
}), _defineProperty(_obj6, SupportedNetworkName.Binance, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "56"
}), _defineProperty(_obj6, SupportedNetworkName.Matic, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "137"
}), _defineProperty(_obj6, SupportedNetworkName.Optimism, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "10"
}), _defineProperty(_obj6, SupportedNetworkName.Avalanche, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "43114"
}), _defineProperty(_obj6, SupportedNetworkName.Fantom, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "250"
}), _defineProperty(_obj6, SupportedNetworkName.Klaytn, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "8217"
}), _defineProperty(_obj6, SupportedNetworkName.Aurora, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "1313161554"
}), _defineProperty(_obj6, SupportedNetworkName.Gnosis, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "100"
}), _defineProperty(_obj6, SupportedNetworkName.Arbitrum, {
    approvalAddress: ONEINCH_APPROVAL_ADDRESS,
    chainId: "42161"
}), _obj6);
var BASE_URL = "https://api.1inch.io/v5.0/";
var OneInch = /*#__PURE__*/ function(ProviderClass) {
    "use strict";
    _inherits(OneInch1, ProviderClass);
    var _super = _createSuper(OneInch1);
    function OneInch1(web3eth, network) {
        _classCallCheck(this, OneInch1);
        var _this;
        _this = _super.call(this, web3eth, network);
        _this.network = network;
        _this.tokenList = [];
        _this.web3eth = web3eth;
        _this.name = "oneInch" /* oneInch */ ;
        _this.fromTokens = {};
        _this.toTokens = {};
        return _this;
    }
    _createClass(OneInch1, [
        {
            key: "init",
            value: function init(tokenList) {
                var _this = this;
                if (!OneInch.isSupported(this.network)) return;
                tokenList.forEach(function(t) {
                    _this.fromTokens[t.address] = t;
                    if (!_this.toTokens[_this.network]) _this.toTokens[_this.network] = {};
                    _this.toTokens[_this.network][t.address] = _objectSpreadProps(_objectSpread({}, t), {
                        networkInfo: {
                            name: _this.network,
                            isAddress: function(address) {
                                return Promise.resolve(isEVMAddress(address));
                            }
                        }
                    });
                });
            }
        },
        {
            key: "getFromTokens",
            value: function getFromTokens() {
                return this.fromTokens;
            }
        },
        {
            key: "getToTokens",
            value: function getToTokens() {
                return this.toTokens;
            }
        },
        {
            key: "getMinMaxAmount",
            value: function getMinMaxAmount() {
                return Promise.resolve({
                    minimumFrom: (0, import_web3_utils5.toBN)("1"),
                    maximumFrom: (0, import_web3_utils5.toBN)(TOKEN_AMOUNT_INFINITY_AND_BEYOND),
                    minimumTo: (0, import_web3_utils5.toBN)("1"),
                    maximumTo: (0, import_web3_utils5.toBN)(TOKEN_AMOUNT_INFINITY_AND_BEYOND)
                });
            }
        },
        {
            key: "getOneInchSwap",
            value: function getOneInchSwap(options, meta, accurateEstimate) {
                if (!OneInch.isSupported(options.toToken.networkInfo.name) || this.network !== options.toToken.networkInfo.name) return Promise.resolve(null);
                var feeConfig = FEE_CONFIGS[this.name][meta.walletIdentifier];
                var params = new URLSearchParams({
                    fromTokenAddress: options.fromToken.address,
                    toTokenAddress: options.toToken.address,
                    amount: options.amount.toString(),
                    fromAddress: options.fromAddress,
                    destReceiver: options.toAddress,
                    slippage: meta.slippage ? meta.slippage : DEFAULT_SLIPPAGE,
                    fee: feeConfig ? (feeConfig.fee * 100).toFixed(3) : "0",
                    referrerAddress: feeConfig ? feeConfig.referrer : "",
                    disableEstimate: "true"
                });
                var _this = this;
                return fetch("".concat(BASE_URL).concat(supportedNetworks2[this.network].chainId, "/swap?").concat(params.toString())).then(function(res) {
                    return res.json();
                }).then(function() {
                    var _ref = _asyncToGenerator(function(response) {
                        var transactions, _transactions, approvalTxs, accurateGasEstimate;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (response.error) {
                                        console.error(response.error, response.description);
                                        return [
                                            2,
                                            Promise.resolve(null)
                                        ];
                                    }
                                    transactions = [];
                                    if (!(options.fromToken.address !== NATIVE_TOKEN_ADDRESS)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        getAllowanceTransactions({
                                            infinityApproval: meta.infiniteApproval,
                                            spender: supportedNetworks2[_this.network].approvalAddress,
                                            web3eth: _this.web3eth,
                                            amount: options.amount,
                                            fromAddress: options.fromAddress,
                                            fromToken: options.fromToken
                                        })
                                    ];
                                case 1:
                                    approvalTxs = _state.sent();
                                    (_transactions = transactions).push.apply(_transactions, _toConsumableArray(approvalTxs));
                                    _state.label = 2;
                                case 2:
                                    transactions.push({
                                        from: options.fromAddress,
                                        gasLimit: GAS_LIMITS.swap,
                                        to: response.tx.to,
                                        value: (0, import_web3_utils5.numberToHex)(response.tx.value),
                                        data: response.tx.data,
                                        type: "evm" /* evm */ 
                                    });
                                    if (!accurateEstimate) return [
                                        3,
                                        4
                                    ];
                                    return [
                                        4,
                                        estimateGasList_default(transactions, _this.network)
                                    ];
                                case 3:
                                    accurateGasEstimate = _state.sent();
                                    if (accurateGasEstimate) {
                                        if (accurateGasEstimate.isError) return [
                                            2,
                                            null
                                        ];
                                        transactions.forEach(function(tx, idx) {
                                            tx.gasLimit = accurateGasEstimate.result[idx];
                                        });
                                    }
                                    _state.label = 4;
                                case 4:
                                    return [
                                        2,
                                        {
                                            transactions: transactions,
                                            toTokenAmount: (0, import_web3_utils5.toBN)(response.toTokenAmount),
                                            fromTokenAmount: (0, import_web3_utils5.toBN)(response.fromTokenAmount)
                                        }
                                    ];
                            }
                        });
                    });
                    return function(response) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        },
        {
            key: "getQuote",
            value: function getQuote(options, meta) {
                var _this = this;
                return this.getOneInchSwap(options, meta, false).then(function() {
                    var _ref = _asyncToGenerator(function(res) {
                        var response, _tmp;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!res) return [
                                        2,
                                        null
                                    ];
                                    _tmp = {
                                        fromTokenAmount: res.fromTokenAmount,
                                        toTokenAmount: res.toTokenAmount,
                                        provider: _this.name,
                                        quote: {
                                            meta: meta,
                                            options: options,
                                            provider: _this.name
                                        },
                                        totalGaslimit: res.transactions.reduce(function(total, curVal) {
                                            return total + (0, import_web3_utils5.toBN)(curVal.gasLimit).toNumber();
                                        }, 0)
                                    };
                                    return [
                                        4,
                                        _this.getMinMaxAmount()
                                    ];
                                case 1:
                                    response = (_tmp.minMax = _state.sent(), _tmp);
                                    return [
                                        2,
                                        response
                                    ];
                            }
                        });
                    });
                    return function(res) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        },
        {
            key: "getSwap",
            value: function getSwap(quote) {
                var _this = this;
                return this.getOneInchSwap(quote.options, quote.meta, true).then(function(res) {
                    if (!res) return null;
                    var feeConfig = FEE_CONFIGS[_this.name][quote.meta.walletIdentifier].fee || 0;
                    var _this1 = _this;
                    var response = {
                        fromTokenAmount: res.fromTokenAmount,
                        provider: _this.name,
                        toTokenAmount: res.toTokenAmount,
                        transactions: res.transactions,
                        slippage: quote.meta.slippage || DEFAULT_SLIPPAGE,
                        fee: feeConfig * 100,
                        getStatusObject: function() {
                            var _ref = _asyncToGenerator(function(options) {
                                return __generator(this, function(_state) {
                                    return [
                                        2,
                                        {
                                            options: options,
                                            provider: _this1.name
                                        }
                                    ];
                                });
                            });
                            return function(options) {
                                return _ref.apply(this, arguments);
                            };
                        }()
                    };
                    return response;
                });
            }
        },
        {
            key: "getStatus",
            value: function getStatus(options) {
                var _this = this;
                var promises = options.transactionHashes.map(function(hash) {
                    return _this.web3eth.getTransactionReceipt(hash);
                });
                return Promise.all(promises).then(function(receipts) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = receipts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var receipt = _step.value;
                            if (!receipt || receipt && !receipt.blockNumber) {
                                return "pending" /* pending */ ;
                            }
                            if (receipt && !receipt.status) return "failed" /* failed */ ;
                        }
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
                    return "success" /* success */ ;
                });
            }
        }
    ], [
        {
            key: "isSupported",
            value: function isSupported(network) {
                return Object.keys(supportedNetworks2).includes(network);
            }
        }
    ]);
    return OneInch1;
}(ProviderClass);
var oneInch_default = OneInch;
// src/providers/changelly/index.ts
var import_uuid = require("uuid");
var import_node_fetch2 = __toESM(require("node-fetch"));
var import_utils2 = require("@yetiwallet/utils");
var import_web3_utils6 = require("web3-utils");
var _obj7;
// src/providers/changelly/supported.ts
var supportedNetworks3 = (_obj7 = {}, _defineProperty(_obj7, SupportedNetworkName.Ethereum, {
    changellyName: "ethereum",
    isAddress: function(address) {
        return Promise.resolve(isEVMAddress(address));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Binance, {
    changellyName: "binance_smart_chain",
    isAddress: function(address) {
        return Promise.resolve(isEVMAddress(address));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Matic, {
    changellyName: "polygon",
    isAddress: function(address) {
        return Promise.resolve(isEVMAddress(address));
    }
}), _defineProperty(_obj7, SupportedNetworkName.EthereumClassic, {
    changellyName: "ethereum_classic",
    isAddress: function(address) {
        return Promise.resolve(isEVMAddress(address));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Optimism, {
    changellyName: "optimism",
    isAddress: function(address) {
        return Promise.resolve(isEVMAddress(address));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Moonbeam, {
    changellyName: "glmr",
    isAddress: function(address) {
        return Promise.resolve(isEVMAddress(address));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Polkadot, {
    changellyName: "polkadot",
    isAddress: function(address) {
        return Promise.resolve(isPolkadotAddress(address, 0));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Kusama, {
    changellyName: "kusama",
    isAddress: function(address) {
        return Promise.resolve(isPolkadotAddress(address, 2));
    }
}), _defineProperty(_obj7, SupportedNetworkName.Bitcoin, {
    changellyName: "bitcoin"
}), _obj7);
var supported_default = supportedNetworks3;
// src/providers/changelly/index.ts
var BASE_URL2 = "https://swap.mewapi.io/changelly";
var Changelly = /*#__PURE__*/ function(ProviderClass) {
    "use strict";
    _inherits(Changelly1, ProviderClass);
    var _super = _createSuper(Changelly1);
    function Changelly1(_web3eth, network) {
        _classCallCheck(this, Changelly1);
        var _this;
        _this = _super.call(this, _web3eth, network);
        _this.network = network;
        _this.tokenList = [];
        _this.name = "changelly" /* changelly */ ;
        _this.fromTokens = {};
        _this.toTokens = {};
        _this.contractToTicker = {};
        return _this;
    }
    _createClass(Changelly1, [
        {
            key: "init",
            value: function init() {
                var _this = this;
                return _asyncToGenerator(function() {
                    var changellyToNetwork, supportedChangellyNames;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!Changelly.isSupported(_this.network)) return [
                                    2
                                ];
                                return [
                                    4,
                                    (0, import_node_fetch2.default)(CHANGELLY_LIST).then(function(res) {
                                        return res.json();
                                    })
                                ];
                            case 1:
                                _this.changellyList = _state.sent();
                                changellyToNetwork = {};
                                Object.keys(supported_default).forEach(function(net) {
                                    changellyToNetwork[supported_default[net].changellyName] = net;
                                });
                                supportedChangellyNames = Object.values(supported_default).map(function(s) {
                                    return s.changellyName;
                                });
                                _this.changellyList.forEach(function(cur) {
                                    if (!supportedChangellyNames.includes(cur.blockchain)) return;
                                    if (cur.enabledFrom && cur.fixRateEnabled && cur.token && changellyToNetwork[cur.blockchain] === _this.network) {
                                        _this.fromTokens[cur.token.address] = cur.token;
                                    }
                                    if (cur.enabledTo && cur.fixRateEnabled && cur.token) {
                                        if (!_this.toTokens[changellyToNetwork[cur.blockchain]]) _this.toTokens[changellyToNetwork[cur.blockchain]] = {};
                                        _this.toTokens[changellyToNetwork[cur.blockchain]][cur.token.address] = _objectSpreadProps(_objectSpread({}, cur.token), {
                                            networkInfo: {
                                                name: changellyToNetwork[cur.blockchain],
                                                isAddress: supported_default[changellyToNetwork[cur.blockchain]].isAddress ? supported_default[changellyToNetwork[cur.blockchain]].isAddress : function(address) {
                                                    return _this.isValidAddress(address, cur.ticker);
                                                }
                                            }
                                        });
                                    }
                                    if (cur.token) _this.setTicker(cur.token, changellyToNetwork[cur.blockchain], cur.ticker);
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setTicker",
            value: function setTicker(token, network, ticker) {
                this.contractToTicker["".concat(network, "-").concat(token.address)] = ticker;
            }
        },
        {
            key: "getTicker",
            value: function getTicker(token, network) {
                return this.contractToTicker["".concat(network, "-").concat(token.address)];
            }
        },
        {
            key: "changellyRequest",
            value: function changellyRequest(method, params) {
                return (0, import_node_fetch2.default)("".concat(BASE_URL2), {
                    method: "POST",
                    body: JSON.stringify({
                        id: (0, import_uuid.v4)(),
                        jsonrpc: "2.0",
                        method: method,
                        params: params
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(res) {
                    return res.json();
                });
            }
        },
        {
            key: "isValidAddress",
            value: function isValidAddress(address, ticker) {
                return this.changellyRequest("validateAddress", {
                    currency: ticker,
                    address: address
                }).then(function(response) {
                    if (response.error) return false;
                    return response.result.result;
                });
            }
        },
        {
            key: "getFromTokens",
            value: function getFromTokens() {
                return this.fromTokens;
            }
        },
        {
            key: "getToTokens",
            value: function getToTokens() {
                if (Object.keys(this.fromTokens).length) return this.toTokens;
                return {};
            }
        },
        {
            key: "getMinMaxAmount",
            value: function getMinMaxAmount(param) {
                var fromToken = param.fromToken, toToken = param.toToken;
                var emptyResponse = {
                    minimumFrom: (0, import_web3_utils6.toBN)("0"),
                    maximumFrom: (0, import_web3_utils6.toBN)("0"),
                    minimumTo: (0, import_web3_utils6.toBN)("0"),
                    maximumTo: (0, import_web3_utils6.toBN)("0")
                };
                return this.changellyRequest("getFixRate", {
                    from: this.getTicker(fromToken, this.network),
                    to: this.getTicker(toToken, toToken.networkInfo.name)
                }).then(function(response) {
                    if (response.error) return emptyResponse;
                    var result = response.result;
                    return {
                        minimumFrom: (0, import_web3_utils6.toBN)((0, import_utils2.toBase)(result.minFrom, fromToken.decimals)),
                        maximumFrom: (0, import_web3_utils6.toBN)((0, import_utils2.toBase)(result.maxFrom, fromToken.decimals)),
                        minimumTo: (0, import_web3_utils6.toBN)((0, import_utils2.toBase)(result.minTo, toToken.decimals)),
                        maximumTo: (0, import_web3_utils6.toBN)((0, import_utils2.toBase)(result.maxTo, toToken.decimals))
                    };
                }).catch(function() {
                    return emptyResponse;
                });
            }
        },
        {
            key: "getQuote",
            value: function getQuote(options, meta) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var minMax, quoteRequestAmount;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!Changelly.isSupported(options.toToken.networkInfo.name) || !Changelly.isSupported(_this.network) || !_this.getTicker(options.fromToken, _this.network) || !_this.getTicker(options.toToken, options.toToken.networkInfo.name)) return [
                                    2,
                                    Promise.resolve(null)
                                ];
                                return [
                                    4,
                                    _this.getMinMaxAmount({
                                        fromToken: options.fromToken,
                                        toToken: options.toToken
                                    })
                                ];
                            case 1:
                                minMax = _state.sent();
                                quoteRequestAmount = options.amount;
                                if (quoteRequestAmount.lt(minMax.minimumFrom)) quoteRequestAmount = minMax.minimumFrom;
                                else if (quoteRequestAmount.gt(minMax.maximumFrom)) quoteRequestAmount = minMax.maximumFrom;
                                if (quoteRequestAmount.toString() === "0") return [
                                    2,
                                    null
                                ];
                                return [
                                    2,
                                    _this.changellyRequest("getFixRateForAmount", {
                                        from: _this.getTicker(options.fromToken, _this.network),
                                        to: _this.getTicker(options.toToken, options.toToken.networkInfo.name),
                                        amountFrom: (0, import_utils2.fromBase)(quoteRequestAmount.toString(), options.fromToken.decimals)
                                    }).then(function() {
                                        var _ref = _asyncToGenerator(function(response) {
                                            var result, evmGasLimit, retResponse;
                                            return __generator(this, function(_state) {
                                                if (response.error || !response.result.id) return [
                                                    2,
                                                    null
                                                ];
                                                result = response.result;
                                                evmGasLimit = options.fromToken.address === NATIVE_TOKEN_ADDRESS && options.fromToken.type === "evm" /* EVM */  ? 21e3 : (0, import_web3_utils6.toBN)(GAS_LIMITS.transferToken).toNumber();
                                                retResponse = {
                                                    fromTokenAmount: quoteRequestAmount,
                                                    toTokenAmount: (0, import_web3_utils6.toBN)((0, import_utils2.toBase)(result.amountTo, options.toToken.decimals)),
                                                    provider: _this.name,
                                                    quote: {
                                                        meta: _objectSpreadProps(_objectSpread({}, meta), {
                                                            changellyQuoteId: result.id
                                                        }),
                                                        options: _objectSpreadProps(_objectSpread({}, options), {
                                                            amount: quoteRequestAmount
                                                        }),
                                                        provider: _this.name
                                                    },
                                                    totalGaslimit: options.fromToken.type === "evm" /* EVM */  ? evmGasLimit : 0,
                                                    minMax: minMax
                                                };
                                                return [
                                                    2,
                                                    retResponse
                                                ];
                                            });
                                        });
                                        return function(response) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()).catch(function() {
                                        return null;
                                    })
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getSwap",
            value: function getSwap(quote) {
                if (!Changelly.isSupported(quote.options.toToken.networkInfo.name) || !Changelly.isSupported(this.network)) return Promise.resolve(null);
                var _this = this;
                return this.changellyRequest("createFixTransaction", {
                    from: this.getTicker(quote.options.fromToken, this.network),
                    to: this.getTicker(quote.options.toToken, quote.options.toToken.networkInfo.name),
                    refundAddress: quote.options.fromAddress,
                    address: quote.options.toAddress,
                    amountFrom: (0, import_utils2.fromBase)(quote.options.amount.toString(), quote.options.fromToken.decimals),
                    rateId: quote.meta.changellyQuoteId
                }).then(function() {
                    var _ref = _asyncToGenerator(function(response) {
                        var result, transaction, accurateGasEstimate, _accurateGasEstimate_result, txGaslimit, fee, retResponse;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (response.error || !response.result.id) return [
                                        2,
                                        null
                                    ];
                                    result = response.result;
                                    if (!(quote.options.fromToken.type === "evm" /* EVM */ )) return [
                                        3,
                                        2
                                    ];
                                    if (quote.options.fromToken.address === NATIVE_TOKEN_ADDRESS) transaction = {
                                        from: quote.options.fromAddress,
                                        data: "0x",
                                        gasLimit: (0, import_web3_utils6.numberToHex)(21e3),
                                        to: result.payinAddress,
                                        value: (0, import_web3_utils6.numberToHex)(quote.options.amount),
                                        type: "evm" /* evm */ 
                                    };
                                    else transaction = getTransfer({
                                        from: quote.options.fromAddress,
                                        contract: quote.options.fromToken.address,
                                        to: result.payinAddress,
                                        value: quote.options.amount.toString()
                                    });
                                    return [
                                        4,
                                        estimateGasList_default([
                                            transaction
                                        ], _this.network)
                                    ];
                                case 1:
                                    accurateGasEstimate = _state.sent();
                                    if (accurateGasEstimate) {
                                        if (accurateGasEstimate.isError) return [
                                            2,
                                            null
                                        ];
                                        _accurateGasEstimate_result = _slicedToArray(accurateGasEstimate.result, 1), txGaslimit = _accurateGasEstimate_result[0];
                                        transaction.gasLimit = txGaslimit;
                                    }
                                    return [
                                        3,
                                        3
                                    ];
                                case 2:
                                    transaction = {
                                        from: quote.options.fromAddress,
                                        to: result.payinAddress,
                                        value: (0, import_web3_utils6.numberToHex)(quote.options.amount),
                                        type: "generic" /* generic */ 
                                    };
                                    _state.label = 3;
                                case 3:
                                    fee = 1;
                                    retResponse = {
                                        fromTokenAmount: quote.options.amount,
                                        provider: _this.name,
                                        toTokenAmount: (0, import_web3_utils6.toBN)((0, import_utils2.toBase)(result.amountTo, quote.options.toToken.decimals)),
                                        transactions: [
                                            transaction
                                        ],
                                        slippage: quote.meta.slippage || DEFAULT_SLIPPAGE,
                                        fee: fee,
                                        getStatusObject: function() {
                                            var _ref = _asyncToGenerator(function(options) {
                                                return __generator(this, function(_state) {
                                                    return [
                                                        2,
                                                        {
                                                            options: _objectSpreadProps(_objectSpread({}, options), {
                                                                swapId: result.id
                                                            }),
                                                            provider: _this.name
                                                        }
                                                    ];
                                                });
                                            });
                                            return function(options) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }()
                                    };
                                    return [
                                        2,
                                        retResponse
                                    ];
                            }
                        });
                    });
                    return function(response) {
                        return _ref.apply(this, arguments);
                    };
                }()).catch(function() {
                    return null;
                });
            }
        },
        {
            key: "getStatus",
            value: function getStatus(options) {
                return this.changellyRequest("getStatus", {
                    id: options.swapId
                }).then(function() {
                    var _ref = _asyncToGenerator(function(response) {
                        var completedStatuses, pendingStatuses, failedStatuses, status;
                        return __generator(this, function(_state) {
                            if (response.error) return [
                                2,
                                "pending" /* pending */ 
                            ];
                            completedStatuses = [
                                "finished"
                            ];
                            pendingStatuses = [
                                "confirming",
                                "exchanging",
                                "sending",
                                "waiting",
                                "new"
                            ];
                            failedStatuses = [
                                "failed",
                                "refunded",
                                "hold",
                                "expired"
                            ];
                            status = response.result;
                            if (pendingStatuses.includes(status)) return [
                                2,
                                "pending" /* pending */ 
                            ];
                            if (completedStatuses.includes(status)) return [
                                2,
                                "success" /* success */ 
                            ];
                            if (failedStatuses.includes(status)) return [
                                2,
                                "failed" /* failed */ 
                            ];
                            return [
                                2,
                                "pending" /* pending */ 
                            ];
                        });
                    });
                    return function(response) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        }
    ], [
        {
            key: "isSupported",
            value: function isSupported(network) {
                return Object.keys(supported_default).includes(network);
            }
        }
    ]);
    return Changelly1;
}(ProviderClass);
var changelly_default = Changelly;
// src/common/supportedNetworks.ts
var import_types9 = require("@yetiwallet/types");
var _obj8;
var NetworkDetails = (_obj8 = {}, _defineProperty(_obj8, SupportedNetworkName.Bitcoin, {
    id: SupportedNetworkName.Bitcoin,
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
    name: "Bitcoin",
    symbol: "BTC",
    cgId: "bitcoin",
    rank: 1,
    signerType: [
        import_types9.SignerType.secp256k1btc
    ],
    type: "bitcoin" /* Bitcoin */ 
}), _defineProperty(_obj8, SupportedNetworkName.Ethereum, {
    id: SupportedNetworkName.Ethereum,
    cgId: "ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Binance, {
    id: SupportedNetworkName.Binance,
    cgId: "binancecoin",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
    name: "BNB",
    symbol: "BNB",
    rank: 3,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Bitindi, {
    id: SupportedNetworkName.Bitindi,
    cgId: "bitindi-chain",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/22026.png",
    name: "BNI",
    symbol: "BNI",
    rank: 4,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Matic, {
    id: SupportedNetworkName.Matic,
    cgId: "matic-network",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    name: "Polygon",
    symbol: "MATIC",
    rank: 5,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Optimism, {
    id: SupportedNetworkName.Optimism,
    cgId: "optimism",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Optimism",
    symbol: "ETH",
    rank: 6,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Arbitrum, {
    id: SupportedNetworkName.Arbitrum,
    cgId: "ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Arbitrum",
    symbol: "ETH",
    rank: 7,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Gnosis, {
    id: SupportedNetworkName.Gnosis,
    cgId: "dai",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    name: "Gnosis",
    symbol: "xDAI",
    rank: 8,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Avalanche, {
    id: SupportedNetworkName.Avalanche,
    cgId: "avalanche-2",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png",
    name: "Avalanche",
    symbol: "AVAX",
    rank: 9,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Fantom, {
    id: SupportedNetworkName.Fantom,
    cgId: "fantom",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
    name: "Fantom",
    symbol: "FTM",
    rank: 10,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Klaytn, {
    id: SupportedNetworkName.Klaytn,
    cgId: "klay-token",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xe4f05a66ec68b54a58b17c22107b02e0232cc817.png",
    name: "Klaytn",
    symbol: "KLAY",
    rank: 11,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Moonbeam, {
    id: SupportedNetworkName.Moonbeam,
    cgId: "moonbeam",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/22459/thumb/glmr.png",
    name: "Moonbeam",
    symbol: "GLMR",
    rank: 12,
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ 
}), _defineProperty(_obj8, SupportedNetworkName.Kusama, {
    id: SupportedNetworkName.Kusama,
    decimals: 12,
    logoURI: "https://assets.coingecko.com/coins/images/9568/thumb/m4zRhP5e_400x400.jpg",
    name: "Kusama",
    symbol: "ksm",
    cgId: "kusama",
    rank: 13,
    signerType: [
        import_types9.SignerType.sr25519,
        import_types9.SignerType.ed25519
    ],
    type: "substrate" /* Substrate */ 
}), _defineProperty(_obj8, SupportedNetworkName.Polkadot, {
    id: SupportedNetworkName.Polkadot,
    decimals: 10,
    logoURI: "https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png",
    name: "Polkadot",
    symbol: "DOT",
    cgId: "polkadot",
    rank: 14,
    signerType: [
        import_types9.SignerType.sr25519,
        import_types9.SignerType.ed25519
    ],
    type: "substrate" /* Substrate */ 
}), _defineProperty(_obj8, SupportedNetworkName.EthereumClassic, {
    id: SupportedNetworkName.EthereumClassic,
    cgId: "ethereum-classic",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/453/thumb/ethereum-classic-logo.png",
    name: "Ethereum Classic",
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ ,
    rank: 15,
    symbol: "ETC"
}), _defineProperty(_obj8, SupportedNetworkName.Aurora, {
    id: SupportedNetworkName.Aurora,
    cgId: "ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Ethereum",
    signerType: [
        import_types9.SignerType.secp256k1
    ],
    type: "evm" /* EVM */ ,
    rank: 16,
    symbol: "ETH"
}), _obj8);
var isSupportedNetwork = function(networkName) {
    return !!NetworkDetails[networkName];
};
var getSupportedNetworks = function() {
    return Object.values(NetworkDetails);
};
var getNetworkInfoByName = function(networkName) {
    return NetworkDetails[networkName];
};
var supportedNetworks_default = NetworkDetails;
// src/swapToken.ts
var import_utils3 = require("@yetiwallet/utils");
var import_bignumber = __toESM(require("bignumber.js"));
var import_web3_utils7 = require("web3-utils");
var SwapToken = /*#__PURE__*/ function() {
    "use strict";
    function SwapToken(token) {
        _classCallCheck(this, SwapToken);
        this.token = token;
    }
    _createClass(SwapToken, [
        {
            key: "setBalance",
            value: function setBalance(balance) {
                this.token.balance = balance;
            }
        },
        {
            key: "getBalanceReadable",
            value: function getBalanceReadable() {
                if (!this.token.balance) return "0";
                return this.toReadable(this.token.balance);
            }
        },
        {
            key: "getBalanceRaw",
            value: function getBalanceRaw() {
                if (!this.token.balance) return (0, import_web3_utils7.toBN)("0");
                return this.token.balance;
            }
        },
        {
            key: "toReadable",
            value: function toReadable(amount) {
                return (0, import_utils3.fromBase)(amount.toString(), this.token.decimals);
            }
        },
        {
            key: "toRaw",
            value: function toRaw(amount) {
                return (0, import_web3_utils7.toBN)((0, import_utils3.toBase)(amount, this.token.decimals));
            }
        },
        {
            key: "getFiatTotal",
            value: function getFiatTotal() {
                if (!this.token.balance || !this.token.price) return 0;
                return (0, import_bignumber.default)(this.getBalanceReadable()).times(this.token.price).toNumber();
            }
        },
        {
            key: "getFiatValue",
            value: function getFiatValue() {
                if (!this.token.price) return 0;
                return this.token.price;
            }
        },
        {
            key: "getReadableToFiat",
            value: function getReadableToFiat(value) {
                if (!this.token.price) return 0;
                return (0, import_bignumber.default)(value).times(this.token.price).toNumber();
            }
        },
        {
            key: "getRawToFiat",
            value: function getRawToFiat(value) {
                if (!this.token.price) return 0;
                return (0, import_bignumber.default)(this.toReadable(value)).times(this.token.price).toNumber();
            }
        }
    ]);
    return SwapToken;
}();
var swapToken_default = SwapToken;
// src/index.ts
var Swap = /*#__PURE__*/ function(_import_eventemitter3_default) {
    "use strict";
    _inherits(Swap, _import_eventemitter3_default);
    var _super = _createSuper(Swap);
    function Swap(options) {
        _classCallCheck(this, Swap);
        var _this;
        _this = _super.call(this);
        _this.network = options.network;
        _this.evmOptions = options.evmOptions ? options.evmOptions : {
            infiniteApproval: true
        };
        _this.api = options.api;
        _this.walletId = options.walletIdentifier;
        _this.providerClasses = [
            oneInch_default,
            changelly_default
        ];
        _this.topTokenInfo = {
            contractsToId: {},
            topTokens: {},
            trendingTokens: {}
        };
        _this.tokenList = {
            all: [],
            top: [],
            trending: []
        };
        _this.toTokens = {
            all: {},
            top: {},
            trending: {}
        };
        _this.fromTokens = {
            all: [],
            top: [],
            trending: []
        };
        _this.initPromise = _this.init();
        return _this;
    }
    _createClass(Swap, [
        {
            key: "init",
            value: function init() {
                var _this = this;
                return _asyncToGenerator(function() {
                    var allFromTokens, native, allToTokens;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!TOKEN_LISTS[_this.network]) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    (0, import_node_fetch3.default)(TOKEN_LISTS[_this.network]).then(function(res) {
                                        return res.json();
                                    })
                                ];
                            case 1:
                                _this.tokenList = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    (0, import_node_fetch3.default)(TOP_TOKEN_INFO_LIST).then(function(res) {
                                        return res.json();
                                    })
                                ];
                            case 3:
                                _this.topTokenInfo = _state.sent();
                                _this.providers = _this.providerClasses.map(function(Provider) {
                                    return new Provider(_this.api, _this.network);
                                });
                                return [
                                    4,
                                    Promise.all(_this.providers.map(function(Provider) {
                                        return Provider.init(_this.tokenList.all);
                                    }))
                                ];
                            case 4:
                                _state.sent();
                                allFromTokens = {};
                                _toConsumableArray(_this.providers).reverse().forEach(function(p) {
                                    Object.assign(allFromTokens, p.getFromTokens());
                                });
                                _this.fromTokens = {
                                    all: Object.values(allFromTokens).sort(sortNativeToFront),
                                    top: _this.tokenList.top.filter(function(topt) {
                                        return !!allFromTokens[topt.address];
                                    }),
                                    trending: _this.tokenList.trending.filter(function(trendt) {
                                        return !!allFromTokens[trendt.address];
                                    })
                                };
                                native = _this.fromTokens.all.shift();
                                _this.fromTokens.all.sort(sortByRank);
                                _this.fromTokens.all.unshift(native);
                                allToTokens = {};
                                _toConsumableArray(_this.providers).reverse().forEach(function(p) {
                                    (0, import_lodash.merge)(allToTokens, p.getToTokens());
                                });
                                Object.keys(allToTokens).forEach(function(nName) {
                                    var values = Object.values(allToTokens[nName]);
                                    values.sort(sortNativeToFront);
                                    var nativeTo = values.shift();
                                    values.sort(sortByRank);
                                    values.unshift(nativeTo);
                                    values.forEach(function(val) {
                                        if (val.cgId && _this.topTokenInfo.topTokens[val.cgId]) {
                                            if (!_this.toTokens.top[nName]) _this.toTokens.top[nName] = [];
                                            _this.toTokens.top[nName].push(_objectSpreadProps(_objectSpread({}, val), {
                                                rank: _this.topTokenInfo.topTokens[val.cgId].rank
                                            }));
                                        }
                                        if (val.cgId && _this.topTokenInfo.trendingTokens[val.cgId]) {
                                            if (!_this.toTokens.trending[nName]) _this.toTokens.trending[nName] = [];
                                            _this.toTokens.trending[nName].push(_objectSpreadProps(_objectSpread({}, val), {
                                                rank: _this.topTokenInfo.trendingTokens[val.cgId]
                                            }));
                                        }
                                    });
                                    if (_this.toTokens.top[nName]) _this.toTokens.top[nName].sort(sortByRank);
                                    if (_this.toTokens.trending[nName]) _this.toTokens.trending[nName].sort(sortByRank);
                                    _this.toTokens.all[nName] = values;
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getFromTokens",
            value: function getFromTokens() {
                return this.fromTokens;
            }
        },
        {
            key: "getToTokens",
            value: function getToTokens() {
                return this.toTokens;
            }
        },
        {
            key: "getQuotes",
            value: function getQuotes(options) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var response;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(_this.providers.map(function(Provider) {
                                        return Provider.getQuote(options, {
                                            infiniteApproval: _this.evmOptions.infiniteApproval,
                                            walletIdentifier: _this.walletId
                                        }).then(function(res) {
                                            if (!res) return res;
                                            _this.emit("quote-update" /* QuoteUpdate */ , res.toTokenAmount);
                                            return res;
                                        });
                                    }))
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    response.filter(function(res) {
                                        return res !== null;
                                    }).sort(function(a, b) {
                                        return b.toTokenAmount.gt(a.toTokenAmount) ? 1 : -1;
                                    })
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getSwap",
            value: function getSwap(quote) {
                var provider = this.providers.find(function(p) {
                    return p.name === quote.provider;
                });
                return provider.getSwap(quote);
            }
        },
        {
            key: "getStatus",
            value: function getStatus(options) {
                var provider = this.providers.find(function(p) {
                    return p.name === options.provider;
                });
                return provider.getStatus(options.options);
            }
        }
    ], [
        {
            key: "networkNameToInfo",
            value: function networkNameToInfo(networkName) {
                return supportedNetworks_default[networkName];
            }
        }
    ]);
    return Swap;
}(import_eventemitter3.default);
var src_default = Swap;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    NetworkType: NetworkType,
    SupportedNetworkName: SupportedNetworkName,
    SwapToken: SwapToken,
    TransactionStatus: TransactionStatus,
    TransactionType: TransactionType,
    WalletIdentifier: WalletIdentifier,
    getNetworkInfoByName: getNetworkInfoByName,
    getSupportedNetworks: getSupportedNetworks,
    isSupportedNetwork: isSupportedNetwork,
    sortByRank: sortByRank,
    sortNativeToFront: sortNativeToFront
});
