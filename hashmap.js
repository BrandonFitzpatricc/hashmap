import { Bucket } from "./bucket";

class HashMap {
  #loadFactor;
  #capacity;
  #buckets;

  constructor() {
    this.#loadFactor = 0.75;
    this.#capacity = 16;
    this.#buckets.fill(new Bucket());
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }
}
