class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // Map stores: key = prefixSum, value = frequency of prefixSum
        let map = new Map();
        
        // Base case: prefix sum of 0 occurs once before iterating
        map.set(0, 1);

        let currentSum = 0;
        let count = 0;

        for (let num of nums) {
            currentSum += num;

            // Check if (currentSum - k) exists in map
            if (map.has(currentSum - k)) {
                count += map.get(currentSum - k);
            }

            // Record currentSum in the map
            map.set(currentSum, (map.get(currentSum) || 0) + 1);
        }

        return count;
    }
}
