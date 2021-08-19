// Not unlike singly linked lists in structure except for the fact that each node has
// a pointer to the previous node. This changes many of the methods of control.
// More flexibility == More Memory - A common programming trade-off.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    } else {
      let count = this.length - 1;
      let currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode;
    }
  }
  set(index, val) {
    let targetNode = this.get(index);
    if (targetNode != null) {
      targetNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    let beforeNode = get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let targetNode = this.get(index);
    let beforeNode = targetNode.prev;
    let afterNode = targetNode.next;

    (beforeNode.next = afterNode), (afterNode.prev = beforeNode);
    (targetNode.next = null), (targetNode.prev = null);
    this.length--;
    return targetNode;
  }
}

const list = new DoublyLinkedList();

// Big 0 considerations
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(n)

// These are found in the wild. Search history, for example. They're better
// for finding things, but there is an additional memory consideration with
// the extra "prev" pointer.
