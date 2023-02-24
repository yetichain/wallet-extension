import type { Endpoint } from "@yetiwallet/extension-bridge/dist/types";
import type { ProviderName } from "./provider";
import type { OnMessageResponse, ProviderError } from "@yetiwallet/types";

export enum MessageType {
  WINDOW_REQUEST = "yeti_window_request",
  NEWWINDOW_REQUEST = "yeti_new_window_request",
  ACTION_REQUEST = "yeti_action_request",
  CS_REQUEST = "yeti_cs_request",
  BACKGROUND_REQUEST = "yeti_background_request",
}
export enum Destination {
  contentScript = "content-script",
  background = "background",
  window = "window",
  newWindow = "new-window",
  popup = "popup",
}

export enum InjectedIDs {
  main = "yeti-inject",
}

export enum InternalMethods {
  getEthereumEncryptionPublicKey = "yeti_eth_encryption_pubkey",
  ethereumDecrypt = "yeti_eth_decrypt",
  sign = "yeti_sign_hash",
  unlock = "yeti_unlock_keyring",
  lock = "yeti_lock_keyring",
  isLocked = "yeti_is_locked_keyring",
  newWindowInit = "yeti_newWindowInit",
  getSettings = "yeti_getAllSettings",
  newWindowUnload = "yeti_newWindowUnload",
  sendToTab = "yeti_sendToTab",
  getNewAccount = "yeti_getNewAccount",
  saveNewAccount = "yeti_saveNewAccount",
  changeNetwork = "yeti_changeNetwork",
}
export interface SendMessage {
  [key: string]: any;
  provider: ProviderName;
  message: string;
}
export interface ActionSendMessage {
  [key: string]: any;
  provider?: ProviderName;
  message: string;
  tabId?: number;
}
export interface Message extends SendMessage {
  sender: Endpoint;
}

export type onMessageType = (
  message: Message
) => Promise<OnMessageResponse | void>;

export interface InternalOnMessageResponse {
  result?: string;
  error?: ProviderError;
}
export type InternalMessageType = (
  message: Message
) => Promise<InternalOnMessageResponse>;
