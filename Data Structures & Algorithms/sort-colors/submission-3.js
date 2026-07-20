class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

        var count0 = 0
        var count1 = 0
        var count2 = 0

        for (var i=0; i<nums.length; i++){
            if(nums[i] === 0){
                count0++
            }
            else if(nums[i]===1){
                count1++
            } 
            else{
                count2++
            }
        }
        
        for (var i=0; i<nums.length; i++){
            if(count0 > 0){
                count0--
                nums[i] = 0
                continue
            }
            if(count1 > 0){
                count1--
                nums[i] = 1
                continue
            }
            if(count2 > 0){
                count2--
                nums[i] = 2
                continue
            }
            

        }
        return nums

    }
}
