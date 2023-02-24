import { RuntimeContext, DataTypeKey, OnMessageCallback, GetDataType, GetReturnType, Destination } from '../types.js';
import { JsonValue } from 'type-fest';

declare const setNamespace: (nsps: string) => void;
declare const allowWindowMessaging: (nsps: string) => void;
declare function getCurrentContext(): RuntimeContext;

declare function onMessage<Data extends JsonValue, K extends DataTypeKey | string>(messageID: K, callback: OnMessageCallback<GetDataType<K, Data>, GetReturnType<K, any>>): void;

declare function sendMessage<ReturnType extends JsonValue, K extends DataTypeKey | string>(messageID: K, data: GetDataType<K, JsonValue>, destination?: Destination): Promise<GetReturnType<K, ReturnType>>;

export { allowWindowMessaging, getCurrentContext, onMessage, sendMessage, setNamespace };
