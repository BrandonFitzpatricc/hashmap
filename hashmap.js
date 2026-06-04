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
}
