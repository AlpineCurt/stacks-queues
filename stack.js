/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    const newVal = new Node(val);
    if (this.first !== null) newVal.next = this.first;
    if (this.last === null) this.last = newVal;
    this.first = newVal;
    this.size ++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // Edge case:  empty stack
    if (this.first === null) throw new Error("Empty stack");

    // Edge case:  one item in stack
    if (this.first === this.last) {
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

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) return null;
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
