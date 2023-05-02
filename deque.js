/** Node: node for a deque. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  /** Deque: double ended queue.  Add to front or back,
   * and remove from front or back */

  class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** push(val): add new value to beginning of queue. Returns undefined  */

    push(val) {
    const newVal = new Node(val);
    if (this.first !== null) newVal.next = this.first;
    if (this.last === null) this.last = newVal;
    this.first = newVal;
    this.size ++;
    }

    /** pop(): remove the node from the beginning of queue
    * and return its value. Should throw an error if the stack is empty. */

    pop() {
        // Edge case:  empty queue
        if (this.first === null) throw new Error("Empty queue");

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

    /** This is incomplete */
  }