class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        if (nums.length === 1) return nums[0]
        var sortednums = nums.sort()

        var counter = 1
        var halftime = nums.length/2
        for (var i=1; i<nums.length; i++){
                

            if(sortednums[i-1]===sortednums[i]){
                counter = counter + 1
            }
            else{
                counter = 1
            }

            if(counter > halftime){
                    return nums[i-1]
                }
        }
    }
}
