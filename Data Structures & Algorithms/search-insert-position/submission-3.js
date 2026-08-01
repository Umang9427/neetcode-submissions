class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0 
        let right = nums.length-1
        let mid = 0
        while (left <= right){
            mid = Math.floor(left + (right - left) / 2)

            if (nums[mid] === target){
                return mid
            }
            else if(nums[mid] < target){
                left = mid + 1
            }
            else{
                right = mid - 1
            }

        }
        if(nums[mid] < target){
            return mid+1 
        }
        else{
            return mid
        }
    }
}
