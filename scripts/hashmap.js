import { Bucket } from "./bucket.js";
import { Entry } from "./entry.js";

class HashMap {
  #loadFactor;
  #capacity;
  #buckets = [];

  constructor() {
    this.#loadFactor = 0.75;
    this.#capacity = 16;
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

  setEntry(key, value) {
    const index = this.#hash(key);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.#buckets[index];
    bucket.insert(new Entry(key, value));
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
