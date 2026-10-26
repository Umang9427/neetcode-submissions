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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(root === null) return 0
        let res = 0
        function diameter(node){
            if(node === null) return 0

            let left = diameter(node.left)
            let right = diameter(node.right)
            res = Math.max(res, left + right)

            return 1 + Math.max(left, right)
        }  
        diameter(root)
        return res
    }
}
