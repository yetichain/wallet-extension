import { KeyRecordAdd, EnkryptAccount, SignOptions, HWWalletAdd, KeyPairAdd } from '@yetiwallet/types';
import Storage from '@yetiwallet/storage';

declare class KeyRing {
    #private;
    readonly autoLockTime: number;
    constructor(storage: Storage, locktime?: number);
    init(password: string, { strength, mnemonic, }?: {
        strength?: number;
        mnemonic?: string;
    }): Promise<void>;
    isInitialized(): Promise<boolean>;
    unlockMnemonic(password: string): Promise<void>;
    getMnemonic(password: string): Promise<string>;
    createKey(key: KeyRecordAdd): Promise<EnkryptAccount>;
    createAndSaveKey(key: KeyRecordAdd): Promise<EnkryptAccount>;
    sign(msgHash: string, options: SignOptions): Promise<string>;
    getEthereumEncryptionPublicKey(options: SignOptions): Promise<string>;
    ethereumDecrypt(encryptedMessage: string, options: SignOptions): Promise<string>;
    getKeysObject(): Promise<{
        [key: string]: EnkryptAccount;
    }>;
    getKeysArray(): Promise<EnkryptAccount[]>;
    addHWAccount(account: HWWalletAdd): Promise<EnkryptAccount>;
    renameAccount(address: string, newName: string): Promise<EnkryptAccount>;
    deleteAccount(address: string): Promise<void>;
    addKeyPair(keyPair: KeyPairAdd, keyringPassword: string): Promise<EnkryptAccount>;
    reset(): Promise<void>;
    isLocked(): boolean;
    lock(): void;
}

export { KeyRing as default };
