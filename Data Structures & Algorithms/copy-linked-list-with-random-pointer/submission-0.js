// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

    const map = new Map();

    // Pass 1: Create copy nodes and store mapping
    let curr = head;
    while (curr) {
        map.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }

    // Pass 2: Assign next and random pointers
    curr = head;
    while (curr) {
        let copy = map.get(curr);
        copy.next = map.get(curr.next) || null;
        copy.random = map.get(curr.random) || null;
        curr = curr.next;
    }

    return map.get(head);
    }
}
