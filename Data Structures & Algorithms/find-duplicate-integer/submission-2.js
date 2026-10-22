class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i of nums){
            let idx = Math.abs(i) - 1
            if(nums[idx] < 0) return Math.abs(i)

            nums[idx] = -1 * nums[idx]
        }
        return -1
    }
}
