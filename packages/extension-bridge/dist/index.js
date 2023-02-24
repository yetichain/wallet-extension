function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
    Stream: function() {
        return Stream;
    },
    allowWindowMessaging: function() {
        return allowWindowMessaging;
    },
    getCurrentContext: function() {
        return getCurrentContext;
    },
    isInternalEndpoint: function() {
        return isInternalEndpoint;
    },
    onMessage: function() {
        return onMessage;
    },
    onOpenStreamChannel: function() {
        return onOpenStreamChannel;
    },
    openStream: function() {
        return openStream;
    },
    parseEndpoint: function() {
        return parseEndpoint;
    },
    sendMessage: function() {
        return sendMessage;
    },
    setNamespace: function() {
        return setNamespace;
    }
});
module.exports = __toCommonJS(src_exports);
// src/stream.ts
var import_nanoevents = require("nanoevents");
// src/internal.ts
var import_webextension_polyfill2 = __toESM(require("webextension-polyfill"));
var import_serialize_error = require("serialize-error");
var import_tiny_uid = __toESM(require("tiny-uid"));
// src/utils.ts
var import_webextension_polyfill = __toESM(require("webextension-polyfill"));
var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window|new-window)(?:@(\d+)(?:\.(\d+))?)?$/;
var parseEndpoint = function(endpoint) {
    var _ref = _slicedToArray(endpoint.match(ENDPOINT_RE) || [], 4), context2 = _ref[1], tabId = _ref[2], frameId = _ref[3];
    return {
        context: context2,
        tabId: +tabId,
        frameId: frameId ? +frameId : void 0
    };
};
var isInternalEndpoint = function(param) {
    var ctx = param.context;
    return [
        "content-script",
        "background",
        "devtools"
    ].includes(ctx);
};
var hasAPI = function(nsps) {
    return import_webextension_polyfill.default[nsps];
};
var getBackgroundPageType = function() {
    var _manifest_browser_action, _manifest_action, _manifest_options_ui, _window_location;
    var manifest = import_webextension_polyfill.default.runtime.getManifest();
    if (typeof window === "undefined") return "background";
    var popupPage = ((_manifest_browser_action = manifest.browser_action) === null || _manifest_browser_action === void 0 ? void 0 : _manifest_browser_action.default_popup) || ((_manifest_action = manifest.action) === null || _manifest_action === void 0 ? void 0 : _manifest_action.default_popup);
    if (popupPage) {
        var url = new URL(import_webextension_polyfill.default.runtime.getURL(popupPage));
        if (url.pathname === window.location.pathname) return "popup";
    }
    if ((_manifest_options_ui = manifest.options_ui) === null || _manifest_options_ui === void 0 ? void 0 : _manifest_options_ui.page) {
        var url1 = new URL(import_webextension_polyfill.default.runtime.getURL(manifest.options_ui.page));
        if (url1.pathname === window.location.pathname) return "options";
    }
    if ((window === null || window === void 0 ? void 0 : (_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.pathname) === "/index.html") {
        return "new-window";
    }
    return "background";
};
// src/internal.ts
var context = hasAPI("devtools") ? "devtools" : hasAPI("tabs") ? getBackgroundPageType() : hasAPI("extension") ? "content-script" : typeof document !== "undefined" ? "window" : null;
var runtimeId = (0, import_tiny_uid.default)();
var openTransactions = /* @__PURE__ */ new Map();
var onMessageListeners = /* @__PURE__ */ new Map();
var messageQueue = /* @__PURE__ */ new Set();
var portMap = /* @__PURE__ */ new Map();
var port = null;
var namespace;
var isWindowMessagingAllowed;
var setNamespace = function(nsps) {
    namespace = nsps;
};
var allowWindowMessaging = function(nsps) {
    isWindowMessagingAllowed = true;
    namespace = nsps;
};
var handleInboundMessage = function() {
    var _ref = _asyncToGenerator(function(message) {
        var transactionId, messageID, messageType, handleReply, handleNewMessage;
        return __generator(this, function(_state) {
            transactionId = message.transactionId, messageID = message.messageID, messageType = message.messageType;
            handleReply = function() {
                var transactionP = openTransactions.get(transactionId);
                if (transactionP) {
                    var err = message.err, data = message.data;
                    if (err) {
                        var dehydratedErr = err;
                        var errCtr = self[dehydratedErr.name];
                        var hydratedErr = new (typeof errCtr === "function" ? errCtr : Error)(dehydratedErr.message);
                        Object.keys(dehydratedErr).forEach(function(prop) {
                            hydratedErr[prop] = dehydratedErr[prop];
                        });
                        transactionP.reject(hydratedErr);
                    } else {
                        transactionP.resolve(data);
                    }
                    openTransactions.delete(transactionId);
                }
            };
            handleNewMessage = function() {
                var _ref = _asyncToGenerator(function() {
                    var reply, err, noHandlerFoundError, cb, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                noHandlerFoundError = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    5,
                                    6,
                                    7
                                ]);
                                cb = onMessageListeners.get(messageID);
                                if (!(typeof cb === "function")) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    cb({
                                        sender: message.origin,
                                        id: messageID,
                                        data: message.data,
                                        timestamp: message.timestamp
                                    })
                                ];
                            case 2:
                                reply = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                noHandlerFoundError = true;
                                throw new Error("[webext-bridge] No handler registered in '".concat(context, "' to accept messages with id '").concat(messageID, "'"));
                            case 4:
                                return [
                                    3,
                                    7
                                ];
                            case 5:
                                error = _state.sent();
                                err = error;
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                if (err) message.err = (0, import_serialize_error.serializeError)(err);
                                routeMessage(_objectSpreadProps(_objectSpread({}, message), {
                                    messageType: "reply",
                                    data: reply,
                                    origin: {
                                        context: context,
                                        tabId: null
                                    },
                                    destination: message.origin,
                                    hops: []
                                }));
                                if (err && !noHandlerFoundError) throw reply;
                                return [
                                    7
                                ];
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function handleNewMessage() {
                    return _ref.apply(this, arguments);
                };
            }();
            switch(messageType){
                case "reply":
                    return [
                        2,
                        handleReply()
                    ];
                case "message":
                    return [
                        2,
                        handleNewMessage()
                    ];
                default:
                    throw new Error("unknown message type");
            }
            return [
                2
            ];
        });
    });
    return function handleInboundMessage(message) {
        return _ref.apply(this, arguments);
    };
}();
var initIntercoms = function() {
    if (context === null) throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
    if (context === "window" || context === "content-script") window.addEventListener("message", handleWindowOnMessage);
    if (context === "content-script") {
        var connectToBackgroundWithDisconnect = function() {
            port = import_webextension_polyfill2.default.runtime.connect();
            port.onMessage.addListener(function(message) {
                routeMessage(message);
            });
            port.onDisconnect.addListener(function() {
                port = null;
                initIntercoms();
            });
        };
        connectToBackgroundWithDisconnect();
    }
    if (context === "devtools") {
        var tabId = import_webextension_polyfill2.default.devtools.inspectedWindow.tabId;
        var name = "devtools@".concat(tabId);
        var connectToBackgroundWithDisconnect1 = function() {
            port = import_webextension_polyfill2.default.runtime.connect(void 0, {
                name: name
            });
            port.onMessage.addListener(function(message) {
                routeMessage(message);
            });
            port.onDisconnect.addListener(function() {
                port = null;
                initIntercoms();
            });
        };
        connectToBackgroundWithDisconnect1();
    }
    if (context === "popup" || context === "options" || context === "new-window") {
        var name1 = "".concat(context);
        var connectToBackgroundWithDisconnect2 = function() {
            port = import_webextension_polyfill2.default.runtime.connect(void 0, {
                name: name1
            });
            port.onMessage.addListener(function(message) {
                routeMessage(message);
            });
            port.onDisconnect.addListener(function() {
                port = null;
                initIntercoms();
            });
        };
        connectToBackgroundWithDisconnect2();
    }
    if (context === "background") {
        import_webextension_polyfill2.default.runtime.onConnect.addListener(function(incomingPort) {
            var portId = incomingPort.name || "content-script@".concat(incomingPort.sender.tab.id);
            if (portId === "new-window") portId = "new-window@".concat(incomingPort.sender.tab.id);
            var portFrame = incomingPort.sender.frameId;
            if (portFrame) portId = "".concat(portId, ".").concat(portFrame);
            var _parseEndpoint = parseEndpoint(portId), _context = _parseEndpoint.context, linkedTabId = _parseEndpoint.tabId;
            if (!linkedTabId && _context !== "popup" && _context !== "options" && _context !== "new-window") return;
            portMap.set(portId, incomingPort);
            messageQueue.forEach(function(queuedMsg) {
                if (queuedMsg.resolvedDestination === portId) {
                    incomingPort.postMessage(queuedMsg.message);
                    messageQueue.delete(queuedMsg);
                }
            });
            incomingPort.onDisconnect.addListener(function() {
                portMap.delete(portId);
                incomingPort = null;
            });
            if (chrome) {
                setTimeout(function() {
                    if (incomingPort) {
                        portMap.delete(portId);
                        incomingPort.disconnect();
                        incomingPort = null;
                    }
                }, 25e4);
            }
            incomingPort.onMessage.addListener(function(message) {
                var _message_origin;
                if (message === null || message === void 0 ? void 0 : (_message_origin = message.origin) === null || _message_origin === void 0 ? void 0 : _message_origin.context) {
                    message.origin.tabId = linkedTabId;
                    if (portFrame) message.origin.frameId = portFrame;
                    routeMessage(message);
                }
            });
        });
    }
};
initIntercoms();
var routeMessage = function(message) {
    var origin = message.origin, destination = message.destination;
    if (message.hops.includes(runtimeId)) return;
    message.hops.push(runtimeId);
    if (context === "content-script" && [
        destination,
        origin
    ].some(function(endpoint) {
        return (endpoint === null || endpoint === void 0 ? void 0 : endpoint.context) === "window";
    }) && !isWindowMessagingAllowed) return;
    if (!destination) {
        handleInboundMessage(message);
        return;
    }
    if (destination.context) {
        if (context === "window") {
            routeMessageThroughWindow(window, message);
        } else if (context === "content-script" && destination.context === "window") {
            message.destination = null;
            routeMessageThroughWindow(window, message);
        } else if ([
            "devtools",
            "content-script",
            "popup",
            "options",
            "new-window"
        ].includes(context)) {
            if (destination.context === "background") message.destination = null;
            port.postMessage(message);
        } else if (context === "background") {
            var destName = destination.context, destTabId = destination.tabId, destFrameId = destination.frameId;
            var srcTabId = origin.tabId;
            if (destName !== "window") {
                message.destination = null;
            } else {
                message.destination.tabId = null;
            }
            var resolvedDestination = [
                "popup",
                "options"
            ].includes(destName) ? destName : "".concat(destName === "window" ? "content-script" : destName, "@").concat(destTabId || srcTabId);
            if (destFrameId) resolvedDestination = "".concat(resolvedDestination, ".").concat(destFrameId);
            var destPort = portMap.get(resolvedDestination);
            if (destPort) destPort.postMessage(message);
            else messageQueue.add({
                resolvedDestination: resolvedDestination,
                message: message
            });
        }
    }
};
var assertInternalMessage = function(_msg) {};
function handleWindowOnMessage(_) {
    return _handleWindowOnMessage.apply(this, arguments);
}
function _handleWindowOnMessage() {
    _handleWindowOnMessage = _asyncToGenerator(function(param) {
        var data, ports, msgPort, payload;
        return __generator(this, function(_state) {
            data = param.data, ports = param.ports;
            if (context === "content-script" && !isWindowMessagingAllowed) return [
                2
            ];
            if (data.cmd === "__crx_bridge_verify_listening" && data.scope === namespace && data.context !== context) {
                msgPort = ports[0];
                msgPort.postMessage(true);
            } else if (data.cmd === "__crx_bridge_route_message" && data.scope === namespace && data.context !== context) {
                payload = _objectSpread({}, data.payload);
                assertInternalMessage(payload);
                if (context === "content-script") {
                    payload.origin = {
                        context: "window",
                        tabId: null
                    };
                    if (payload.destination.context === "content-script") delete payload.destination;
                }
                routeMessage(payload);
            }
            return [
                2
            ];
        });
    });
    return _handleWindowOnMessage.apply(this, arguments);
}
var routeMessageThroughWindow = function(win, msg) {
    ensureNamespaceSet();
    var channel = new MessageChannel();
    var retry = setTimeout(function() {
        channel.port1.onmessage = null;
        routeMessageThroughWindow(win, msg);
    }, 300);
    channel.port1.onmessage = function() {
        clearTimeout(retry);
        win.postMessage({
            cmd: "__crx_bridge_route_message",
            scope: namespace,
            context: context,
            payload: msg
        }, "*");
    };
    win.postMessage({
        cmd: "__crx_bridge_verify_listening",
        scope: namespace,
        context: context
    }, "*", [
        channel.port2
    ]);
};
function ensureNamespaceSet() {
    if (typeof namespace !== "string" || namespace.length === 0) {
        throw new Error("webext-bridge uses window.postMessage to talk with other \"window\"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used`");
    }
}
function getCurrentContext() {
    return context;
}
// src/apis/onMessage.ts
function onMessage(messageID, callback) {
    onMessageListeners.set(messageID, callback);
}
// src/apis/sendMessage.ts
var import_tiny_uid2 = __toESM(require("tiny-uid"));
function sendMessage(messageID, data) {
    return _sendMessage.apply(this, arguments);
}
function _sendMessage() {
    _sendMessage = _asyncToGenerator(function(messageID, data) {
        var destination, endpoint, errFn, dest, destTabId;
        var _arguments = arguments;
        return __generator(this, function(_state) {
            destination = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : "background";
            endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
            errFn = "Bridge#sendMessage ->";
            if (!endpoint.context) throw new TypeError("".concat(errFn, " Destination must be any one of known destinations"));
            if (context === "background") {
                dest = endpoint.context, destTabId = endpoint.tabId;
                if (dest !== "background" && !destTabId) throw new TypeError("".concat(errFn, " When sending messages from background page, use @tabId syntax to target specific tab"));
            }
            return [
                2,
                new Promise(function(resolve, reject) {
                    var payload = {
                        messageID: messageID,
                        data: data,
                        destination: endpoint,
                        messageType: "message",
                        transactionId: (0, import_tiny_uid2.default)(),
                        origin: {
                            context: context,
                            tabId: null
                        },
                        hops: [],
                        timestamp: Date.now()
                    };
                    openTransactions.set(payload.transactionId, {
                        resolve: resolve,
                        reject: reject
                    });
                    routeMessage(payload);
                })
            ];
        });
    });
    return _sendMessage.apply(this, arguments);
}
// src/stream.ts
var _Stream = /*#__PURE__*/ function() {
    "use strict";
    function _Stream1(t) {
        var _this = this;
        _classCallCheck(this, _Stream1);
        this.handleStreamClose = function() {
            if (!_this.isClosed) {
                _this.isClosed = true;
                _this.emitter.emit("closed", true);
                _this.emitter.events = {};
            }
        };
        this.internalInfo = t;
        this.emitter = (0, import_nanoevents.createNanoEvents)();
        this.isClosed = false;
        if (!_Stream.initDone) {
            onMessage("__crx_bridge_stream_transfer__", function(msg) {
                var _msg_data = msg.data, streamId = _msg_data.streamId, streamTransfer = _msg_data.streamTransfer, action = _msg_data.action;
                var stream = _Stream.openStreams.get(streamId);
                if (stream && !stream.isClosed) {
                    if (action === "transfer") stream.emitter.emit("message", streamTransfer);
                    if (action === "close") {
                        _Stream.openStreams.delete(streamId);
                        stream.handleStreamClose();
                    }
                }
            });
            _Stream.initDone = true;
        }
        _Stream.openStreams.set(t.streamId, this);
    }
    _createClass(_Stream1, [
        {
            key: "info",
            get: /**
   * Returns stream info
   */ function get() {
                return this.internalInfo;
            }
        },
        {
            /**
   * Sends a message to other endpoint.
   * Will trigger onMessage on the other side.
   *
   * Warning: Before sending sensitive data, verify the endpoint using `stream.info.endpoint.isInternal()`
   * The other side could be malicious webpage speaking same language as webext-bridge
   * @param msg
   */ key: "send",
            value: function send(msg) {
                if (this.isClosed) throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
                sendMessage("__crx_bridge_stream_transfer__", {
                    streamId: this.internalInfo.streamId,
                    streamTransfer: msg,
                    action: "transfer"
                }, this.internalInfo.endpoint);
            }
        },
        {
            /**
   * Closes the stream.
   * Will trigger stream.onClose(<callback>) on both endpoints.
   * If needed again, spawn a new Stream, as this instance cannot be re-opened
   * @param msg
   */ key: "close",
            value: function close(msg) {
                if (msg) this.send(msg);
                this.handleStreamClose();
                sendMessage("__crx_bridge_stream_transfer__", {
                    streamId: this.internalInfo.streamId,
                    streamTransfer: null,
                    action: "close"
                }, this.internalInfo.endpoint);
            }
        },
        {
            /**
   * Registers a callback to fire whenever other endpoint sends a message
   * @param callback
   */ key: "onMessage",
            value: function onMessage(callback) {
                return this.getDisposable("message", callback);
            }
        },
        {
            /**
   * Registers a callback to fire whenever stream.close() is called on either endpoint
   * @param callback
   */ key: "onClose",
            value: function onClose(callback) {
                return this.getDisposable("closed", callback);
            }
        },
        {
            key: "getDisposable",
            value: function getDisposable(event, callback) {
                var off = this.emitter.on(event, callback);
                return Object.assign(off, {
                    dispose: off,
                    close: off
                });
            }
        }
    ]);
    return _Stream1;
}();
var Stream = _Stream;
Stream.initDone = false;
// eslint-disable-next-line no-use-before-define
Stream.openStreams = /* @__PURE__ */ new Map();
// src/bridge.ts
var import_tiny_uid3 = __toESM(require("tiny-uid"));
var import_nanoevents2 = require("nanoevents");
var openStreams = /* @__PURE__ */ new Map();
var onOpenStreamCallbacks = /* @__PURE__ */ new Map();
var streamyEmitter = (0, import_nanoevents2.createNanoEvents)();
onMessage("__crx_bridge_stream_open__", function(message) {
    return new Promise(function(resolve) {
        var sender = message.sender, data = message.data;
        var channel = data.channel;
        var watching = false;
        var off;
        var readyup = function() {
            var callback = onOpenStreamCallbacks.get(channel);
            if (typeof callback === "function") {
                callback(new Stream(_objectSpreadProps(_objectSpread({}, data), {
                    endpoint: sender
                })));
                if (watching) off();
                resolve(true);
            } else if (!watching) {
                watching = true;
                off = streamyEmitter.on("did-change-stream-callbacks", readyup);
            }
        };
        readyup();
    });
});
function openStream(channel, destination) {
    return _openStream.apply(this, arguments);
}
function _openStream() {
    _openStream = _asyncToGenerator(function(channel, destination) {
        var endpoint, streamInfo, stream;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (openStreams.has(channel)) throw new Error("webext-bridge: A Stream is already open at this channel");
                    endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
                    streamInfo = {
                        streamId: (0, import_tiny_uid3.default)(),
                        channel: channel,
                        endpoint: endpoint
                    };
                    stream = new Stream(streamInfo);
                    stream.onClose(function() {
                        return openStreams.delete(channel);
                    });
                    return [
                        4,
                        sendMessage("__crx_bridge_stream_open__", streamInfo, endpoint)
                    ];
                case 1:
                    _state.sent();
                    openStreams.set(channel, stream);
                    return [
                        2,
                        stream
                    ];
            }
        });
    });
    return _openStream.apply(this, arguments);
}
function onOpenStreamChannel(channel, callback) {
    if (onOpenStreamCallbacks.has(channel)) throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
    onOpenStreamCallbacks.set(channel, callback);
    streamyEmitter.emit("did-change-stream-callbacks");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Stream: Stream,
    allowWindowMessaging: allowWindowMessaging,
    getCurrentContext: getCurrentContext,
    isInternalEndpoint: isInternalEndpoint,
    onMessage: onMessage,
    onOpenStreamChannel: onOpenStreamChannel,
    openStream: openStream,
    parseEndpoint: parseEndpoint,
    sendMessage: sendMessage,
    setNamespace: setNamespace
});
