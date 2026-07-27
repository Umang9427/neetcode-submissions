class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0
        let maxoutput = Infinity
        let currentoutput = 0

        if(!nums && nums.length === 0) return 0

        for( var right = 0; right< nums.length; right++){
            currentoutput += nums[right]

            while(currentoutput >= target){
                maxoutput = Math.min(right-l+1, maxoutput)
                currentoutput -= nums[l]
                l++
                
            }
        }
        return maxoutput === Infinity ? 0 : maxoutput
    }
}
