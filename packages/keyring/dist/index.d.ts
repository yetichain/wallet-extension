import {
  KeyRecordAdd,
  YetiAccount,
  SignOptions,
  HWWalletAdd,
  KeyPairAdd,
} from "@yetiwallet/types";
import Storage from "@yetiwallet/storage";

declare class KeyRing {
  #private;
  readonly autoLockTime: number;
  constructor(storage: Storage, locktime?: number);
  init(
    password: string,
    {
      strength,
      mnemonic,
    }?: {
      strength?: number;
      mnemonic?: string;
    }
  ): Promise<void>;
  isInitialized(): Promise<boolean>;
  unlockMnemonic(password: string): Promise<void>;
  getMnemonic(password: string): Promise<string>;
  createKey(key: KeyRecordAdd): Promise<YetiAccount>;
  createAndSaveKey(key: KeyRecordAdd): Promise<YetiAccount>;
  sign(msgHash: string, options: SignOptions): Promise<string>;
  getEthereumEncryptionPublicKey(options: SignOptions): Promise<string>;
  ethereumDecrypt(
    encryptedMessage: string,
    options: SignOptions
  ): Promise<string>;
  getKeysObject(): Promise<{
    [key: string]: YetiAccount;
  }>;
  getKeysArray(): Promise<YetiAccount[]>;
  addHWAccount(account: HWWalletAdd): Promise<YetiAccount>;
  renameAccount(address: string, newName: string): Promise<YetiAccount>;
  deleteAccount(address: string): Promise<void>;
  addKeyPair(
    keyPair: KeyPairAdd,
    keyringPassword: string
  ): Promise<YetiAccount>;
  reset(): Promise<void>;
  isLocked(): boolean;
  lock(): void;
}

export { KeyRing as default };
