import { MiddlewareFunction, RPCRequestType } from '@yetiwallet/types';
import EventEmitter from 'eventemitter3';

declare abstract class RequestClass extends EventEmitter {
    url: string;
    middlewares: MiddlewareFunction[];
    on: any;
    off: any;
    constructor(url: string, middlewares: MiddlewareFunction[]);
    abstract changeNetwork(url: string): void;
    abstract request(req: RPCRequestType): Promise<any>;
    abstract disconnect(): void;
    abstract isOpen(): boolean;
}

declare const _default: (url: string, middlewares: MiddlewareFunction[], options?: any) => RequestClass;

export { RequestClass, _default as default };
