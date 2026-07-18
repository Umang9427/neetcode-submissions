class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var n = nums.length
        var output = new Array(n)

        var prefix = 1
        for (var i=0; i<n; i++){
            output[i] = prefix
            prefix *= nums[i]
        }

        
        var postfix = 1
        for (var i=n-1; i>=0; i--){
            output[i] *= postfix
            postfix *= nums[i]
        }
        return output
    }
}
