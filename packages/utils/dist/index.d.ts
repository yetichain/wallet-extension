export { bytesToHex, hexToBytes, keccak256, numberToHex, stripHexPrefix, utf8ToHex } from 'web3-utils';
export { bigIntToBuffer, bigIntToHex } from '@ethereumjs/util';
export { encodeAddress as polkadotEncodeAddress } from '@polkadot/util-crypto';
import { EncryptedData, BrowserStorageArea } from '@yetiwallet/types';

declare const encrypt: (msg: Buffer, password: string) => Promise<EncryptedData>;
declare const decrypt: (encryptedData: EncryptedData, password: string) => Promise<Buffer>;

declare class MemoryStorage implements BrowserStorageArea {
    private storage;
    get(key: string): Promise<Record<string, any>>;
    set(items: Record<string, any>): Promise<void>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
    getWholeStorage(): Promise<Record<string, any>>;
}

declare const bufferToHex: (buf: Buffer | Uint8Array, nozerox?: boolean) => string;
declare const hexToBuffer: (hex: string) => Buffer;

export { MemoryStorage, bufferToHex, decrypt, encrypt, hexToBuffer };
