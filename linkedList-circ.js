/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newVal = new Node(val);
    if (this.head === null) this.head = newVal;
    if (this.tail !== null) {
      newVal.prev = this.tail;
      this.tail.next = newVal;
    }
    this.tail = newVal;
    this.tail.next = this.head
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newVal = new Node(val);
    if (this.head !== null) newVal.next = this.head;
    if (this.tail === null) this.tail = newVal;
    this.head = newVal;
    this.length ++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // Edge case:  empty list
    if (this.tail === null) return null;

    // Edge case:  one item in list
    if (this.head === this.tail) {
      const popped = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped;
    }

    // traverse till node before tail is found
    let current = this.head;
    while (this.tail !== current.next) {
      current = current.next;
    }
    const popped = current.next.val;
    this.tail = current;
    this.tail.next = this.head;
    this.length --;
    return popped;
  }

  /** shift(): return & remove first item. */

  shift() {
    // Edge case:  empty list
    if (this.tail === null) return null;

    // Edge case:  one item in list
    if (this.head === this.tail) {
      const popped = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped;
    }

    const popped = this.head.val;
    this.head = this.head.next;
    this.tail.next = this.head;
    this.length --;
    return popped;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currIdx = 0;
    let current = this.head;
    while (currIdx < this.length) {
      if (currIdx === idx) return current.val;
      current = current.next;
      currIdx ++;
    }
    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currIdx = 0;
    let current = this.head;
    while (currIdx < this.length) {
      if (currIdx === idx) {
        current.val = val;
        return;
      }
      current = current.next;
      currIdx ++;
    }
    return null;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // Edge case: idx is 0
    if (idx === 0) {
      return this.unshift(val);
    }

    // Edge case:  idx is end of list
    if (idx === this.length) {
      return this.push(val);
    }
    
    let currIdx = 0;
    let current = this.head;
    while (currIdx < this.length) {
      if (idx === currIdx + 1) {
        const newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        this.length ++;
        return;
      }
      current = current.next;
      currIdx ++;
    }
    return null;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // Edge case: idx is 0
    if (idx === 0) {
      return this.shift();
    }

    // Edge case:  idx is end of list
    if (idx === this.length) {
      return this.pop();
    }

    let currIdx = 0;
    let current = this.head;
    while (currIdx < this.length) {
      if (idx === currIdx + 1) {
        const val = current.next.val
        current.next = current.next.next;
        return val;
      }
      current = current.next;
      currIdx ++;
    }
    return null;
  }

  /** average(): return an average of all values in the list */

  average() {
    // Edge Case:  empty list
    if (this.length === 0) return 0;

    let sum = 0;
    let currIdx = 0;
    let current = this.head;
    while (currIdx < this.length) {
      sum += current.val;
      current = current.next;
      currIdx ++;
    }
    return sum/currIdx;
  }
}

module.exports = LinkedList;
