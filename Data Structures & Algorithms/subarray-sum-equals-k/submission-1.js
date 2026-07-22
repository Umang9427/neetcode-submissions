class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        var totalsum = 0
        for(var i=0; i<nums.length; i++){
            var sum = 0
            for(var j = i; j<nums.length; j++){
                sum = sum + nums[j]
                if(sum === k){
                    totalsum++
                }
            }
        }
        return totalsum
    }
}
