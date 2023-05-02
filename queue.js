/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newVal = new Node(val);
    if (this.first === null) this.first = newVal;
    if (this.last !== null) this.last.next = newVal;
    this.last = newVal;
    this.size ++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // Edge case:  empty queue
    if (this.last === null) throw new Error("Empty queue");

    // Edge case:  one item in list
    if (this.list === this.last) {
      const popped = this.first.val;
      this.first = null;
      this.last = null;
      this.size = 0;
      return popped;
    }

    const popped = this.first.val;
    this.first = this.first.next;
    this.size --;
    return popped;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) return null;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}
module.exports = Queue;
