class Node {
  #entry;
  #nextNode;

  constructor(entry, nextNode) {
    this.#entry = entry ? entry : null;
    this.#nextNode = nextNode ? nextNode : null;
  }

  get entry() {
    return this.#entry;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set nextNode(entry) {
    this.#nextNode = entry;
  }
}

export { Node };
