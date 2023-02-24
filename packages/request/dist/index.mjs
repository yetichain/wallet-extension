// src/types/index.ts
import EventEmitter from "eventemitter3";
var RequestClass = class extends EventEmitter {
  constructor(url, middlewares) {
    super();
    this.url = url;
    this.middlewares = middlewares;
  }
};

// src/libs/wsClient.ts
import { JSONRPCClient } from "json-rpc-2.0";
import EventEmitter2 from "eventemitter3";
import { v4 as uuidv4 } from "uuid";
import IsomorphicWS from "isomorphic-ws";

// src/libs/events.ts
var Event = class {
  constructor(type, target) {
    this.target = target;
    this.type = type;
  }
};
var ErrorEvent = class extends Event {
  constructor(error, target) {
    super("error", target);
    this.message = error.message;
    this.error = error;
  }
};
var CloseEvent = class extends Event {
  // eslint-disable-next-line default-param-last
  constructor(code = 1e3, reason = "", target) {
    super("close", target);
    this.wasClean = true;
    this.code = code;
    this.reason = reason;
  }
};

// src/libs/reconnectingWS.ts
var getGlobalWebSocket = () => {
  if (typeof WebSocket !== "undefined") {
    return WebSocket;
  }
};
var isWebSocket = (w) => typeof w !== "undefined" && !!w && w.CLOSING === 2;
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
var ReconnectingWebSocket = class {
  constructor(url, protocols, options = {}) {
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
     */
    this.onclose = null;
    /**
     * An event listener to be called when an error occurs
     */
    this.onerror = null;
    /**
     * An event listener to be called when a message is received from the server
     */
    this.onmessage = null;
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */
    this.onopen = null;
    this._handleOpen = (event) => {
      this._debug("open event");
      const { minUptime = DEFAULT.minUptime } = this._options;
      clearTimeout(this._connectTimeout);
      this._uptimeTimeout = setTimeout(() => this._acceptOpen(), minUptime);
      this._ws.binaryType = this._binaryType;
      this._messageQueue.forEach((message) => this._ws?.send(message));
      this._messageQueue = [];
      if (this.onopen) {
        this.onopen(event);
      }
      this._listeners.open.forEach(
        (listener) => this._callEventListener(event, listener)
      );
    };
    this._handleMessage = (event) => {
      this._debug("message event");
      if (this.onmessage) {
        this.onmessage(event);
      }
      this._listeners.message.forEach(
        (listener) => this._callEventListener(event, listener)
      );
    };
    this._handleError = (event) => {
      this._debug("error event", event.message);
      this._disconnect(
        void 0,
        event.message === "TIMEOUT" ? "timeout" : void 0
      );
      if (this.onerror) {
        this.onerror(event);
      }
      this._debug("exec error listeners");
      this._listeners.error.forEach(
        (listener) => this._callEventListener(event, listener)
      );
      this._connect();
    };
    this._handleClose = (event) => {
      this._debug("close event");
      this._clearTimeouts();
      if (this._shouldReconnect) {
        this._connect();
      }
      if (this.onclose) {
        this.onclose(event);
      }
      this._listeners.close.forEach(
        (listener) => this._callEventListener(event, listener)
      );
    };
    this._url = url;
    this._protocols = protocols;
    this._options = options;
    if (this._options.startClosed) {
      this._shouldReconnect = false;
    }
    this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return ReconnectingWebSocket.CONNECTING;
  }
  get OPEN() {
    return ReconnectingWebSocket.OPEN;
  }
  get CLOSING() {
    return ReconnectingWebSocket.CLOSING;
  }
  get CLOSED() {
    return ReconnectingWebSocket.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(value) {
    this._binaryType = value;
    if (this._ws) {
      this._ws.binaryType = value;
    }
  }
  /**
   * Returns the number or connection retries
   */
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount() {
    const bytes = this._messageQueue.reduce((acc, message) => {
      if (typeof message === "string") {
        acc += message.length;
      } else if (message instanceof Blob) {
        acc += message.size;
      } else {
        acc += message.byteLength;
      }
      return acc;
    }, 0);
    return bytes + (this._ws ? this._ws.bufferedAmount : 0);
  }
  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState() {
    if (this._ws) {
      return this._ws.readyState;
    }
    return this._options.startClosed ? ReconnectingWebSocket.CLOSED : ReconnectingWebSocket.CONNECTING;
  }
  /**
   * The URL as resolved by the constructor
   */
  get url() {
    return this._ws ? this._ws.url : "";
  }
  /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */
  // eslint-disable-next-line default-param-last
  close(code = 1e3, reason) {
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
  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  reconnect(code, reason) {
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
  /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */
  send(data) {
    if (this._ws && this._ws.readyState === this.OPEN) {
      this._debug("send", data);
      this._ws.send(data);
    } else {
      const { maxEnqueuedMessages = DEFAULT.maxEnqueuedMessages } = this._options;
      if (this._messageQueue.length < maxEnqueuedMessages) {
        this._debug("enqueue", data);
        this._messageQueue.push(data);
      }
    }
  }
  /**
   * Register an event handler of a specific event type
   */
  addEventListener(type, listener) {
    if (this._listeners[type]) {
      this._listeners[type].push(listener);
    }
  }
  dispatchEvent(event) {
    const listeners = this._listeners[event.type];
    if (listeners) {
      for (const listener of listeners) {
        this._callEventListener(event, listener);
      }
    }
    return true;
  }
  /**
   * Removes an event listener
   */
  removeEventListener(type, listener) {
    if (this._listeners[type]) {
      this._listeners[type] = this._listeners[type].filter(
        (l) => l !== listener
      );
    }
  }
  _debug(...args) {
    if (this._options.debug) {
      console.log.apply(console, ["RWS>", ...args]);
    }
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor = DEFAULT.reconnectionDelayGrowFactor,
      minReconnectionDelay = DEFAULT.minReconnectionDelay,
      maxReconnectionDelay = DEFAULT.maxReconnectionDelay
    } = this._options;
    let delay = 0;
    if (this._retryCount > 0) {
      delay = minReconnectionDelay * reconnectionDelayGrowFactor ** (this._retryCount - 1);
      if (delay > maxReconnectionDelay) {
        delay = maxReconnectionDelay;
      }
    }
    this._debug("next delay", delay);
    return delay;
  }
  _wait() {
    return new Promise((resolve) => {
      setTimeout(resolve, this._getNextDelay());
    });
  }
  _getNextUrl(urlProvider) {
    if (typeof urlProvider === "string") {
      return Promise.resolve(urlProvider);
    }
    if (typeof urlProvider === "function") {
      const url = urlProvider();
      if (typeof url === "string") {
        return Promise.resolve(url);
      }
      if (url.then) {
        return url;
      }
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect) {
      return;
    }
    this._connectLock = true;
    const {
      maxRetries = DEFAULT.maxRetries,
      connectionTimeout = DEFAULT.connectionTimeout,
      WebSocket: WebSocket2 = getGlobalWebSocket()
    } = this._options;
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
    this._wait().then(() => this._getNextUrl(this._url)).then((url) => {
      if (this._closeCalled) {
        return;
      }
      this._debug("connect", { url, protocols: this._protocols });
      this._ws = this._protocols ? new WebSocket2(url, this._protocols, this._options.wsOptions) : new WebSocket2(url);
      this._ws.binaryType = this._binaryType;
      this._connectLock = false;
      this._addListeners();
      this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        connectionTimeout
      );
    });
  }
  _handleTimeout() {
    this._debug("timeout event");
    this._handleError(new ErrorEvent(Error("TIMEOUT"), this));
  }
  // eslint-disable-next-line default-param-last
  _disconnect(code = 1e3, reason) {
    this._clearTimeouts();
    if (!this._ws) {
      return;
    }
    this._removeListeners();
    try {
      this._ws.close(code, reason);
      this._handleClose(new CloseEvent(code, reason, this));
    } catch (error) {
    }
  }
  _acceptOpen() {
    this._debug("accept open");
    this._retryCount = 0;
  }
  _callEventListener(event, listener) {
    if ("handleEvent" in listener) {
      listener.handleEvent(event);
    } else {
      listener(event);
    }
  }
  _removeListeners() {
    if (!this._ws) {
      return;
    }
    this._debug("removeListeners");
    this._ws.removeEventListener("open", this._handleOpen);
    this._ws.removeEventListener("close", this._handleClose);
    this._ws.removeEventListener("message", this._handleMessage);
    this._ws.removeEventListener("error", this._handleError);
  }
  _addListeners() {
    if (!this._ws) {
      return;
    }
    this._debug("addListeners");
    this._ws.addEventListener("open", this._handleOpen);
    this._ws.addEventListener("close", this._handleClose);
    this._ws.addEventListener("message", this._handleMessage);
    this._ws.addEventListener("error", this._handleError);
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout);
    clearTimeout(this._uptimeTimeout);
  }
};

