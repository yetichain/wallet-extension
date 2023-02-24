// src/local-forage.ts
import LocalForageLib from "localforage";
var LocalForage = class {
  constructor(namespace, drivers = [
    LocalForageLib.INDEXEDDB,
    LocalForageLib.LOCALSTORAGE
  ]) {
    this.namespace = namespace;
    this.storage = LocalForageLib.createInstance({
      name: this.namespace,
      driver: drivers,
      storeName: "enkrypt_db"
    });
  }
  async set(items) {
    const promises = [];
    Object.keys(items).forEach((key) => {
      promises.push(this.storage.setItem(key, items[key]));
    });
    await Promise.all(promises);
  }
  remove(key) {
    return this.storage.removeItem(key);
  }
  clear() {
    return this.storage.clear();
  }
  get(key) {
    return this.storage.getItem(key).then((item) => {
      if (!item)
        return {};
      return {
        [key]: item
      };
    });
  }
  async getWholeStorage() {
    const storeOb = {};
    return this.storage.iterate((value, key) => {
      storeOb[key] = value;
    }).then(() => storeOb);
  }
  //   setDriver(driver: LocalForageDriver) {
  //     this.storage.defineDriver(driver);
  //     this.storage.setDriver(driver._driver);
  //   }
};
var local_forage_default = LocalForage;

// src/index.ts
var Storage = class {
  constructor(namespace, options) {
    if (!options.storage)
      options.storage = new local_forage_default(namespace);
    this.namespace = namespace;
    this.storage = options.storage;
  }
  async get(key) {
    const vals = await this.storage.get(this.namespace);
    if (vals[this.namespace] && vals[this.namespace][key])
      return vals[this.namespace][key];
    return null;
  }
  async set(key, val) {
    let vals = await this.storage.get(this.namespace);
    vals = vals[this.namespace] ? vals[this.namespace] : {};
    vals[key] = val;
    return this.storage.set({
      [this.namespace]: vals
    });
  }
  async remove(key) {
    let vals = await this.storage.get(this.namespace);
    vals = vals[this.namespace] ? vals[this.namespace] : {};
    delete vals[key];
    return this.storage.set({
      [this.namespace]: vals
    });
  }
  async clear() {
    return this.storage.remove(this.namespace);
  }
};
var src_default = Storage;
export {
  src_default as default
};
