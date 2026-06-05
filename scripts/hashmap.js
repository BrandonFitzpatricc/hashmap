import { Bucket } from "./bucket.js";
import { Entry } from "./entry.js";

class HashMap {
  #loadFactor;
  #capacity;
  #buckets = [];

  constructor() {
    this.#loadFactor = 0.75;
    this.#initializeMap(16);
  }

  #initializeMap(capacity) {
    this.#capacity = capacity;
    for (let i = 0; i < this.#capacity; i++) {
      this.#buckets.push(new Bucket());
    }
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  #growMap() {
    const entries = this.entries();
    this.#buckets = [];
    this.#initializeMap(this.#capacity * 2);
    entries.forEach((entry) => {
      this.setEntry(entry[0], entry[1]);
    });
  }

  get capacity() {
    return this.#capacity;
  }

  setEntry(key, value) {
    const index = this.#hash(key);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.#buckets[index];
    bucket.insert(new Entry(key, value));
    if (this.length() > this.#capacity * this.#loadFactor) this.#growMap();
  }

  getValue(key) {
    const index = this.#hash(key);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.#buckets[index];
    return bucket.findValue(key);
  }

  hasKey(key) {
    const index = this.#hash(key);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.#buckets[index];
    return bucket.hasKey(key);
  }

  removeEntry(key) {
    const index = this.#hash(key);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.#buckets[index];
    return bucket.removeEntry(key);
  }

  length() {
    let count = 0;
    this.#buckets.forEach((bucket) => {
      count += bucket.size();
    });
    return count;
  }

  clear() {
    this.#buckets.forEach((bucket) => {
      bucket.removeAll();
    });
  }

  keys() {
    const keysArray = [];
    this.#buckets.forEach((bucket) => {
      keysArray.push(...bucket.toArray("key"));
    });
    return keysArray;
  }

  values() {
    const valuesArray = [];
    this.#buckets.forEach((bucket) => {
      valuesArray.push(...bucket.toArray("value"));
    });
    return valuesArray;
  }

  entries() {
    const entryArray = [];
    this.#buckets.forEach((bucket) => {
      entryArray.push(...bucket.toArray("entry"));
    });
    return entryArray;
  }

  // LAST THING YOU DID: REWRITE ADD METHOD IN BUCKET TO HANDLE DUPLICATES
  // NEXT: WRITE ENTRIES METHOD AND USE IT TO TEST SET METHOD
}

export { HashMap };
