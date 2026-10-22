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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    
    addTwoNumbers(l1, l2) {
        let carry = 0
        let dummy = new ListNode()
        let curr = dummy

        while(l1 || l2 || carry){
            let val1 = l1 === null? 0 : l1.val
            let val2 = l2 === null? 0 : l2.val

            let val = val1 + val2 + carry
            carry = Math.floor(val / 10)
            val = (val) % 10
            let temp = new ListNode(val, null)
            curr.next = temp
            
            curr = curr.next
            l1 != null ? l1 = l1.next : l1 = null
            l2 != null ? l2 = l2.next : l2 = null
        }

        return dummy.next
    }
}
