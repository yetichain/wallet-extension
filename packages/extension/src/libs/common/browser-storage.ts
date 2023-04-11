import Storage from "@yetiwallet/storage";
import { BrowserStorageArea } from "@yetiwallet/types";

class BrowserStorage extends Storage {
  constructor(namespace: string, storage?: BrowserStorageArea) {
    super(namespace, { storage });
  }
}

export default BrowserStorage;
