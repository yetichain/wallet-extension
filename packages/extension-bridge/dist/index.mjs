import "./chunk-WBQAMGXK.mjs";

// src/stream.ts
import { createNanoEvents } from "nanoevents";

// src/internal.ts
import browser2 from "webextension-polyfill";
import { serializeError } from "serialize-error";
import uuid from "tiny-uid";

// src/utils.ts
import browser from "webextension-polyfill";
var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window|new-window)(?:@(\d+)(?:\.(\d+))?)?$/;
var parseEndpoint = (endpoint) => {
  const [, context2, tabId, frameId] = endpoint.match(ENDPOINT_RE) || [];
  return {
    context: context2,
    tabId: +tabId,
    frameId: frameId ? +frameId : void 0
  };
};
var isInternalEndpoint = ({ context: ctx }) => ["content-script", "background", "devtools"].includes(ctx);
var hasAPI = (nsps) => browser[nsps];
var getBackgroundPageType = () => {
  const manifest = browser.runtime.getManifest();
  if (typeof window === "undefined")
    return "background";
  const popupPage = manifest.browser_action?.default_popup || manifest.action?.default_popup;
  if (popupPage) {
    const url = new URL(browser.runtime.getURL(popupPage));
    if (url.pathname === window.location.pathname)
      return "popup";
  }
  if (manifest.options_ui?.page) {
    const url = new URL(browser.runtime.getURL(manifest.options_ui.page));
    if (url.pathname === window.location.pathname)
      return "options";
  }
  if (window?.location?.pathname === "/index.html") {
    return "new-window";
  }
  return "background";
};

