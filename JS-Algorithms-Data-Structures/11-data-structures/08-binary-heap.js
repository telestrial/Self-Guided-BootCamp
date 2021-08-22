// Similar to a binary search tree, but it has different rules.
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a
// MinBinaryHeap, parent nodes are always smaller than child nodes. There is no order to
// the left or the right.

// You can use built-in structures to represent binary heaps.

// Representing a heap in an array is based on a parent->child index relationship of
// 2n + 1, 2n + 2. And child->parent of ((n-1) / 2).floor()

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    return this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChildIdx = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// Priority Queue.
// Binary Heaps are often used as such...or at least a version of them are.

// A naive version of a priority queue is to use a list to store all elements. Have some
// "priority" key or value in them. The obvious issue is that, in order to find the next
// item of greater priority, you must iterate over the entire list. Of course, that's
// O(n) complextiy. We can do better with a binary heap.

// Heaps work well for this because it is very cheap to pull an element from the top, and
// reordering the heap is O(log n). Quite a bit better than O(n).

// This is a MIN binary heap, but Priority Queues can be max binary heaps, too--like above.

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    return this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChildIdx = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 2);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

// Big O Implications of Binary Heaps
// Insertion: O(log n)
// Removal: O(log n)
// Search: O(n)

// Think about the binary search. During MANIPULATION of the binary heap, we are
// "throwing out" portions of the heap on each step. We even gain some efficiency,
// perhaps, over trees because binary heaps have a forced construction. You can never
// have a binary heap with one long branch. The way it is set up rules this out.

// While search is O(n) in this case, we don't use binary heaps this way. There is no
// or very little implied order to siblings (nodes on the tree the same distance away
// from the max or min "top-level" value).
