import EventEmitter from 'eventemitter3';
import { SignerType } from '@yetiwallet/types';
import { toBN } from 'web3-utils';
import Web3Eth from 'web3-eth';

declare enum SupportedNetworkName {
    Ethereum = "ETH",
    Binance = "BNB",
    Bitindi = "BNI",
    Matic = "MATIC",
    Optimism = "OP",
    Polkadot = "DOT",
    Kusama = "KSM",
    Bitcoin = "BTC",
    EthereumClassic = "ETC",
    Moonbeam = "GLMR",
    Arbitrum = "ARB",
    Gnosis = "GNO",
    Avalanche = "AVAX",
    Fantom = "FTM",
    Klaytn = "KLAY",
    Aurora = "AURORA"
}
declare enum NetworkType {
    EVM = "evm",
    Substrate = "substrate",
    Bitcoin = "bitcoin"
}
type BN = ReturnType<typeof toBN>;
interface TokenType {
    address: string;
    symbol: string;
    decimals: number;
    name: string;
    logoURI: string;
    type: NetworkType;
    rank?: number;
    cgId?: string;
    balance?: BN;
    price?: number;
}
interface NetworkInfo {
    id: SupportedNetworkName;
    symbol: string;
    decimals: number;
    name: string;
    logoURI: string;
    rank: number;
    cgId: string;
    type: NetworkType;
    signerType: SignerType[];
}
interface TokenNetworkType {
    name: SupportedNetworkName | string;
    isAddress: (addr: string) => Promise<boolean>;
}
interface TokenTypeTo extends TokenType {
    networkInfo: TokenNetworkType;
}
interface FromTokenType {
    top: TokenType[];
    trending: TokenType[];
    all: TokenType[];
}
interface ToTokenType {
    top: Record<SupportedNetworkName, TokenTypeTo[]>;
    trending: Record<SupportedNetworkName, TokenTypeTo[]>;
    all: Record<SupportedNetworkName, TokenTypeTo[]>;
}
interface EvmOptions {
    infiniteApproval: boolean;
}
declare enum WalletIdentifier {
    yeti = "yeti",
    mew = "mew"
}
type APIType = Web3Eth;
interface QuoteMetaOptions {
    infiniteApproval: boolean;
    walletIdentifier: WalletIdentifier;
    slippage?: string;
    changellyQuoteId?: string;
}
interface SwapOptions {
    network: SupportedNetworkName;
    api: APIType;
    evmOptions?: EvmOptions;
    walletIdentifier: WalletIdentifier;
}
declare enum ProviderName {
    oneInch = "oneInch",
    paraswap = "paraswap",
    zerox = "zerox",
    changelly = "changelly"
}
declare enum TransactionStatus {
    pending = "pending",
    failed = "failed",
    success = "success"
}
interface getQuoteOptions {
    fromAddress: string;
    toAddress: string;
    amount: BN;
    fromToken: TokenType;
    toToken: TokenTypeTo;
}
declare enum TransactionType {
    evm = "evm",
    generic = "generic"
}
interface EVMTransaction {
    from: string;
    gasLimit: string;
    to: string;
    value: string;
    data: string;
    type: TransactionType.evm;
}
interface GenericTransaction {
    from: string;
    to: string;
    value: string;
    type: TransactionType.generic;
}
type SwapTransaction = EVMTransaction | GenericTransaction;
interface MinMaxResponse {
    minimumFrom: BN;
    maximumFrom: BN;
    minimumTo: BN;
    maximumTo: BN;
}
interface SwapQuote {
    options: getQuoteOptions;
    meta: QuoteMetaOptions;
    provider: ProviderName;
}
interface ProviderQuoteResponse {
    toTokenAmount: BN;
    fromTokenAmount: BN;
    totalGaslimit: number;
    provider: ProviderName;
    quote: SwapQuote;
    minMax: MinMaxResponse;
}
interface StatusOptions {
    [key: string]: any;
    transactionHashes: string[];
}
interface StatusOptionsResponse {
    options: StatusOptions;
    provider: ProviderName;
}
interface ProviderSwapResponse {
    transactions: SwapTransaction[];
    toTokenAmount: BN;
    fromTokenAmount: BN;
    provider: ProviderName;
    slippage: string;
    fee: number;
    getStatusObject: (options: StatusOptions) => Promise<StatusOptionsResponse>;
}

declare const isSupportedNetwork: (networkName: SupportedNetworkName) => boolean;
declare const getSupportedNetworks: () => NetworkInfo[];
declare const getNetworkInfoByName: (networkName: SupportedNetworkName) => NetworkInfo;

declare const sortByRank: (x: {
    rank?: number;
}, y: {
    rank?: number;
}) => number;
declare const sortNativeToFront: (x: {
    address: string;
}, y: {
    address: string;
}) => 1 | -1 | 0;

declare class SwapToken {
    token: TokenType;
    constructor(token: TokenType);
    setBalance(balance: BN): void;
    getBalanceReadable(): string;
    getBalanceRaw(): BN;
    toReadable(amount: BN): string;
    toRaw(amount: string): BN;
    getFiatTotal(): number;
    getFiatValue(): number;
    getReadableToFiat(value: string): number;
    getRawToFiat(value: BN): number;
}

declare class Swap extends EventEmitter {
    network: SupportedNetworkName;
    evmOptions: EvmOptions;
    private api;
    initPromise: Promise<void>;
    private providerClasses;
    private providers;
    private tokenList;
    private topTokenInfo;
    private fromTokens;
    private toTokens;
    private walletId;
    constructor(options: SwapOptions);
    private init;
    getFromTokens(): FromTokenType;
    getToTokens(): ToTokenType;
    getQuotes(options: getQuoteOptions): Promise<ProviderQuoteResponse[]>;
    getSwap(quote: SwapQuote): Promise<ProviderSwapResponse | null>;
    getStatus(options: StatusOptionsResponse): Promise<TransactionStatus | null>;
    static networkNameToInfo(networkName: SupportedNetworkName): NetworkInfo;
}

export { EVMTransaction, GenericTransaction, NetworkInfo, NetworkType, ProviderQuoteResponse, ProviderSwapResponse, StatusOptions, StatusOptionsResponse, SupportedNetworkName, SwapToken, TokenType, TokenTypeTo, TransactionStatus, TransactionType, WalletIdentifier, Swap as default, getNetworkInfoByName, getSupportedNetworks, isSupportedNetwork, sortByRank, sortNativeToFront };
