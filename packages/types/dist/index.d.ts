declare enum NetworkNames {
    Ethereum = "ETH",
    Okc = "OKT",
    Binance = "BNB",
    Bitindi = "BNI",
    EthereumClassic = "ETC",
    Goerli = "GOERLI",
    Kovan = "KOV",
    Matic = "MATIC",
    Moonbeam = "GLMR",
    Moonriver = "MOVR",
    Rinkeby = "RIN",
    Ropsten = "ROP",
    Rootstock = "Rootstock",
    Acala = "ACA",
    Karura = "KAR",
    KaruraEVM = "evmKAR",
    Kusama = "KSM",
    Polkadot = "DOT",
    Westend = "WND",
    Bitcoin = "BTC",
    BitcoinTest = "BTCTest",
    Astar = "ASTR",
    Shiden = "SDN",
    ShidenEVM = "SDN EVM",
    AstarEVM = "ASTR EVM",
    Optimism = "OP",
    Canto = "CANTO",
    Bifrost = "BNC",
    BifrostKusama = "BNC (Kusama)",
    Edgeware = "EDG",
    EdgeEVM = "evmEDG",
    ZkSyncGoerli = "zkSyncGoerli",
    TomoChain = "TOMO",
    ZkSync = "zkSync",
    SkaleEuropa = "skaleEUROPA",
    SkaleBlockBrawlers = "skaleBRAWL",
    SkaleCalypso = "skaleCALYPSO",
    SkaleCryptoBlades = "skaleCRYPTOBLADES",
    SkaleCryptoColosseum = "skaleROME",
    SkaleExorde = "skaleEXORDE",
    SkaleNebula = "skaleNEBULA",
    SkaleRazor = "skaleRAZOR",
    SkaleTitan = "skaleTITAN",
    SkaleChaos = "skaleCHAOS",
    OntologyEVM = "ontologyEVM",
    Arbitrum = "ARB",
    Gnosis = "GNO",
    Avalanche = "AVAX",
    Fantom = "FTM",
    Klaytn = "KLAY",
    Aurora = "AURORA",
    PuppyNet = "puppyNet"
}
declare enum CoingeckoPlatform {
    Ethereum = "ethereum",
    Binance = "binance-smart-chain",
    EthereumClassic = "ethereum-classic",
    Matic = "polygon-pos",
    Moonbeam = "moonbeam",
    Moonriver = "moonriver",
    Acala = "acala",
    Karura = "karura",
    KaruraEVM = "karura",
    Kusama = "kusama",
    Polkadot = "polkadot",
    Rootstock = "rootstock",
    Okc = "okex-chain",
    Astar = "astar",
    Shiden = "shiden network",
    Optimism = "optimistic-ethereum",
    Canto = "canto",
    Bifrost = "bifrost-native-coin",
    Edgeware = "edgeware",
    EdgeEVM = "edgeware",
    TomoChain = "tomochain",
    SKALE = "skale",
    OntologyEVM = "ontology",
    Arbitrum = "arbitrum-one",
    Gnosis = "xdai",
    Avalanche = "avalanche",
    Fantom = "avalanche",
    Klaytn = "klay-token",
    Aurora = "aurora"
}

declare enum WalletType {
    mnemonic = "mnemonic",
    privkey = "privkey",
    ledger = "ledger",
    trezor = "trezor"
}
declare enum HWwalletType {
    ledger = "ledger",
    trezor = "trezor"
}
declare enum HWwalletCapabilities {
    signMessage = "signMessage",
    signTx = "signTx",
    eip1559 = "eip1559",
    typedMessage = "typedMessage"
}
declare enum SigningErrors {
    UnableToVerify = "Signing verification failed",
    NotSupported = "Sign type not supported"
}
declare enum OtherErrors {
    WrongPassword = "Key derivation failed - possibly wrong passphrase"
}
declare enum KeyringErrors {
    MnemonicExists = "Mnemonic already exists",
    NotInitialized = "Key ring not initialized",
    NoPassword = "No password set",
    AddressExists = "Address already exists",
    AddressDoesntExists = "Address doesnt exists in the keyring",
    EnckryptDecryptNotSupported = "This Keytype doesnt support encrypt and decrypt",
    CannotUseKeyring = "Cannot use keyring for HW wallets",
    Locked = "Keyring locked",
    CantRemoveMnemonicAddress = "Cannot remove mnemonic addresses"
}
declare enum SignerType {
    ecdsa = "ecdsa",
    ed25519 = "ed25519",
    sr25519 = "sr25519",
    secp256k1 = "secp256k1",
    secp256k1btc = "secp256k1-btc"
}
interface KeyRecordAdd {
    name: string;
    basePath: string;
    signerType: SignerType;
    walletType: WalletType;
}
interface KeyRecord extends KeyRecordAdd {
    address: string;
    publicKey: string;
    pathIndex: number;
}
interface HWwalletOptions {
    networkName: NetworkNames;
    pathTemplate: string;
}
interface YetiAccount extends KeyRecord {
    isHardware: boolean;
    HWOptions?: HWwalletOptions;
}
interface HWWalletAdd extends KeyRecord {
    HWOptions: HWwalletOptions;
}
interface KeyPair {
    address?: string;
    privateKey: string;
    publicKey: string;
}
interface KeyPairAdd extends KeyPair {
    address: string;
    name: string;
    signerType: SignerType;
}
interface SignerInterface {
    sign: (msgHash: string, keypair: KeyPair, options?: unknown) => Promise<string>;
    verify: (msgHash: string, sig: string, publicKey: string, options?: unknown) => Promise<boolean>;
    generate: (mnemonic: string, path: string, options?: unknown) => Promise<KeyPair>;
}
declare const Errors: {
    SigningErrors: typeof SigningErrors;
    KeyringErrors: typeof KeyringErrors;
    OtherErrors: typeof OtherErrors;
};
interface EncryptedData {
    ciphertext: string;
    salt: string;
    iv: string;
    version: number;
    mac: string;
}
interface BrowserStorageArea {
    get(keys?: null | string | string[] | Record<string, any>): Promise<Record<string, any>>;
    set(items: Record<string, any>): Promise<void>;
    remove(keys: string | string[]): Promise<void>;
    clear(): Promise<void>;
}
interface RPCRequestType {
    method: string;
    params?: Array<any>;
}
interface RPCResponseType {
    result?: any;
    error?: any;
}
interface ProviderError {
    message: string;
    code: number;
    data?: unknown;
}
type CallbackFunction = (err: ProviderError | null, result?: any) => void;
type NextFunction = () => void;
type MiddlewareFunction = (payload: RPCRequestType, response: CallbackFunction, next: NextFunction) => void;
interface OnMessageResponse {
    result?: string;
    error?: string;
}
interface SignOptions {
    basePath: string;
    pathIndex: number;
    signerType: SignerType;
    walletType: WalletType;
}
interface EthEncryptedData {
    version: string;
    nonce: string;
    ephemPublicKey: string;
    ciphertext: string;
}

export { BrowserStorageArea, CallbackFunction, CoingeckoPlatform, EncryptedData, Errors, EthEncryptedData, HWWalletAdd, HWwalletCapabilities, HWwalletType, KeyPair, KeyPairAdd, KeyRecord, KeyRecordAdd, MiddlewareFunction, NetworkNames, OnMessageResponse, ProviderError, RPCRequestType, RPCResponseType, SignOptions, SignerInterface, SignerType, WalletType, YetiAccount };
