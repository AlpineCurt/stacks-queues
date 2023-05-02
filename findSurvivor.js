const LinkedListCirc = require("./linkedList-circ.js");

// This is pretty messy, but it works.
function findSurvivor(num, skip) {
    // Create and populate linked list
    const linkedList = new LinkedListCirc();
    for (let i = 1; i <= num; i++) {
        linkedList.push(i);
    }
    
    // traverse linked list and remove item at every 'skip' internal till one item remains
    let current = linkedList.head;
    while (linkedList.length > 1) {
        for (let i = 1; i + 1 < skip; i ++) {
            current = current.next;
        }
        current.next = current.next.next;
        current = current.next;
        linkedList.length --;
    }

    return current.val;
}

findSurvivor(10, 3);

module.exports = findSurvivor;