// src/libs/middleware.ts
var Middleware = class {
  constructor(middlewares = []) {
    this.middlewares = middlewares;
  }
  use(fn) {
    this.middlewares.push(fn);
  }
  executeMiddleware(req, res, done) {
    this.middlewares.reduceRight(
      (_done, next) => () => next(req, res, _done),
      done
    )(req, res);
  }
  run(req, res) {
    return new Promise((resolve) => {
      this.executeMiddleware(req, res, resolve);
    });
  }
};
var middleware_default = Middleware;

// src/libs/wsClient.ts
var WSClient = class extends EventEmitter2 {
  constructor(url, middlewares, wsOptions = {}) {
    super();
    this.queue = {};
    this.wsOptions = wsOptions;
    this.changeNetwork(url);
    this.middlewares = middlewares;
    this.middleware = new middleware_default();
    middlewares.forEach((mw) => this.middleware.use(mw));
    this.client = new JSONRPCClient((request) => {
      try {
        this.ws.send(JSON.stringify(request));
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  changeNetwork(url) {
    this.url = url;
    this.ws = new ReconnectingWebSocket(this.url, [], {
      WebSocket: IsomorphicWS,
      wsOptions: this.wsOptions
    });
    this.setListeners();
  }
  setListeners() {
    this.ws.onmessage = (event) => {
      const json = JSON.parse(event.data.toString());
      if (json.method && !json.id) {
        this.emit("notification", json);
      } else {
        this.client.receive(json);
      }
    };
    this.ws.onclose = (event) => {
      this.client.rejectAllPendingRequests(
        `Connection is closed (${event.reason}).`
      );
    };
    this.ws.onopen = () => {
      const curQueue = Object.keys(this.queue);
      if (curQueue.length) {
        curQueue.forEach((id) => {
          const item = this.queue[id];
          this.request(item.request).then(item.resolve).catch(item.reject);
          delete this.queue[id];
        });
      }
    };
  }
  request(req) {
    if (!req.method)
      return Promise.resolve({
        error: "RPC call must provide a method"
      });
    if (this.isOpen()) {
      return new Promise((resolve, reject) => {
        const callback = (error, result) => {
          if (error)
            return reject(error);
          return resolve(result);
        };
        this.middleware.run(req, callback).then(
          () => this.client.request(req.method, req.params).then(
            (res) => {
              resolve(res);
            },
            (error) => {
              reject(error);
            }
          )
        );
      });
    }
    return new Promise((resolve, reject) => {
      this.queue[uuidv4()] = {
        resolve,
        reject,
        request: req
      };
    });
  }
  isOpen() {
    return this.ws.readyState === 1;
  }
  disconnect() {
    this.ws.close();
  }
};
var wsClient_default = WSClient;

// src/libs/rpcClient.ts
import EventEmitter3 from "eventemitter3";
import { JSONRPCClient as JSONRPCClient2 } from "json-rpc-2.0";
import fetch from "node-fetch";
var RPCClient = class extends EventEmitter3 {
  constructor(url, middlewares = []) {
    super();
    this.middlewares = middlewares;
    this.middleware = new middleware_default();
    middlewares.forEach((mw) => this.middleware.use(mw));
    this.url = url;
    this.client = new JSONRPCClient2(
      (jsonRPCRequest) => fetch(this.url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(jsonRPCRequest)
      }).then((response) => {
        if (response.status === 200) {
          return response.json().then((jsonRPCResponse) => this.client.receive(jsonRPCResponse));
        }
        if (jsonRPCRequest.id !== void 0) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.reject(new Error(`unknown error: ${response.status}`));
      })
    );
  }
  changeNetwork(url) {
    this.url = url;
  }
  request(req) {
    if (!req.method)
      return Promise.reject(new Error("RPC call must provide a method"));
    return new Promise((resolve, reject) => {
      const callback = (error, result) => {
        if (error)
          return reject(error);
        return resolve(result);
      };
      this.middleware.run(req, callback).then(
        () => this.client.request(req.method, req.params).then(resolve, reject)
      );
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {
  }
  isOpen() {
    return true;
  }
};
var rpcClient_default = RPCClient;

// src/libs/noClient.ts
import EventEmitter4 from "eventemitter3";
var RPCClient2 = class extends EventEmitter4 {
  constructor(url = "", middlewares = []) {
    super();
    this.middlewares = middlewares;
    this.middleware = new middleware_default();
    middlewares.forEach((mw) => this.middleware.use(mw));
    this.url = url;
  }
  changeNetwork(url) {
    this.url = url;
  }
  request(req) {
    if (!req.method)
      return Promise.reject(new Error("RPC call must provide a method"));
    return new Promise((resolve, reject) => {
      const callback = (error, result) => {
        if (error)
          return reject(error);
        return resolve(result);
      };
      this.middleware.run(req, callback).then(
        () => reject(new Error(`${req.method} no implemented on noClient`))
      );
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {
  }
  isOpen() {
    return true;
  }
};
var noClient_default = RPCClient2;

// src/index.ts
var src_default = (url, middlewares, options) => {
  if (!url) {
    return new noClient_default(url, middlewares);
  }
  if (/^http(s)?:\/\//i.test(url)) {
    return new rpcClient_default(url, middlewares);
  }
  if (/^ws(s)?:\/\//i.test(url)) {
    return new wsClient_default(url, middlewares, options);
  }
  throw new Error(`Unable to set requrst provider: ${url}`);
};
export {
  RequestClass,
  src_default as default
};
/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
