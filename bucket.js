import { Node } from "./node";

class Bucket {
  #head;

  constructor() {
    this.#head = null;
  }

  append(entry) {
    if (this.#head === null) {
      this.#head = new Node(entry);
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(entry);
    }
  }

  size() {
    let count = 0;
    let currentNode = this.#head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  findValue(key) {
    let currentNode = this.#head;
    while (currentNode !== null) {
      if (currentNode.entry.key === key) break;
      currentNode = currentNode.nextNode;
    }
    return currentNode !== null ? currentNode.entry.value : null;
  }

  hasKey(key) {
    let currentNode = this.#head;
    while (currentNode !== null) {
      if (currentNode.entry.key === key) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  removeEntry(key) {
    if (this.#head === null) return false;

    if (this.#head.entry.key === key) {
      this.#head = this.#head.nextNode;
      return true;
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        if (currentNode.nextNode.entry.key === key) {
          currentNode.nextNode = currentNode.nextNode.nextNode;
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  }

  removeAll() {
    while (this.#head !== null) {
      this.#head = this.#head.nextNode;
    }
  }

  // Can return either an array of keys, array of values, or an array of entries
  // depending on the arrayType argument value.
  toArray(arrayType) {
    let arr = [];
    let currentNode = this.#head;
    while (currentNode !== null) {
      const arrayValue = {
        key: currentNode.entry.key,
        value: currentNode.entry.value,
        entry: [currentNode.entry.key, currentNode.entry.value],
      };
      arr.push(arrayValue[arrayType]);
      currentNode = currentNode.nextNode;
    }
    return arr;
  }
}

export { Bucket };
