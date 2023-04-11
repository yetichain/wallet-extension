// src/networks.ts
var NetworkNames = /* @__PURE__ */ ((NetworkNames2) => {
  NetworkNames2["Ethereum"] = "ETH";
  NetworkNames2["Okc"] = "OKT";
  NetworkNames2["Binance"] = "BNB";
  NetworkNames2["Bitindi"] = "BNI";
  NetworkNames2["EthereumClassic"] = "ETC";
  NetworkNames2["Goerli"] = "GOERLI";
  NetworkNames2["Kovan"] = "KOV";
  NetworkNames2["Matic"] = "MATIC";
  NetworkNames2["Moonbeam"] = "GLMR";
  NetworkNames2["Moonriver"] = "MOVR";
  NetworkNames2["Rinkeby"] = "RIN";
  NetworkNames2["Ropsten"] = "ROP";
  NetworkNames2["Rootstock"] = "Rootstock";
  NetworkNames2["Acala"] = "ACA";
  NetworkNames2["Karura"] = "KAR";
  NetworkNames2["KaruraEVM"] = "evmKAR";
  NetworkNames2["Kusama"] = "KSM";
  NetworkNames2["Polkadot"] = "DOT";
  NetworkNames2["Westend"] = "WND";
  NetworkNames2["Bitcoin"] = "BTC";
  NetworkNames2["BitcoinTest"] = "BTCTest";
  NetworkNames2["Astar"] = "ASTR";
  NetworkNames2["Shiden"] = "SDN";
  NetworkNames2["ShidenEVM"] = "SDN EVM";
  NetworkNames2["AstarEVM"] = "ASTR EVM";
  NetworkNames2["Optimism"] = "OP";
  NetworkNames2["Canto"] = "CANTO";
  NetworkNames2["Bifrost"] = "BNC";
  NetworkNames2["BifrostKusama"] = "BNC (Kusama)";
  NetworkNames2["Edgeware"] = "EDG";
  NetworkNames2["EdgeEVM"] = "evmEDG";
  NetworkNames2["ZkSyncGoerli"] = "zkSyncGoerli";
  NetworkNames2["TomoChain"] = "TOMO";
  NetworkNames2["ZkSync"] = "zkSync";
  NetworkNames2["SkaleEuropa"] = "skaleEUROPA";
  NetworkNames2["SkaleBlockBrawlers"] = "skaleBRAWL";
  NetworkNames2["SkaleCalypso"] = "skaleCALYPSO";
  NetworkNames2["SkaleCryptoBlades"] = "skaleCRYPTOBLADES";
  NetworkNames2["SkaleCryptoColosseum"] = "skaleROME";
  NetworkNames2["SkaleExorde"] = "skaleEXORDE";
  NetworkNames2["SkaleNebula"] = "skaleNEBULA";
  NetworkNames2["SkaleRazor"] = "skaleRAZOR";
  NetworkNames2["SkaleTitan"] = "skaleTITAN";
  NetworkNames2["SkaleChaos"] = "skaleCHAOS";
  NetworkNames2["OntologyEVM"] = "ontologyEVM";
  NetworkNames2["Arbitrum"] = "ARB";
  NetworkNames2["Gnosis"] = "GNO";
  NetworkNames2["Avalanche"] = "AVAX";
  NetworkNames2["Fantom"] = "FTM";
  NetworkNames2["Klaytn"] = "KLAY";
  NetworkNames2["Aurora"] = "AURORA";
  NetworkNames2["PuppyNet"] = "puppyNet";
  return NetworkNames2;
})(NetworkNames || {});
var CoingeckoPlatform = /* @__PURE__ */ ((CoingeckoPlatform2) => {
  CoingeckoPlatform2["Ethereum"] = "ethereum";
  CoingeckoPlatform2["Binance"] = "binance-smart-chain";
  CoingeckoPlatform2["EthereumClassic"] = "ethereum-classic";
  CoingeckoPlatform2["Matic"] = "polygon-pos";
  CoingeckoPlatform2["Moonbeam"] = "moonbeam";
  CoingeckoPlatform2["Moonriver"] = "moonriver";
  CoingeckoPlatform2["Acala"] = "acala";
  CoingeckoPlatform2["Karura"] = "karura";
  CoingeckoPlatform2["KaruraEVM"] = "karura";
  CoingeckoPlatform2["Kusama"] = "kusama";
  CoingeckoPlatform2["Polkadot"] = "polkadot";
  CoingeckoPlatform2["Rootstock"] = "rootstock";
  CoingeckoPlatform2["Okc"] = "okex-chain";
  CoingeckoPlatform2["Astar"] = "astar";
  CoingeckoPlatform2["Shiden"] = "shiden network";
  CoingeckoPlatform2["Optimism"] = "optimistic-ethereum";
  CoingeckoPlatform2["Canto"] = "canto";
  CoingeckoPlatform2["Bifrost"] = "bifrost-native-coin";
  CoingeckoPlatform2["Edgeware"] = "edgeware";
  CoingeckoPlatform2["EdgeEVM"] = "edgeware";
  CoingeckoPlatform2["TomoChain"] = "tomochain";
  CoingeckoPlatform2["SKALE"] = "skale";
  CoingeckoPlatform2["OntologyEVM"] = "ontology";
  CoingeckoPlatform2["Arbitrum"] = "arbitrum-one";
  CoingeckoPlatform2["Gnosis"] = "xdai";
  CoingeckoPlatform2["Avalanche"] = "avalanche";
  CoingeckoPlatform2["Fantom"] = "avalanche";
  CoingeckoPlatform2["Klaytn"] = "klay-token";
  CoingeckoPlatform2["Aurora"] = "aurora";
  return CoingeckoPlatform2;
})(CoingeckoPlatform || {});

