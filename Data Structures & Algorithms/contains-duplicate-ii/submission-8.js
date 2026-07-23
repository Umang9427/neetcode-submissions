class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        var dups = new Map()
        var n = nums.length

        if(!nums || nums.length < 2) return false

        for (var i=0; i<n; i++){
            if(dups.has(nums[i])){
                if(Math.abs(i-dups.get(nums[i])) <=k){
                    return true
                }
                else{
                    dups.set(nums[i], i)
                }
            }
            else{
                dups.set(nums[i], i)
            }
        }
        return false
    }
}
