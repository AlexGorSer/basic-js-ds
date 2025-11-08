const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
      return this._root;
    }

    let node = this._root;

    while(node) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
          return;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          return;
        }
        node = node.right;
      }
    }
  }

  find(data) {
    let node = this._root;

    while (node) {
      if (data === node.data) {
        return node;
      }
      if(data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  remove(data) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  min() {
    let leftNode = this._root;
    while(leftNode) {
      leftNode= leftNode.left;
    }
    return leftNode;
  }

  max() {
    let rightNode = this._root;
    while(rightNode) {
      rightNode= rightNode.right;
    }
    return rightNode;
  }
}

// const test = new BinarySearchTree();
// test.add(10);
// test.add(5); 
// console.log(test.root());
module.exports = {
  BinarySearchTree,
};
