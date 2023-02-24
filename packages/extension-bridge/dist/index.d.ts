import { JsonValue } from 'type-fest';
import { StreamInfo, HybridUnsubscriber, RuntimeContext, Endpoint, DataTypeKey, OnMessageCallback, GetDataType, GetReturnType, Destination } from './types.js';
export { IBridgeMessage, IInternalMessage, IQueuedMessage, ProtocolMap, ProtocolWithReturn } from './types.js';

declare class Stream {
    private static initDone;
    private static openStreams;
    private internalInfo;
    private emitter;
    private isClosed;
    constructor(t: StreamInfo);
    get info(): StreamInfo;
    send(msg?: JsonValue): void;
    close(msg?: JsonValue): void;
    onMessage<T extends JsonValue>(callback: (msg?: T) => void): HybridUnsubscriber;
    onClose<T extends JsonValue>(callback: (msg?: T) => void): HybridUnsubscriber;
    private handleStreamClose;
    private getDisposable;
}

declare function openStream(channel: string, destination: RuntimeContext | Endpoint | string): Promise<Stream>;
declare function onOpenStreamChannel(channel: string, callback: (stream: Stream) => void): void;

declare const setNamespace: (nsps: string) => void;
declare const allowWindowMessaging: (nsps: string) => void;
declare function getCurrentContext(): RuntimeContext;

declare const parseEndpoint: (endpoint: string) => Endpoint;
declare const isInternalEndpoint: ({ context: ctx }: Endpoint) => boolean;

declare function onMessage<Data extends JsonValue, K extends DataTypeKey | string>(messageID: K, callback: OnMessageCallback<GetDataType<K, Data>, GetReturnType<K, any>>): void;

declare function sendMessage<ReturnType extends JsonValue, K extends DataTypeKey | string>(messageID: K, data: GetDataType<K, JsonValue>, destination?: Destination): Promise<GetReturnType<K, ReturnType>>;

export { DataTypeKey, Destination, Endpoint, GetDataType, GetReturnType, HybridUnsubscriber, OnMessageCallback, RuntimeContext, Stream, StreamInfo, allowWindowMessaging, getCurrentContext, isInternalEndpoint, onMessage, onOpenStreamChannel, openStream, parseEndpoint, sendMessage, setNamespace };
