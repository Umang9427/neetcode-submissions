class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let left = 0
        let right = 0

        for(var i = 0; i < nums.length; i++){
            if(nums[i] > left) left = nums[i]

            right += nums[i]
        }

        function countSubArrays(maxSum) {
            let count = 1
            let currentSum = 0
            for(let num of nums){
                if(currentSum + num > maxSum){
                    count++
                    currentSum = num
                }
                else{
                    currentSum += num 
                }
            }
        return count
        }

        while (left < right){
            let mid  = Math.floor(left + (right - left) /2 )

            if(countSubArrays(mid) <= k){
                right = mid
            }
            else{
                left = mid + 1
            }
        }
        return left
    }
}
