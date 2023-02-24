function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
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
    RequestClass: function() {
        return RequestClass;
    },
    default: function() {
        return src_default;
    }
});
module.exports = __toCommonJS(src_exports);
// src/types/index.ts
var import_eventemitter3 = __toESM(require("eventemitter3"));
var RequestClass = /*#__PURE__*/ function(_import_eventemitter3_default) {
    "use strict";
    _inherits(RequestClass, _import_eventemitter3_default);
    var _super = _createSuper(RequestClass);
    function RequestClass(url, middlewares) {
        _classCallCheck(this, RequestClass);
        var _this;
        _this = _super.call(this);
        _this.url = url;
        _this.middlewares = middlewares;
        return _this;
    }
    return RequestClass;
}(import_eventemitter3.default);
// src/libs/wsClient.ts
var import_json_rpc_2 = require("json-rpc-2.0");
var import_eventemitter32 = __toESM(require("eventemitter3"));
var import_uuid = require("uuid");
var import_isomorphic_ws = __toESM(require("isomorphic-ws"));
// src/libs/events.ts
var Event = function Event(type, target) {
    "use strict";
    _classCallCheck(this, Event);
    this.target = target;
    this.type = type;
};
var ErrorEvent = /*#__PURE__*/ function(Event) {
    "use strict";
    _inherits(ErrorEvent, Event);
    var _super = _createSuper(ErrorEvent);
    function ErrorEvent(error, target) {
        _classCallCheck(this, ErrorEvent);
        var _this;
        _this = _super.call(this, "error", target);
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(_wrapNativeSuper(Event));
var CloseEvent = /*#__PURE__*/ function(Event) {
    "use strict";
    _inherits(CloseEvent, Event);
    var _super = _createSuper(CloseEvent);
    function CloseEvent() {
        var code = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3, reason = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", target = arguments.length > 2 ? arguments[2] : void 0;
        _classCallCheck(this, CloseEvent);
        var _this;
        _this = _super.call(this, "close", target);
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(_wrapNativeSuper(Event));
// src/libs/reconnectingWS.ts
var getGlobalWebSocket = function() {
    if (typeof WebSocket !== "undefined") {
        return WebSocket;
    }
};
var isWebSocket = function(w) {
    return typeof w !== "undefined" && !!w && w.CLOSING === 2;
};
var DEFAULT = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false
};
var ReconnectingWebSocket = /*#__PURE__*/ function() {
    "use strict";
    function ReconnectingWebSocket1(url, protocols) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var _this = this;
        _classCallCheck(this, ReconnectingWebSocket1);
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: []
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = "blob";
        this._closeCalled = false;
        this._messageQueue = [];
        /**
     * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
     */ this.onclose = null;
        /**
     * An event listener to be called when an error occurs
     */ this.onerror = null;
        /**
     * An event listener to be called when a message is received from the server
     */ this.onmessage = null;
        /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */ this.onopen = null;
        this._handleOpen = function(event) {
            _this._debug("open event");
            var _this__options = _this._options, _this__options_minUptime = _this__options.minUptime, minUptime = _this__options_minUptime === void 0 ? DEFAULT.minUptime : _this__options_minUptime;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function() {
                return _this._acceptOpen();
            }, minUptime);
            _this._ws.binaryType = _this._binaryType;
            _this._messageQueue.forEach(function(message) {
                var _this__ws;
                return (_this__ws = _this._ws) === null || _this__ws === void 0 ? void 0 : _this__ws.send(message);
            });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._handleMessage = function(event) {
            _this._debug("message event");
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._handleError = function(event) {
            _this._debug("error event", event.message);
            _this._disconnect(void 0, event.message === "TIMEOUT" ? "timeout" : void 0);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug("exec error listeners");
            _this._listeners.error.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
            _this._connect();
        };
        this._handleClose = function(event) {
            _this._debug("close event");
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    _createClass(ReconnectingWebSocket1, [
        {
            key: "CONNECTING",
            get: function get() {
                return ReconnectingWebSocket.CONNECTING;
            }
        },
        {
            key: "OPEN",
            get: function get() {
                return ReconnectingWebSocket.OPEN;
            }
        },
        {
            key: "CLOSING",
            get: function get() {
                return ReconnectingWebSocket.CLOSING;
            }
        },
        {
            key: "CLOSED",
            get: function get() {
                return ReconnectingWebSocket.CLOSED;
            }
        },
        {
            key: "binaryType",
            get: function get() {
                return this._ws ? this._ws.binaryType : this._binaryType;
            },
            set: function set(value) {
                this._binaryType = value;
                if (this._ws) {
                    this._ws.binaryType = value;
                }
            }
        },
        {
            key: "retryCount",
            get: /**
   * Returns the number or connection retries
   */ function get() {
                return Math.max(this._retryCount, 0);
            }
        },
        {
            key: "bufferedAmount",
            get: /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */ function get() {
                var bytes = this._messageQueue.reduce(function(acc, message) {
                    if (typeof message === "string") {
                        acc += message.length;
                    } else if (_instanceof(message, Blob)) {
                        acc += message.size;
                    } else {
                        acc += message.byteLength;
                    }
                    return acc;
                }, 0);
                return bytes + (this._ws ? this._ws.bufferedAmount : 0);
            }
        },
        {
            key: "extensions",
            get: /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */ function get() {
                return this._ws ? this._ws.extensions : "";
            }
        },
        {
            key: "protocol",
            get: /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */ function get() {
                return this._ws ? this._ws.protocol : "";
            }
        },
        {
            key: "readyState",
            get: /**
   * The current state of the connection; this is one of the Ready state constants
   */ function get() {
                if (this._ws) {
                    return this._ws.readyState;
                }
                return this._options.startClosed ? ReconnectingWebSocket.CLOSED : ReconnectingWebSocket.CONNECTING;
            }
        },
        {
            key: "url",
            get: /**
   * The URL as resolved by the constructor
   */ function get() {
                return this._ws ? this._ws.url : "";
            }
        },
        {
            /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */ // eslint-disable-next-line default-param-last
            key: "close",
            value: function close() {
                var code = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3, reason = arguments.length > 1 ? arguments[1] : void 0;
                this._closeCalled = true;
                this._shouldReconnect = false;
                this._clearTimeouts();
                if (!this._ws) {
                    this._debug("close enqueued: no ws instance");
                    return;
                }
                if (this._ws.readyState === this.CLOSED) {
                    this._debug("close: already closed");
                    return;
                }
                this._ws.close(code, reason);
            }
        },
        {
            /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */ key: "reconnect",
            value: function reconnect(code, reason) {
                this._shouldReconnect = true;
                this._closeCalled = false;
                this._retryCount = -1;
                if (!this._ws || this._ws.readyState === this.CLOSED) {
                    this._connect();
                } else {
                    this._disconnect(code, reason);
                    this._connect();
                }
            }
        },
        {
            /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */ key: "send",
            value: function send(data) {
                if (this._ws && this._ws.readyState === this.OPEN) {
                    this._debug("send", data);
                    this._ws.send(data);
                } else {
                    var _this__options = this._options, _this__options_maxEnqueuedMessages = _this__options.maxEnqueuedMessages, maxEnqueuedMessages = _this__options_maxEnqueuedMessages === void 0 ? DEFAULT.maxEnqueuedMessages : _this__options_maxEnqueuedMessages;
                    if (this._messageQueue.length < maxEnqueuedMessages) {
                        this._debug("enqueue", data);
                        this._messageQueue.push(data);
                    }
                }
            }
        },
        {
            /**
   * Register an event handler of a specific event type
   */ key: "addEventListener",
            value: function addEventListener(type, listener) {
                if (this._listeners[type]) {
                    this._listeners[type].push(listener);
                }
            }
        },
        {
            key: "dispatchEvent",
            value: function dispatchEvent(event) {
                var listeners = this._listeners[event.type];
                if (listeners) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var listener = _step.value;
                            this._callEventListener(event, listener);
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
                }
                return true;
            }
        },
        {
            /**
   * Removes an event listener
   */ key: "removeEventListener",
            value: function removeEventListener(type, listener) {
                if (this._listeners[type]) {
                    this._listeners[type] = this._listeners[type].filter(function(l) {
                        return l !== listener;
                    });
                }
            }
        },
        {
            key: "_debug",
            value: function _debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                if (this._options.debug) {
                    console.log.apply(console, [
                        "RWS>"
                    ].concat(_toConsumableArray(args)));
                }
            }
        },
        {
            key: "_getNextDelay",
            value: function _getNextDelay() {
                var _this__options = this._options, _this__options_reconnectionDelayGrowFactor = _this__options.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _this__options_reconnectionDelayGrowFactor === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _this__options_reconnectionDelayGrowFactor, _this__options_minReconnectionDelay = _this__options.minReconnectionDelay, minReconnectionDelay = _this__options_minReconnectionDelay === void 0 ? DEFAULT.minReconnectionDelay : _this__options_minReconnectionDelay, _this__options_maxReconnectionDelay = _this__options.maxReconnectionDelay, maxReconnectionDelay = _this__options_maxReconnectionDelay === void 0 ? DEFAULT.maxReconnectionDelay : _this__options_maxReconnectionDelay;
                var delay = 0;
                if (this._retryCount > 0) {
                    delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
                    if (delay > maxReconnectionDelay) {
                        delay = maxReconnectionDelay;
                    }
                }
                this._debug("next delay", delay);
                return delay;
            }
        },
        {
            key: "_wait",
            value: function _wait() {
                var _this = this;
                return new Promise(function(resolve) {
                    setTimeout(resolve, _this._getNextDelay());
                });
            }
        },
        {
            key: "_getNextUrl",
            value: function _getNextUrl(urlProvider) {
                if (typeof urlProvider === "string") {
                    return Promise.resolve(urlProvider);
                }
                if (typeof urlProvider === "function") {
                    var url = urlProvider();
                    if (typeof url === "string") {
                        return Promise.resolve(url);
                    }
                    if (url.then) {
                        return url;
                    }
                }
                throw Error("Invalid URL");
            }
        },
        {
            key: "_connect",
            value: function _connect() {
                var _this = this;
                if (this._connectLock || !this._shouldReconnect) {
                    return;
                }
                this._connectLock = true;
                var _this__options = this._options, _this__options_maxRetries = _this__options.maxRetries, maxRetries = _this__options_maxRetries === void 0 ? DEFAULT.maxRetries : _this__options_maxRetries, _this__options_connectionTimeout = _this__options.connectionTimeout, connectionTimeout = _this__options_connectionTimeout === void 0 ? DEFAULT.connectionTimeout : _this__options_connectionTimeout, tmp = _this__options.WebSocket, WebSocket2 = tmp === void 0 ? getGlobalWebSocket() : tmp;
                if (this._retryCount >= maxRetries) {
                    this._debug("max retries reached", this._retryCount, ">=", maxRetries);
                    return;
                }
                this._retryCount++;
                this._debug("connect", this._retryCount);
                this._removeListeners();
                if (!isWebSocket(WebSocket2)) {
                    throw Error("No valid WebSocket class provided");
                }
                this._wait().then(function() {
                    return _this._getNextUrl(_this._url);
                }).then(function(url) {
                    if (_this._closeCalled) {
                        return;
                    }
                    _this._debug("connect", {
                        url: url,
                        protocols: _this._protocols
                    });
                    _this._ws = _this._protocols ? new WebSocket2(url, _this._protocols, _this._options.wsOptions) : new WebSocket2(url);
                    _this._ws.binaryType = _this._binaryType;
                    _this._connectLock = false;
                    _this._addListeners();
                    _this._connectTimeout = setTimeout(function() {
                        return _this._handleTimeout();
                    }, connectionTimeout);
                });
            }
        },
        {
            key: "_handleTimeout",
            value: function _handleTimeout() {
                this._debug("timeout event");
                this._handleError(new ErrorEvent(Error("TIMEOUT"), this));
            }
        },
        {
            // eslint-disable-next-line default-param-last
            key: "_disconnect",
            value: function _disconnect() {
                var code = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3, reason = arguments.length > 1 ? arguments[1] : void 0;
                this._clearTimeouts();
                if (!this._ws) {
                    return;
                }
                this._removeListeners();
                try {
                    this._ws.close(code, reason);
                    this._handleClose(new CloseEvent(code, reason, this));
                } catch (error) {}
            }
        },
        {
            key: "_acceptOpen",
            value: function _acceptOpen() {
                this._debug("accept open");
                this._retryCount = 0;
            }
        },
        {
            key: "_callEventListener",
            value: function _callEventListener(event, listener) {
                if ("handleEvent" in listener) {
                    listener.handleEvent(event);
                } else {
                    listener(event);
                }
            }
        },
        {
            key: "_removeListeners",
            value: function _removeListeners() {
                if (!this._ws) {
                    return;
                }
                this._debug("removeListeners");
                this._ws.removeEventListener("open", this._handleOpen);
                this._ws.removeEventListener("close", this._handleClose);
                this._ws.removeEventListener("message", this._handleMessage);
                this._ws.removeEventListener("error", this._handleError);
            }
        },
        {
            key: "_addListeners",
            value: function _addListeners() {
                if (!this._ws) {
                    return;
                }
                this._debug("addListeners");
                this._ws.addEventListener("open", this._handleOpen);
                this._ws.addEventListener("close", this._handleClose);
                this._ws.addEventListener("message", this._handleMessage);
                this._ws.addEventListener("error", this._handleError);
            }
        },
        {
            key: "_clearTimeouts",
            value: function _clearTimeouts() {
                clearTimeout(this._connectTimeout);
                clearTimeout(this._uptimeTimeout);
            }
        }
    ], [
        {
            key: "CONNECTING",
            get: function get() {
                return 0;
            }
        },
        {
            key: "OPEN",
            get: function get() {
                return 1;
            }
        },
        {
            key: "CLOSING",
            get: function get() {
                return 2;
            }
        },
        {
            key: "CLOSED",
            get: function get() {
                return 3;
            }
        }
    ]);
    return ReconnectingWebSocket1;
}();
// src/libs/middleware.ts
var Middleware = /*#__PURE__*/ function() {
    "use strict";
    function Middleware() {
        var middlewares = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, Middleware);
        this.middlewares = middlewares;
    }
    _createClass(Middleware, [
        {
            key: "use",
            value: function use(fn) {
                this.middlewares.push(fn);
            }
        },
        {
            key: "executeMiddleware",
            value: function executeMiddleware(req, res, done) {
                this.middlewares.reduceRight(function(_done, next) {
                    return function() {
                        return next(req, res, _done);
                    };
                }, done)(req, res);
            }
        },
        {
            key: "run",
            value: function run(req, res) {
                var _this = this;
                return new Promise(function(resolve) {
                    _this.executeMiddleware(req, res, resolve);
                });
            }
        }
    ]);
    return Middleware;
}();
var middleware_default = Middleware;
// src/libs/wsClient.ts
var WSClient = /*#__PURE__*/ function(_import_eventemitter32_default) {
    "use strict";
    _inherits(WSClient, _import_eventemitter32_default);
    var _super = _createSuper(WSClient);
    function WSClient(url, middlewares) {
        var wsOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        _classCallCheck(this, WSClient);
        var _this;
        _this = _super.call(this);
        _this.queue = {};
        _this.wsOptions = wsOptions;
        _this.changeNetwork(url);
        _this.middlewares = middlewares;
        _this.middleware = new middleware_default();
        middlewares.forEach(function(mw) {
            return _this.middleware.use(mw);
        });
        _this.client = new import_json_rpc_2.JSONRPCClient(function(request) {
            try {
                _this.ws.send(JSON.stringify(request));
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        });
        return _this;
    }
    _createClass(WSClient, [
        {
            key: "changeNetwork",
            value: function changeNetwork(url) {
                this.url = url;
                this.ws = new ReconnectingWebSocket(this.url, [], {
                    WebSocket: import_isomorphic_ws.default,
                    wsOptions: this.wsOptions
                });
                this.setListeners();
            }
        },
        {
            key: "setListeners",
            value: function setListeners() {
                var _this = this;
                this.ws.onmessage = function(event) {
                    var json = JSON.parse(event.data.toString());
                    if (json.method && !json.id) {
                        _this.emit("notification", json);
                    } else {
                        _this.client.receive(json);
                    }
                };
                this.ws.onclose = function(event) {
                    _this.client.rejectAllPendingRequests("Connection is closed (".concat(event.reason, ")."));
                };
                this.ws.onopen = function() {
                    var curQueue = Object.keys(_this.queue);
                    if (curQueue.length) {
                        curQueue.forEach(function(id) {
                            var item = _this.queue[id];
                            _this.request(item.request).then(item.resolve).catch(item.reject);
                            delete _this.queue[id];
                        });
                    }
                };
            }
        },
        {
            key: "request",
            value: function request(req) {
                var _this = this;
                if (!req.method) return Promise.resolve({
                    error: "RPC call must provide a method"
                });
                if (this.isOpen()) {
                    return new Promise(function(resolve, reject) {
                        var callback = function(error, result) {
                            if (error) return reject(error);
                            return resolve(result);
                        };
                        _this.middleware.run(req, callback).then(function() {
                            return _this.client.request(req.method, req.params).then(function(res) {
                                resolve(res);
                            }, function(error) {
                                reject(error);
                            });
                        });
                    });
                }
                return new Promise(function(resolve, reject) {
                    _this.queue[(0, import_uuid.v4)()] = {
                        resolve: resolve,
                        reject: reject,
                        request: req
                    };
                });
            }
        },
        {
            key: "isOpen",
            value: function isOpen() {
                return this.ws.readyState === 1;
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                this.ws.close();
            }
        }
    ]);
    return WSClient;
}(import_eventemitter32.default);
var wsClient_default = WSClient;
// src/libs/rpcClient.ts
var import_eventemitter33 = __toESM(require("eventemitter3"));
var import_json_rpc_22 = require("json-rpc-2.0");
var import_node_fetch = __toESM(require("node-fetch"));
var RPCClient = /*#__PURE__*/ function(_import_eventemitter33_default) {
    "use strict";
    _inherits(RPCClient, _import_eventemitter33_default);
    var _super = _createSuper(RPCClient);
    function RPCClient(url) {
        var middlewares = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        _classCallCheck(this, RPCClient);
        var _this;
        _this = _super.call(this);
        _this.middlewares = middlewares;
        _this.middleware = new middleware_default();
        middlewares.forEach(function(mw) {
            return _this.middleware.use(mw);
        });
        _this.url = url;
        _this.client = new import_json_rpc_22.JSONRPCClient(function(jsonRPCRequest) {
            return (0, import_node_fetch.default)(_this.url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(jsonRPCRequest)
            }).then(function(response) {
                if (response.status === 200) {
                    return response.json().then(function(jsonRPCResponse) {
                        return _this.client.receive(jsonRPCResponse);
                    });
                }
                if (jsonRPCRequest.id !== void 0) {
                    return Promise.reject(new Error(response.statusText));
                }
                return Promise.reject(new Error("unknown error: ".concat(response.status)));
            });
        });
        return _this;
    }
    _createClass(RPCClient, [
        {
            key: "changeNetwork",
            value: function changeNetwork(url) {
                this.url = url;
            }
        },
        {
            key: "request",
            value: function request(req) {
                var _this = this;
                if (!req.method) return Promise.reject(new Error("RPC call must provide a method"));
                return new Promise(function(resolve, reject) {
                    var callback = function(error, result) {
                        if (error) return reject(error);
                        return resolve(result);
                    };
                    _this.middleware.run(req, callback).then(function() {
                        return _this.client.request(req.method, req.params).then(resolve, reject);
                    });
                });
            }
        },
        {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            key: "disconnect",
            value: function disconnect() {}
        },
        {
            key: "isOpen",
            value: function isOpen() {
                return true;
            }
        }
    ]);
    return RPCClient;
}(import_eventemitter33.default);
var rpcClient_default = RPCClient;
// src/libs/noClient.ts
var import_eventemitter34 = __toESM(require("eventemitter3"));
var RPCClient2 = /*#__PURE__*/ function(_import_eventemitter34_default) {
    "use strict";
    _inherits(RPCClient2, _import_eventemitter34_default);
    var _super = _createSuper(RPCClient2);
    function RPCClient2() {
        var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", middlewares = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        _classCallCheck(this, RPCClient2);
        var _this;
        _this = _super.call(this);
        _this.middlewares = middlewares;
        _this.middleware = new middleware_default();
        middlewares.forEach(function(mw) {
            return _this.middleware.use(mw);
        });
        _this.url = url;
        return _this;
    }
    _createClass(RPCClient2, [
        {
            key: "changeNetwork",
            value: function changeNetwork(url) {
                this.url = url;
            }
        },
        {
            key: "request",
            value: function request(req) {
                var _this = this;
                if (!req.method) return Promise.reject(new Error("RPC call must provide a method"));
                return new Promise(function(resolve, reject) {
                    var callback = function(error, result) {
                        if (error) return reject(error);
                        return resolve(result);
                    };
                    _this.middleware.run(req, callback).then(function() {
                        return reject(new Error("".concat(req.method, " no implemented on noClient")));
                    });
                });
            }
        },
        {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            key: "disconnect",
            value: function disconnect() {}
        },
        {
            key: "isOpen",
            value: function isOpen() {
                return true;
            }
        }
    ]);
    return RPCClient2;
}(import_eventemitter34.default);
var noClient_default = RPCClient2;
// src/index.ts
var src_default = function(url, middlewares, options) {
    if (!url) {
        return new noClient_default(url, middlewares);
    }
    if (/^http(s)?:\/\//i.test(url)) {
        return new rpcClient_default(url, middlewares);
    }
    if (/^ws(s)?:\/\//i.test(url)) {
        return new wsClient_default(url, middlewares, options);
    }
    throw new Error("Unable to set requrst provider: ".concat(url));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestClass: RequestClass
}); /*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */ 
