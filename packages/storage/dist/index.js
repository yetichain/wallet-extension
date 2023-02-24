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
    default: function() {
        return src_default;
    }
});
module.exports = __toCommonJS(src_exports);
// src/local-forage.ts
var import_localforage = __toESM(require("localforage"));
var LocalForage = /*#__PURE__*/ function() {
    "use strict";
    function LocalForage(namespace) {
        var drivers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
            import_localforage.default.INDEXEDDB,
            import_localforage.default.LOCALSTORAGE
        ];
        _classCallCheck(this, LocalForage);
        this.namespace = namespace;
        this.storage = import_localforage.default.createInstance({
            name: this.namespace,
            driver: drivers,
            storeName: "enkrypt_db"
        });
    }
    _createClass(LocalForage, [
        {
            key: "set",
            value: function set(items) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var promises;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promises = [];
                                Object.keys(items).forEach(function(key) {
                                    promises.push(_this.storage.setItem(key, items[key]));
                                });
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "remove",
            value: function remove(key) {
                return this.storage.removeItem(key);
            }
        },
        {
            key: "clear",
            value: function clear() {
                return this.storage.clear();
            }
        },
        {
            key: "get",
            value: function get(key) {
                return this.storage.getItem(key).then(function(item) {
                    if (!item) return {};
                    return _defineProperty({}, key, item);
                });
            }
        },
        {
            key: "getWholeStorage",
            value: function getWholeStorage() {
                var _this = this;
                return _asyncToGenerator(function() {
                    var storeOb;
                    return __generator(this, function(_state) {
                        storeOb = {};
                        return [
                            2,
                            _this.storage.iterate(function(value, key) {
                                storeOb[key] = value;
                            }).then(function() {
                                return storeOb;
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return LocalForage;
}();
var local_forage_default = LocalForage;
// src/index.ts
var Storage = /*#__PURE__*/ function() {
    "use strict";
    function Storage(namespace, options) {
        _classCallCheck(this, Storage);
        if (!options.storage) options.storage = new local_forage_default(namespace);
        this.namespace = namespace;
        this.storage = options.storage;
    }
    _createClass(Storage, [
        {
            key: "get",
            value: function get(key) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var vals;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.storage.get(_this.namespace)
                                ];
                            case 1:
                                vals = _state.sent();
                                if (vals[_this.namespace] && vals[_this.namespace][key]) return [
                                    2,
                                    vals[_this.namespace][key]
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
            key: "set",
            value: function set(key, val) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var vals;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.storage.get(_this.namespace)
                                ];
                            case 1:
                                vals = _state.sent();
                                vals = vals[_this.namespace] ? vals[_this.namespace] : {};
                                vals[key] = val;
                                return [
                                    2,
                                    _this.storage.set(_defineProperty({}, _this.namespace, vals))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "remove",
            value: function remove(key) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var vals;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.storage.get(_this.namespace)
                                ];
                            case 1:
                                vals = _state.sent();
                                vals = vals[_this.namespace] ? vals[_this.namespace] : {};
                                delete vals[key];
                                return [
                                    2,
                                    _this.storage.set(_defineProperty({}, _this.namespace, vals))
                                ];
                        }
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
                        return [
                            2,
                            _this.storage.remove(_this.namespace)
                        ];
                    });
                })();
            }
        }
    ]);
    return Storage;
}();
var src_default = Storage;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
