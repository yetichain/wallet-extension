import { HWwalletType, NetworkNames } from '@yetiwallet/types';
import Transport from '@ledgerhq/hw-transport';
import HDKey from 'hdkey';
import { FeeMarketEIP1559Transaction, Transaction } from '@ethereumjs/tx';
import { ExtrinsicPayload } from '@polkadot/types/interfaces';

interface PathType {
    path: string;
    basePath: string;
    label?: string;
}
interface AddressResponse {
    address: string;
    publicKey: string;
}
interface BaseRequest {
    pathIndex: string;
    pathType: PathType;
    wallet: HWwalletType;
    networkName: NetworkNames;
}
interface SignMessageRequest extends BaseRequest {
    message: Buffer;
}
interface SignTransactionRequest extends BaseRequest {
    transaction: FeeMarketEIP1559Transaction | Transaction | ExtrinsicPayload;
}
interface getAddressRequest extends BaseRequest {
    confirmAddress: boolean;
}
interface isConnectedRequest {
    wallet: HWwalletType;
    networkName: NetworkNames;
}
declare abstract class HWWalletProvider {
    abstract network: NetworkNames;
    constructor(_network: NetworkNames);
    abstract init(): Promise<boolean>;
    abstract getAddress(options: getAddressRequest): Promise<AddressResponse>;
    abstract getSupportedPaths(): PathType[];
    abstract isConnected(networkName: string): Promise<boolean>;
    abstract close(): Promise<void>;
    abstract signPersonalMessage(request: SignMessageRequest): Promise<string>;
    abstract signTransaction(request: SignTransactionRequest): Promise<string>;
    static getSupportedNetworks(): NetworkNames[];
    static getCapabilities(): string[];
}

declare class LedgerEthereum implements HWWalletProvider {
    transport: Transport | null;
    network: NetworkNames;
    HDNodes: Record<string, HDKey>;
    constructor(network: NetworkNames);
    init(): Promise<boolean>;
    getAddress(options: getAddressRequest): Promise<AddressResponse>;
    signPersonalMessage(options: SignMessageRequest): Promise<string>;
    signTransaction(options: SignTransactionRequest): Promise<string>;
    getSupportedPaths(): PathType[];
    close(): Promise<void>;
    isConnected(networkName: NetworkNames): Promise<boolean>;
    static getSupportedNetworks(): NetworkNames[];
    static getCapabilities(): string[];
}

declare class LedgerSubstrate implements HWWalletProvider {
    transport: Transport | null;
    network: NetworkNames;
    constructor(network: NetworkNames);
    validatePathAndNetwork(options: getAddressRequest | SignTransactionRequest): void;
    init(): Promise<boolean>;
    getAddress(options: getAddressRequest): Promise<AddressResponse>;
    signMessage(): void;
    getSupportedPaths(): PathType[];
    close(): Promise<void>;
    isConnected(networkName: NetworkNames): Promise<boolean>;
    signPersonalMessage(): Promise<string>;
    signTransaction(options: SignTransactionRequest): Promise<string>;
    static getSupportedNetworks(): NetworkNames[];
    static getCapabilities(): string[];
}

declare class TrezorEthereum implements HWWalletProvider {
    network: NetworkNames;
    HDNodes: Record<string, HDKey>;
    constructor(network: NetworkNames);
    init(): Promise<boolean>;
    getAddress(options: getAddressRequest): Promise<AddressResponse>;
    signMessage(): void;
    getSupportedPaths(): PathType[];
    close(): Promise<void>;
    isConnected(): Promise<boolean>;
    signPersonalMessage(options: SignMessageRequest): Promise<string>;
    signTransaction(options: SignTransactionRequest): Promise<string>;
    static getSupportedNetworks(): NetworkNames[];
    static getCapabilities(): string[];
}

declare const ledgerAppNames: {
    ETH: string;
    MATIC: string;
    Rootstock: string;
    ETC: string;
    ROP: string;
    GOERLI: string;
    ACA: string;
    KSM: string;
    DOT: string;
    KAR: string;
    EDG: string;
};

type ProviderType = typeof LedgerEthereum | typeof LedgerSubstrate | typeof TrezorEthereum;
declare class HWwalletManager {
    #private;
    providerTypes: Record<HWwalletType, ProviderType[]>;
    providers: Record<NetworkNames, HWWalletProvider> | unknown;
    constructor();
    getAddress(options: getAddressRequest): Promise<AddressResponse>;
    signPersonalMessage(options: SignMessageRequest): Promise<string>;
    signTransaction(options: SignTransactionRequest): Promise<string>;
    getSupportedPaths(options: isConnectedRequest): Promise<PathType[]>;
    isNetworkSupported(networkName: NetworkNames): boolean;
    isConnected(options: isConnectedRequest): Promise<boolean>;
    close(): Promise<void>;
}

export { HWwalletManager as default, ledgerAppNames };
