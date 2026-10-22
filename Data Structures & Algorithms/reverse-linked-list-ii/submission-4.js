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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head)
        let prev = dummy
        let curr = dummy.next

        for(let i = 0; i < left - 1; i++){
            prev = prev.next
            curr = curr.next
        }

        let newprev = null
        for(let i = 0; i < right - left + 1; i++){
            let temp = curr.next
            curr.next = newprev
            newprev = curr
            curr = temp
        }
        prev.next.next = curr
        prev.next = newprev
        return dummy.next
    }
}
