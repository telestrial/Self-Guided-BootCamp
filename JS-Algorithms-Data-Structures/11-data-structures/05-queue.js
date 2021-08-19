// First In First Out
// Background tasks, uploading resources, printing/task processing. Gaming queues are
// very common.

// Like stacks, you can use an array:

let arrQueue = [];

arrQueue.push(1);
arrQueue.push(2);
arrQueue.push(3);
arrQueue.push(4);
arrQueue.push(5);
arrQueue.shift(); // => 1

// OR

let arrQueue = [];
arrQueue.unshift(1);
arrQueue.unshift(2);
arrQueue.unshift(3);
arrQueue.unshift(4);
arrQueue.unshift(5);
arrQueue.pop(); // => 1

// There's no way around the fact that whats above has extra indexing.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.value;
  }
}

// Big O Implications
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(n)
