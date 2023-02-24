import { YetiAccount } from "@yetiwallet/types";
import { Token } from "./token";

export interface Account {
  name: string;
  address: string;
  amount: number;
  primaryToken: Token;
}

export interface AccountsHeaderData {
  selectedAccount: YetiAccount | null;
  activeAccounts: YetiAccount[];
  inactiveAccounts: YetiAccount[];
  activeBalances: string[];
}