// src/internal.ts
var context = hasAPI("devtools") ? "devtools" : hasAPI("tabs") ? getBackgroundPageType() : hasAPI("extension") ? "content-script" : typeof document !== "undefined" ? "window" : null;
var runtimeId = uuid();
var openTransactions = /* @__PURE__ */ new Map();
var onMessageListeners = /* @__PURE__ */ new Map();
var messageQueue = /* @__PURE__ */ new Set();
var portMap = /* @__PURE__ */ new Map();
var port = null;
var namespace;
var isWindowMessagingAllowed;
var setNamespace = (nsps) => {
  namespace = nsps;
};
var allowWindowMessaging = (nsps) => {
  isWindowMessagingAllowed = true;
  namespace = nsps;
};
var handleInboundMessage = async (message) => {
  const { transactionId, messageID, messageType } = message;
  const handleReply = () => {
    const transactionP = openTransactions.get(transactionId);
    if (transactionP) {
      const { err, data } = message;
      if (err) {
        const dehydratedErr = err;
        const errCtr = self[dehydratedErr.name];
        const hydratedErr = new (typeof errCtr === "function" ? errCtr : Error)(
          dehydratedErr.message
        );
        Object.keys(dehydratedErr).forEach((prop) => {
          hydratedErr[prop] = dehydratedErr[prop];
        });
        transactionP.reject(hydratedErr);
      } else {
        transactionP.resolve(data);
      }
      openTransactions.delete(transactionId);
    }
  };
  const handleNewMessage = async () => {
    let reply;
    let err;
    let noHandlerFoundError = false;
    try {
      const cb = onMessageListeners.get(messageID);
      if (typeof cb === "function") {
        reply = await cb({
          sender: message.origin,
          id: messageID,
          data: message.data,
          timestamp: message.timestamp
        });
      } else {
        noHandlerFoundError = true;
        throw new Error(
          `[webext-bridge] No handler registered in '${context}' to accept messages with id '${messageID}'`
        );
      }
    } catch (error) {
      err = error;
    } finally {
      if (err)
        message.err = serializeError(err);
      routeMessage({
        ...message,
        messageType: "reply",
        data: reply,
        origin: { context, tabId: null },
        destination: message.origin,
        hops: []
      });
      if (err && !noHandlerFoundError)
        throw reply;
    }
  };
  switch (messageType) {
    case "reply":
      return handleReply();
    case "message":
      return handleNewMessage();
    default:
      throw new Error("unknown message type");
  }
};
var initIntercoms = () => {
  if (context === null)
    throw new Error(
      "Unable to detect runtime context i.e webext-bridge can't figure out what to do"
    );
  if (context === "window" || context === "content-script")
    window.addEventListener("message", handleWindowOnMessage);
  if (context === "content-script") {
    const connectToBackgroundWithDisconnect = () => {
      port = browser2.runtime.connect();
      port.onMessage.addListener((message) => {
        routeMessage(message);
      });
      port.onDisconnect.addListener(() => {
        port = null;
        initIntercoms();
      });
    };
    connectToBackgroundWithDisconnect();
  }
  if (context === "devtools") {
    const { tabId } = browser2.devtools.inspectedWindow;
    const name = `devtools@${tabId}`;
    const connectToBackgroundWithDisconnect = () => {
      port = browser2.runtime.connect(void 0, { name });
      port.onMessage.addListener((message) => {
        routeMessage(message);
      });
      port.onDisconnect.addListener(() => {
        port = null;
        initIntercoms();
      });
    };
    connectToBackgroundWithDisconnect();
  }
  if (context === "popup" || context === "options" || context === "new-window") {
    const name = `${context}`;
    const connectToBackgroundWithDisconnect = () => {
      port = browser2.runtime.connect(void 0, { name });
      port.onMessage.addListener((message) => {
        routeMessage(message);
      });
      port.onDisconnect.addListener(() => {
        port = null;
        initIntercoms();
      });
    };
    connectToBackgroundWithDisconnect();
  }
  if (context === "background") {
    browser2.runtime.onConnect.addListener((incomingPort) => {
      let portId = incomingPort.name || `content-script@${incomingPort.sender.tab.id}`;
      if (portId === "new-window")
        portId = `new-window@${incomingPort.sender.tab.id}`;
      const portFrame = incomingPort.sender.frameId;
      if (portFrame)
        portId = `${portId}.${portFrame}`;
      const { context: _context, tabId: linkedTabId } = parseEndpoint(portId);
      if (!linkedTabId && _context !== "popup" && _context !== "options" && _context !== "new-window")
        return;
      portMap.set(portId, incomingPort);
      messageQueue.forEach((queuedMsg) => {
        if (queuedMsg.resolvedDestination === portId) {
          incomingPort.postMessage(queuedMsg.message);
          messageQueue.delete(queuedMsg);
        }
      });
      incomingPort.onDisconnect.addListener(() => {
        portMap.delete(portId);
        incomingPort = null;
      });
      if (chrome) {
        setTimeout(() => {
          if (incomingPort) {
            portMap.delete(portId);
            incomingPort.disconnect();
            incomingPort = null;
          }
        }, 25e4);
      }
      incomingPort.onMessage.addListener((message) => {
        if (message?.origin?.context) {
          message.origin.tabId = linkedTabId;
          if (portFrame)
            message.origin.frameId = portFrame;
          routeMessage(message);
        }
      });
    });
  }
};
initIntercoms();
var routeMessage = (message) => {
  const { origin, destination } = message;
  if (message.hops.includes(runtimeId))
    return;
  message.hops.push(runtimeId);
  if (context === "content-script" && [destination, origin].some((endpoint) => endpoint?.context === "window") && !isWindowMessagingAllowed)
    return;
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
    } else if (["devtools", "content-script", "popup", "options", "new-window"].includes(
      context
    )) {
      if (destination.context === "background")
        message.destination = null;
      port.postMessage(message);
    } else if (context === "background") {
      const {
        context: destName,
        tabId: destTabId,
        frameId: destFrameId
      } = destination;
      const { tabId: srcTabId } = origin;
      if (destName !== "window") {
        message.destination = null;
      } else {
        message.destination.tabId = null;
      }
      let resolvedDestination = ["popup", "options"].includes(destName) ? destName : `${destName === "window" ? "content-script" : destName}@${destTabId || srcTabId}`;
      if (destFrameId)
        resolvedDestination = `${resolvedDestination}.${destFrameId}`;
      const destPort = portMap.get(resolvedDestination);
      if (destPort)
        destPort.postMessage(message);
      else
        messageQueue.add({ resolvedDestination, message });
    }
  }
};
var assertInternalMessage = (_msg) => {
};
async function handleWindowOnMessage({ data, ports }) {
  if (context === "content-script" && !isWindowMessagingAllowed)
    return;
  if (data.cmd === "__crx_bridge_verify_listening" && data.scope === namespace && data.context !== context) {
    const msgPort = ports[0];
    msgPort.postMessage(true);
  } else if (data.cmd === "__crx_bridge_route_message" && data.scope === namespace && data.context !== context) {
    const payload = { ...data.payload };
    assertInternalMessage(payload);
    if (context === "content-script") {
      payload.origin = {
        context: "window",
        tabId: null
      };
      if (payload.destination.context === "content-script")
        delete payload.destination;
    }
    routeMessage(payload);
  }
}
var routeMessageThroughWindow = (win, msg) => {
  ensureNamespaceSet();
  const channel = new MessageChannel();
  const retry = setTimeout(() => {
    channel.port1.onmessage = null;
    routeMessageThroughWindow(win, msg);
  }, 300);
  channel.port1.onmessage = () => {
    clearTimeout(retry);
    win.postMessage(
      {
        cmd: "__crx_bridge_route_message",
        scope: namespace,
        context,
        payload: msg
      },
      "*"
    );
  };
  win.postMessage(
    {
      cmd: "__crx_bridge_verify_listening",
      scope: namespace,
      context
    },
    "*",
    [channel.port2]
  );
};
function ensureNamespaceSet() {
  if (typeof namespace !== "string" || namespace.length === 0) {
    throw new Error(
      `webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``
    );
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
import uuid2 from "tiny-uid";
async function sendMessage(messageID, data, destination = "background") {
  const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
  const errFn = "Bridge#sendMessage ->";
  if (!endpoint.context)
    throw new TypeError(
      `${errFn} Destination must be any one of known destinations`
    );
  if (context === "background") {
    const { context: dest, tabId: destTabId } = endpoint;
    if (dest !== "background" && !destTabId)
      throw new TypeError(
        `${errFn} When sending messages from background page, use @tabId syntax to target specific tab`
      );
  }
  return new Promise((resolve, reject) => {
    const payload = {
      messageID,
      data,
      destination: endpoint,
      messageType: "message",
      transactionId: uuid2(),
      origin: { context, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    openTransactions.set(payload.transactionId, { resolve, reject });
    routeMessage(payload);
  });
}

// src/stream.ts
var _Stream = class {
  constructor(t) {
    this.handleStreamClose = () => {
      if (!this.isClosed) {
        this.isClosed = true;
        this.emitter.emit("closed", true);
        this.emitter.events = {};
      }
    };
    this.internalInfo = t;
    this.emitter = createNanoEvents();
    this.isClosed = false;
    if (!_Stream.initDone) {
      onMessage("__crx_bridge_stream_transfer__", (msg) => {
        const { streamId, streamTransfer, action } = msg.data;
        const stream = _Stream.openStreams.get(streamId);
        if (stream && !stream.isClosed) {
          if (action === "transfer")
            stream.emitter.emit("message", streamTransfer);
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
  /**
   * Returns stream info
   */
  get info() {
    return this.internalInfo;
  }
  /**
   * Sends a message to other endpoint.
   * Will trigger onMessage on the other side.
   *
   * Warning: Before sending sensitive data, verify the endpoint using `stream.info.endpoint.isInternal()`
   * The other side could be malicious webpage speaking same language as webext-bridge
   * @param msg
   */
  send(msg) {
    if (this.isClosed)
      throw new Error(
        "Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status"
      );
    sendMessage(
      "__crx_bridge_stream_transfer__",
      {
        streamId: this.internalInfo.streamId,
        streamTransfer: msg,
        action: "transfer"
      },
      this.internalInfo.endpoint
    );
  }
  /**
   * Closes the stream.
   * Will trigger stream.onClose(<callback>) on both endpoints.
   * If needed again, spawn a new Stream, as this instance cannot be re-opened
   * @param msg
   */
  close(msg) {
    if (msg)
      this.send(msg);
    this.handleStreamClose();
    sendMessage(
      "__crx_bridge_stream_transfer__",
      {
        streamId: this.internalInfo.streamId,
        streamTransfer: null,
        action: "close"
      },
      this.internalInfo.endpoint
    );
  }
  /**
   * Registers a callback to fire whenever other endpoint sends a message
   * @param callback
   */
  onMessage(callback) {
    return this.getDisposable("message", callback);
  }
  /**
   * Registers a callback to fire whenever stream.close() is called on either endpoint
   * @param callback
   */
  onClose(callback) {
    return this.getDisposable("closed", callback);
  }
  getDisposable(event, callback) {
    const off = this.emitter.on(event, callback);
    return Object.assign(off, {
      dispose: off,
      close: off
    });
  }
};
var Stream = _Stream;
Stream.initDone = false;
// eslint-disable-next-line no-use-before-define
Stream.openStreams = /* @__PURE__ */ new Map();

// src/bridge.ts
import uuid3 from "tiny-uid";
import { createNanoEvents as createNanoEvents2 } from "nanoevents";
var openStreams = /* @__PURE__ */ new Map();
var onOpenStreamCallbacks = /* @__PURE__ */ new Map();
var streamyEmitter = createNanoEvents2();
onMessage(
  "__crx_bridge_stream_open__",
  (message) => new Promise((resolve) => {
    const { sender, data } = message;
    const { channel } = data;
    let watching = false;
    let off;
    const readyup = () => {
      const callback = onOpenStreamCallbacks.get(channel);
      if (typeof callback === "function") {
        callback(new Stream({ ...data, endpoint: sender }));
        if (watching)
          off();
        resolve(true);
      } else if (!watching) {
        watching = true;
        off = streamyEmitter.on("did-change-stream-callbacks", readyup);
      }
    };
    readyup();
  })
);
async function openStream(channel, destination) {
  if (openStreams.has(channel))
    throw new Error("webext-bridge: A Stream is already open at this channel");
  const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
  const streamInfo = { streamId: uuid3(), channel, endpoint };
  const stream = new Stream(streamInfo);
  stream.onClose(() => openStreams.delete(channel));
  await sendMessage("__crx_bridge_stream_open__", streamInfo, endpoint);
  openStreams.set(channel, stream);
  return stream;
}
function onOpenStreamChannel(channel, callback) {
  if (onOpenStreamCallbacks.has(channel))
    throw new Error(
      "webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication"
    );
  onOpenStreamCallbacks.set(channel, callback);
  streamyEmitter.emit("did-change-stream-callbacks");
}
export {
  Stream,
  allowWindowMessaging,
  getCurrentContext,
  isInternalEndpoint,
  onMessage,
  onOpenStreamChannel,
  openStream,
  parseEndpoint,
  sendMessage,
  setNamespace
};