// src/index.ts
var WalletType = /* @__PURE__ */ ((WalletType2) => {
  WalletType2["mnemonic"] = "mnemonic";
  WalletType2["privkey"] = "privkey";
  WalletType2["ledger"] = "ledger";
  WalletType2["trezor"] = "trezor";
  return WalletType2;
})(WalletType || {});
var HWwalletType = /* @__PURE__ */ ((HWwalletType2) => {
  HWwalletType2["ledger"] = "ledger" /* ledger */;
  HWwalletType2["trezor"] = "trezor" /* trezor */;
  return HWwalletType2;
})(HWwalletType || {});
var HWwalletCapabilities = /* @__PURE__ */ ((HWwalletCapabilities2) => {
  HWwalletCapabilities2["signMessage"] = "signMessage";
  HWwalletCapabilities2["signTx"] = "signTx";
  HWwalletCapabilities2["eip1559"] = "eip1559";
  HWwalletCapabilities2["typedMessage"] = "typedMessage";
  return HWwalletCapabilities2;
})(HWwalletCapabilities || {});
var SigningErrors = /* @__PURE__ */ ((SigningErrors2) => {
  SigningErrors2["UnableToVerify"] = "Signing verification failed";
  SigningErrors2["NotSupported"] = "Sign type not supported";
  return SigningErrors2;
})(SigningErrors || {});
var OtherErrors = /* @__PURE__ */ ((OtherErrors2) => {
  OtherErrors2["WrongPassword"] = "Key derivation failed - possibly wrong passphrase";
  return OtherErrors2;
})(OtherErrors || {});
var KeyringErrors = /* @__PURE__ */ ((KeyringErrors2) => {
  KeyringErrors2["MnemonicExists"] = "Mnemonic already exists";
  KeyringErrors2["NotInitialized"] = "Key ring not initialized";
  KeyringErrors2["NoPassword"] = "No password set";
  KeyringErrors2["AddressExists"] = "Address already exists";
  KeyringErrors2["AddressDoesntExists"] = "Address doesnt exists in the keyring";
  KeyringErrors2["EnckryptDecryptNotSupported"] = "This Keytype doesnt support encrypt and decrypt";
  KeyringErrors2["CannotUseKeyring"] = "Cannot use keyring for HW wallets";
  KeyringErrors2["Locked"] = "Keyring locked";
  KeyringErrors2["CantRemoveMnemonicAddress"] = "Cannot remove mnemonic addresses";
  return KeyringErrors2;
})(KeyringErrors || {});
var SignerType = /* @__PURE__ */ ((SignerType2) => {
  SignerType2["ecdsa"] = "ecdsa";
  SignerType2["ed25519"] = "ed25519";
  SignerType2["sr25519"] = "sr25519";
  SignerType2["secp256k1"] = "secp256k1";
  SignerType2["secp256k1btc"] = "secp256k1-btc";
  return SignerType2;
})(SignerType || {});
var Errors = {
  SigningErrors,
  KeyringErrors,
  OtherErrors
};
export {
  CoingeckoPlatform,
  Errors,
  HWwalletCapabilities,
  HWwalletType,
  NetworkNames,
  SignerType,
  WalletType
};
