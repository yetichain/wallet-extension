import { SignerInterface, SignerType, KeyPair } from '@yetiwallet/types';
export { SignerType } from '@yetiwallet/types';

interface SignOptions {
    onlyJS?: boolean;
}

declare class Signer implements SignerInterface {
    type: SignerType;
    constructor(signer: SignerType);
    generate(mnemonic: string, derivationPath?: string, options?: SignOptions): Promise<KeyPair>;
    verify(msgHash: string, sig: string, publicKey: string): Promise<boolean>;
    sign(msgHash: string, keyPair: KeyPair, options?: SignOptions): Promise<string>;
}

export { Signer as default };
