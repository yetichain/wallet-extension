// src/window/internal.ts
import { serializeError } from "serialize-error";
import uuid from "tiny-uid";
var context = "window";
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
  window.addEventListener("message", handleWindowOnMessage);
};
initIntercoms();
var routeMessage = (message) => {
  const { origin, destination } = message;
  if (message.hops.includes(runtimeId))
    return;
  message.hops.push(runtimeId);
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
    } else if (["devtools", "content-script", "popup", "options"].includes(context)) {
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
    const { payload } = data;
    assertInternalMessage(payload);
    if (context === "content-script") {
      payload.origin = {
        context: "window",
        tabId: null
      };
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

// src/window/apis/onMessage.ts
function onMessage(messageID, callback) {
  onMessageListeners.set(messageID, callback);
}

// src/window/apis/sendMessage.ts
import uuid2 from "tiny-uid";

// src/window/utils.ts
var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/;
var parseEndpoint = (endpoint) => {
  const [, context2, tabId, frameId] = endpoint.match(ENDPOINT_RE) || [];
  return {
    context: context2,
    tabId: +tabId,
    frameId: frameId ? +frameId : void 0
  };
};

// src/window/apis/sendMessage.ts
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
export {
  allowWindowMessaging,
  getCurrentContext,
  onMessage,
  sendMessage,
  setNamespace
};
