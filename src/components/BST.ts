export class Node {
  val: number;
  right: null | Node;
  left: null | Node;
  constructor(value: number) {
    this.val = value;
    this.left = null;
    this.right = null;
  }

  addNode(n: Node) {
    if (n.val < this.val) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.val > this.val) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }
}

export class Tree {
  root: null | Node;
  constructor() {
    this.root = null;
  }

  addValue(val: number) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }
}
