/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let fast = dummy;
        let slow = dummy;

        // Step 1: Move fast pointer n + 1 steps ahead
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Step 2: Move both pointers until fast reaches the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Step 3: Skip the target node
        slow.next = slow.next.next;

        return dummy.next;
    }
}
