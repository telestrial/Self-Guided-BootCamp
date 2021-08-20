// Given any type of tree, how do we visit every node one time?
// There are many different approaches here, many having to do with recursion.

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

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(25);
bst.insert(10);
bst.insert(33);
bst.insert(55);
bst.insert(74);
bst.insert(100);
bst.insert(51);

// Breadth-first Search
// -----> Looking across the tree
// ------> 10
//-----> 5 ----> 15
// --> 3 -> 8 -------> 20
//
// Steps
// 1. Create a queue and a variable to store the values of nodes visited.
// 2. Place the root nodes in the queue.
// 3. Loop as long as there is anything in the queue
//   * Dequeue a node from the queue and push the value of the node into the variable
//     that stores the nodes.
//   * If there is a left property on the node dequeued, add it to the queue.
//   * If there is a right property on the node dequeued, add it to the queue.
// 4. Return the variable that stores the values.

const breadthFirstSearch = (tree) => {
  if (!tree.root) return [];
  let queue = [];
  let visited = [];

  queue.push(tree.root);
  while (queue.length) {
    const current = queue[0];
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    visited.push(queue.shift().value); //.value is just optional. Depends what you want.
  }
  return visited;
};

// Depth-first Search
// Going down the tree.

// PreOrder
// Visit the node first, then look at the entire left side, then look at the entire
// right side. Recursion works well here.
//
// Create a variable to store the values of nodes visited.
// Store the root of the tree in a variable called current.
// Write a helper function which accepts a node
//   * Push the value of the node to the variable that stores the values.
//   * If the node has a left property, call the helper function with the left property
//     on the node. (recursive)
//   * If the node has a right property, call the helper function with the right property
//     on the node. (recursive)
// Invoke the helper function with the current variable.
// Return the array of visited values.

const dfsPreOrder = (tree) => {
  if (!tree.root) return [];
  const visited = [];

  const traverse = (node) => {
    visited.push(node.value); // .value optional here. Could change if you want node objs.
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(tree.root);
  return visited;
};

// PostOrder
// We explore all children before we visit them. From PreOrder, this is basically just
// re-ordering the operations we already wrote.

const dfsPostOrder = (tree) => {
  if (!tree.root) return [];
  const visited = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  };

  traverse(tree.root);
  return visited;
};

// InOrder
// Traverse left side. Visit each node on the left side.
// Traverse right side. Visit each node on the right side.

const dfsInOrder = (tree) => {
  if (!tree.root) return [];
  const visited = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  };

  traverse(tree.root);
  return visited;
};

// When should you use them?
// It all depends on the tree.

// If you have a tree that is fully fleshed out (wide), breadth first could be problematic
// from a space complexity standpoint. The queue would grow very big, but depth first
// doesn't have that problem.

// InOrder is commonly used because the data comes back sorted.
// PreOrder can be useful to reconstruct an existed tree.
// PostOrder sucks? (No examples given)
