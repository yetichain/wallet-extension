import { BrowserStorageArea } from '@yetiwallet/types';

interface StorageOptions {
    storage?: BrowserStorageArea;
}

declare class Storage {
    namespace: string;
    private storage;
    constructor(namespace: any, options: StorageOptions);
    get(key: string): Promise<any>;
    set(key: string, val: Record<string, any>): Promise<void>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
}

export { Storage as default };
