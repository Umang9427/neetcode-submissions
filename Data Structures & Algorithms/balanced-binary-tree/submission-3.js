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
     * @return {boolean}
     */
    isBalanced(root) {

        function dfs(root){
            if(!root) return [1, 0]
            let [lbal, lheight] = dfs(root.left)
            let [rbal, rheight] = dfs(root.right) 

            let bal
            if(lbal === 1 && rbal === 1 && Math.abs(lheight - rheight) < 2){
                bal = 1
            }
            else{
                bal = 0
            }

            return [bal, 1 + Math.max(lheight, rheight)]
        }
        return dfs(root)[0] === 1
        
    }
}
