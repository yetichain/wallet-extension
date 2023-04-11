import { ethers, Contract } from 'ethers';
import { Resolution } from '@unstoppabledomains/resolution';

interface ENSOptions {
    node: string;
}

type CoinType = "BTC" | "LTC" | "DOGE" | "RDD" | "DASH" | "PPC" | "NMC" | "VIA" | "GRS" | "DGB" | "MONA" | "DCR" | "XEM" | "AIB" | "SYS" | "ETH" | "ETC_LEGACY" | "ICX" | "XVG" | "STRAT" | "ARK" | "ATOM" | "ZIL" | "EGLD" | "ZEN" | "XMR" | "ZEC" | "LSK" | "STEEM" | "FIRO" | "RSK" | "KMD" | "XRP" | "BCH" | "XLM" | "BTM" | "BTG" | "NANO" | "RVN" | "POA_LEGACY" | "LCC" | "EOS" | "TRX" | "BCN" | "FIO" | "BSV" | "NEO" | "NIM" | "EWT_LEGACY" | "ALGO" | "IOST" | "DIVI" | "IOTX" | "BTS" | "CKB" | "MRX" | "LUNA" | "DOT" | "VSYS" | "ABBC" | "NEAR" | "ETN" | "AION" | "KSM" | "AE" | "KAVA" | "FIL" | "AR" | "CCA" | "THETA_LEGACY" | "SOL" | "XHV" | "FLOW" | "IRIS" | "LRG" | "SERO" | "BDX" | "CCXX" | "SRM" | "VLX" | "BPS" | "TFUEL" | "GRIN" | "XDAI_LEGACY" | "VET" | "BNB" | "CLO_LEGACY" | "HIVE" | "TOMO_LEGACY" | "HNT" | "RUNE" | "BCD" | "TT_LEGACY" | "FTM_LEGACY" | "ONE" | "ONT" | "XTZ" | "ADA" | "SC" | "QTUM" | "GXC" | "ELA" | "NAS" | "HBAR" | "IOTA" | "HNS" | "STX" | "GO_LEGACY" | "XCH" | "NULS" | "AVAX" | "NRG_LEGACY" | "ARDR" | "ZEL" | "CELO_LEGACY" | "WICC" | "WAN" | "WAVES" | "OP" | "CRO" | "BSC" | "GO" | "ETC" | "TOMO" | "POA" | "XDAI" | "TT" | "MATIC" | "EWT" | "FTM" | "THETA" | "CLO" | "NRG" | "ARB1" | "CELO" | "BNI" | "AVAXC";
declare abstract class BaseResolver {
    name: string;

    abstract init(): Promise<void>;

    abstract resolveAddress(name: string, coint: CoinType): Promise<string | null>;

    abstract resolveReverseName(address: string): Promise<string | null>;

    abstract isSupportedName(name: string): boolean;
}
interface NameResolverOptions {
    ens: ENSOptions;
}

declare class ENSResolver implements BaseResolver {
    options: ENSOptions;

    name: string;

    ENSProvider: ethers.providers.JsonRpcProvider;

    constructor(options: ENSOptions);

    init(): Promise<void>;

    resolveReverseName(address: string): Promise<string | null>;

    resolveAddress(name: string, coin?: CoinType): Promise<string | null>;

    isSupportedName(name: string): boolean;
}

declare class UDResolver implements BaseResolver {
    UDProvider: Resolution;

    name: string;

    supportedTLDs: string[];

    constructor();

    init(): Promise<void>;

    resolveReverseName(address: string): Promise<string | null>;

    resolveAddress(name: string, coin?: CoinType): Promise<string | null>;

    isSupportedName(name: string): boolean;
}

declare class RNSResolver implements BaseResolver {
    name: string;

    rnsRegistryContract: Contract;

    RNSProvider: ethers.providers.JsonRpcProvider;

    constructor();

    init(): Promise<void>;

    resolveReverseName(address: string): Promise<string | null>;

    resolveAddress(name: string, _coin?: CoinType): Promise<string | null>;

    isSupportedName(name: string): boolean;
}

declare class NameResolver {
    ens: ENSResolver;

    rns: RNSResolver;

    ud: UDResolver;

    initDone: Promise<void[]>;

    constructor(options: NameResolverOptions);

    resolveReverseName(address: string): Promise<string | null>;

    resolveAddress(name: string, coin?: CoinType): Promise<string | null>;
}

export { CoinType, ENSResolver, UDResolver, NameResolver as default };
