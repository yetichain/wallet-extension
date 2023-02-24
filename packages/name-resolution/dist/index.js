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
    ENSResolver: function() {
        return ens_default;
    },
    UDResolver: function() {
        return ud_default;
    },
    default: function() {
        return src_default;
    }
});
module.exports = __toCommonJS(src_exports);
// src/ens/index.ts
var import_ethers = require("ethers");
var import_address_encoder = require("@ensdomains/address-encoder");
// src/utils.ts
var getTLD = function(name) {
    var labels = name.split(".");
    if (labels.length < 2) return "";
    return labels[labels.length - 1];
};
// src/ens/index.ts
var ENSResolver = /*#__PURE__*/ function() {
    "use strict";
    function ENSResolver(options) {
        _classCallCheck(this, ENSResolver);
        this.options = options;
        this.name = "ens";
    }
    _createClass(ENSResolver, [
        {
            key: "init",
            value: function init() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        _this.ENSProvider = new import_ethers.ethers.providers.JsonRpcProvider(_this.options.node);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "resolveReverseName",
            value: function resolveReverseName(address) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var nameAddress;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.ENSProvider.lookupAddress(address)
                                ];
                            case 1:
                                nameAddress = _state.sent();
                                if (nameAddress) return [
                                    2,
                                    nameAddress
                                ];
                                return [
                                    2,
                                    null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resolveAddress",
            value: function resolveAddress(name) {
                var coin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ETH";
                var _this = this;
                return _asyncToGenerator(function() {
                    var resolver;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.ENSProvider.getResolver(name)
                                ];
                            case 1:
                                resolver = _state.sent();
                                if (resolver) {
                                    return [
                                        2,
                                        resolver.getAddress(import_address_encoder.formatsByName[coin].coinType).then(function(address) {
                                            if (address) return address;
                                            return null;
                                        })
                                    ];
                                }
                                return [
                                    2,
                                    null
                                ];
                        }
                    });
                })();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "isSupportedName",
            value: function isSupportedName(name) {
                return getTLD(name).length > 2;
            }
        }
    ]);
    return ENSResolver;
}();
var ens_default = ENSResolver;
// src/ud/index.ts
var import_resolution = require("@unstoppabledomains/resolution");
var UDResolver = /*#__PURE__*/ function() {
    "use strict";
    function UDResolver() {
        _classCallCheck(this, UDResolver);
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
        this.UDProvider = new import_resolution.Resolution();
        this.name = "ud";
    }
    _createClass(UDResolver, [
        {
            key: "init",
            value: // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
            function init() {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "resolveReverseName",
            value: function resolveReverseName(address) {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.UDProvider.reverse(address).then(function(name) {
                                return name;
                            }).catch(function() {
                                return null;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "resolveAddress",
            value: function resolveAddress(name) {
                var coin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ETH";
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.UDProvider.addr(name, coin).then(function(address) {
                                return address;
                            }).catch(function() {
                                return null;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "isSupportedName",
            value: function isSupportedName(name) {
                return this.supportedTLDs.includes(getTLD(name));
            }
        }
    ]);
    return UDResolver;
}();
var ud_default = UDResolver;
// src/rns/index.ts
var import_ethers2 = require("ethers");
var ROOTSTOCK_RPC_NODE = "https://public-node.rsk.co";
var RNS_REGISTRY_ADDRESS = "0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5";
var stripHexPrefix = function(hex) {
    return hex.slice(2);
};
var RNS_REGISTRY_ABI = [
    "function resolver(bytes32 node) public view returns (address)"
];
var RNS_ADDR_RESOLVER_ABI = [
    "function addr(bytes32 node) public view returns (address)"
];
var RNS_NAME_RESOLVER_ABI = [
    "function name(bytes32 node) external view returns (string)"
];
var RNSResolver = /*#__PURE__*/ function() {
    "use strict";
    function RNSResolver() {
        _classCallCheck(this, RNSResolver);
        this.name = "rns";
    }
    _createClass(RNSResolver, [
        {
            key: "init",
            value: function init() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        _this.RNSProvider = new import_ethers2.ethers.providers.JsonRpcProvider(ROOTSTOCK_RPC_NODE);
                        _this.rnsRegistryContract = new import_ethers2.Contract(RNS_REGISTRY_ADDRESS, RNS_REGISTRY_ABI, _this.RNSProvider);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "resolveReverseName",
            value: function resolveReverseName(address) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var reverseRecordHash, resolverAddress, nameResolverContract, name;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                reverseRecordHash = import_ethers2.utils.namehash("".concat(stripHexPrefix(address), ".addr.reverse"));
                                return [
                                    4,
                                    _this.rnsRegistryContract.resolver(reverseRecordHash)
                                ];
                            case 1:
                                resolverAddress = _state.sent();
                                if (resolverAddress === import_ethers2.constants.AddressZero) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                nameResolverContract = new import_ethers2.Contract(resolverAddress, RNS_NAME_RESOLVER_ABI, _this.RNSProvider);
                                return [
                                    4,
                                    nameResolverContract.name(reverseRecordHash)
                                ];
                            case 2:
                                name = _state.sent();
                                if (name === void 0) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    2,
                                    name
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resolveAddress",
            value: function resolveAddress(name) {
                var _coin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "RSK";
                var _this = this;
                return _asyncToGenerator(function() {
                    var nameHash, resolverAddress, addrResolverContract, address;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nameHash = import_ethers2.utils.namehash(name);
                                return [
                                    4,
                                    _this.rnsRegistryContract.resolver(nameHash)
                                ];
                            case 1:
                                resolverAddress = _state.sent();
                                if (resolverAddress === import_ethers2.constants.AddressZero) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                addrResolverContract = new import_ethers2.Contract(resolverAddress, RNS_ADDR_RESOLVER_ABI, _this.RNSProvider);
                                return [
                                    4,
                                    addrResolverContract.addr(nameHash)
                                ];
                            case 2:
                                address = _state.sent();
                                if (address === void 0 || address === null) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    2,
                                    address.toLowerCase()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "isSupportedName",
            value: function isSupportedName(name) {
                return getTLD(name) === "rsk";
            }
        }
    ]);
    return RNSResolver;
}();
var rns_default = RNSResolver;
// src/index.ts
var NameResolver = /*#__PURE__*/ function() {
    "use strict";
    function NameResolver(options) {
        _classCallCheck(this, NameResolver);
        this.ens = new ens_default(options.ens);
        this.rns = new rns_default();
        this.ud = new ud_default();
        this.initDone = Promise.all([
            this.ens.init(),
            this.rns.init(),
            this.ud.init()
        ]);
    }
    _createClass(NameResolver, [
        {
            key: "resolveReverseName",
            value: function resolveReverseName(address) {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.initDone.then(function() {
                                return Promise.all([
                                    _this.ens.resolveReverseName(address),
                                    _this.rns.resolveReverseName(address),
                                    _this.ud.resolveReverseName(address)
                                ]).then(function(results) {
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var name = _step.value;
                                            if (name !== null) return name;
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
                                    return null;
                                });
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "resolveAddress",
            value: function resolveAddress(name) {
                var coin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ETH";
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        return [
                            2,
                            _this.initDone.then(function() {
                                if (_this.rns.isSupportedName(name)) return _this.rns.resolveAddress(name, coin);
                                if (_this.ud.isSupportedName(name)) return _this.ud.resolveAddress(name, coin);
                                if (_this.ens.isSupportedName(name)) return _this.ens.resolveAddress(name, coin);
                                return null;
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return NameResolver;
}();
var src_default = NameResolver;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    ENSResolver: ENSResolver,
    UDResolver: UDResolver
});
