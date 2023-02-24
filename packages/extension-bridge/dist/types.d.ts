import { JsonValue } from 'type-fest';

type RuntimeContext = "devtools" | "background" | "popup" | "options" | "content-script" | "window" | "new-window";
type Endpoint = {
    context: RuntimeContext;
    tabId: number;
    frameId?: number;
};
interface IBridgeMessage<T extends JsonValue> {
    sender: Endpoint;
    id: string;
    data: T;
    timestamp: number;
}
type OnMessageCallback<T extends JsonValue, R = void | JsonValue> = (message: IBridgeMessage<T>) => R | Promise<R>;
interface IInternalMessage {
    origin: Endpoint;
    destination: Endpoint;
    transactionId: string;
    hops: string[];
    messageID: string;
    messageType: "message" | "reply";
    err?: JsonValue;
    data?: JsonValue | void;
    timestamp: number;
}
interface IQueuedMessage {
    resolvedDestination: string;
    message: IInternalMessage;
}
type StreamInfo = {
    streamId: string;
    channel: string;
    endpoint: Endpoint;
};
type HybridUnsubscriber = {
    (): void;
    dispose: () => void;
    close: () => void;
};
type Destination = Endpoint | RuntimeContext | string;
declare const ProtocolWithReturnSymbol: unique symbol;
interface ProtocolWithReturn<Data extends JsonValue, Return extends JsonValue> {
    data: Data;
    return: Return;
    [ProtocolWithReturnSymbol]: true;
}
interface ProtocolMap {
}
type DataTypeKey = keyof ProtocolMap;
type GetDataType<K extends DataTypeKey | string, Fallback extends JsonValue> = K extends DataTypeKey ? ProtocolMap[K] extends ProtocolWithReturn<infer Data, any> ? Data : ProtocolMap[K] : Fallback;
type GetReturnType<K extends DataTypeKey | string, Fallback extends JsonValue> = K extends DataTypeKey ? ProtocolMap[K] extends ProtocolWithReturn<any, infer Return> ? Return : void : Fallback;

export { DataTypeKey, Destination, Endpoint, GetDataType, GetReturnType, HybridUnsubscriber, IBridgeMessage, IInternalMessage, IQueuedMessage, OnMessageCallback, ProtocolMap, ProtocolWithReturn, RuntimeContext, StreamInfo };
