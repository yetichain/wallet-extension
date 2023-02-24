import { SignerInterface, KeyPair } from '@yetiwallet/types';

declare class Signer implements SignerInterface {
    generate(mnemonic: string, derivationPath?: string): Promise<KeyPair>;
    verify(msgHash: string, sig: string, publicKey: string): Promise<boolean>;
    sign(msgHash: string, keyPair: KeyPair): Promise<string>;
}

export { Signer as default };
