class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        if (!nums || nums.length === 0) return [];

        var candidate1, candidate2

        var count1=0, count2 = 0

        for (var i=0;i<nums.length; i++){
            if(candidate1 === nums[i]){
                count1++
            }
            else if(candidate2 === nums[i]){
                count2++
            }
            else if(count1==0){
                candidate1 = nums[i]
                count1 = 1

            }
            else if(count2===0){
                candidate2 = nums[i]
                count2 = 1
            }
            else{
                count1--
                count2--
            }
        }
       // Pass 2: Verify candidates
        count1 = 0;
        count2 = 0;

        for (let num of nums) {
            if (num === candidate1) count1++;
            else if (num === candidate2) count2++;
        }

        const result = [];
        const threshold = Math.floor(nums.length / 3);

        if (count1 > threshold) result.push(candidate1);
        if (count2 > threshold) result.push(candidate2);
    return result;

    }
}
