class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var temp = new Map()

        for (var i = 0; i < nums.length; i++){
            temp.set(nums[i], i)
        }
        for (var i=0; i<nums.length; i++){
            var complement = target - nums[i];
            if (temp.has(complement) && temp.get(complement) !== i){
                return [i, temp.get(complement)]
            } 
        }
    }
}