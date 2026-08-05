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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head, fast = head

        while(fast){
             slow = slow.next
            if(fast.next!=null){
                fast = fast.next.next
            }
            else{
                fast = fast.next
                return false
            }
            if(fast === null) return false
            if(slow === fast){
                return true
            }
           
        }
        return false
    }
}
