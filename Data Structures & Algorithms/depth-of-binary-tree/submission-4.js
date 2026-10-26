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
    maxDepth(root) {
        if(root === null) return 0

        let stack = [[root , 1]]
        let res = 0
        while(stack.length != 0){
            let curr = stack.pop()
            let par = curr[0]
            let depth = curr[1]

            if(par != null){
                res = Math.max(res, depth)
                stack.push([par.left, depth + 1])
                stack.push([par.right, depth + 1])
            }
        }
        return res
    }
}
