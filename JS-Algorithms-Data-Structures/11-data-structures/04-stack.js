// Last in First Out.
// They are frequently used to manage function invocations. Undo/Redo functionality.
// There are several ways to implement a stack. A stack is more a concept than a
// specific set of syntax.

// Array Implementation.
let arrStack = [];
arrStack.push('google.com');
arrStack.push('reddit.com');
arrStack.push('instagram.com');
console.log(arrStack);
console.log(arrStack.pop());
console.log(arrStack.pop());
console.log(arrStack.push('amazon.com'));
console.log(arrStack);
console.log(arrStack.pop());
console.log(arrStack.pop());

// Could also use unshift and shift, but you then have to accept the Big O implications
// of re-indexing the array every time.

// A linked list would likely provide a faster implementation in most cases. Arrays come
// with a lot of unnecessary baggage: index, methods, etcetera. Things you won't use in
// a stack.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let prevfirst = this.first;
      this.first = newNode;
      newNode.next = prevfirst;
      this.size++;
    }
    return this.size;
  }
  pop() {
    if (!this.first) return null;
    let poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return poppedNode.value;
  }
}

// Big O Implications
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(n)
