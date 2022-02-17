export class Node {
  val: number;
  right: null | Node;
  left: null | Node;
  constructor(value: number) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  root: null | Node;
  constructor() {
    this.root = null;
  }

  addValue(val: number) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(val);
      return;
    } else {
      const searchTree = function (nodes: Node): void | null {
        if (val < nodes.val) {
          if (nodes.left === null) {
            nodes.left = new Node(val);
            return;
          } else if (nodes.val !== null) {
            return searchTree(nodes.left);
          }
        } else if (val > nodes.val) {
          if (nodes.right === null) {
            nodes.right = new Node(val);
            return;
          } else if (nodes.val !== null) {
            return searchTree(nodes.right);
          }
        } else {
          return null;
        }
      };
      searchTree(node);
    }
  }
}
