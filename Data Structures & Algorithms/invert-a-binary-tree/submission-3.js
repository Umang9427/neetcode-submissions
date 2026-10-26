/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root
        let que = [root]

        while(que.length != 0){
            let curr = que.shift()
            let temp = curr.left ? curr.left : null

            curr.left = curr.right ? curr.right : null
            curr.right = temp

            if(curr.left){
                que.push(curr.left)
            }
            if(curr.right){
                que.push(curr.right)
            }
        }
        return root
    }
}
