// Trees are data structures that consist of nodes in a parent / child relationship.
// There are typically multiple branches off the "root" node. ONe difference between trees
// and linked lists is that there are multiple paths to take with trees. Linked lists have
// one (or maybe two if you count reverse) way through.

// Nodes in a tree can only point to a child. They cannot reference nodes on their level
// or higher. The connection between nodes is often called an edge.

// Examples of trees: The DOM. Network routing. Abstract syntax trees. Artificial
// intelligence. File system. JSON.

// Binary Search Tree: Each parent node can have -at most- two children. Every node to the
// left of a parent node is always less than the parent. Every node to the right is always
// greater than the parent.

// These rules create optimizations for searching the tree. If you know that values will
// be less than or greater than, it could speed up your search considerably. This less
// than greater than thing is essentially just like binary searching. We get to
// "throw away" a portion of the tree at each comparison point.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // Let's go searching..
    let found = false;
    let currentNode = this.root;
    while (!found) {
      if (value === currentNode.value) return undefined;
      if (newNode.value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          found = true;
        }
      } else if (newNode.value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          found = true;
        }
      }
    }
    return this;
  }
  find(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentNode;
  }
}

let bst = new BinarySearchTree();

// Big O Implications
// Insertion: O(log n)
// Searching: O(log n)

// NOT guaranteed, though. There are some binary search trees that can be poorly
// structured. They may look more like a linked list. In this case, the "throwing away"
// optimization of binary search will not really help.
