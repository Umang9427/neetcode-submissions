class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
topKFrequent = function(nums, k) {
    // Step 1: Count frequencies
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Create buckets where index = frequency.
    // The max possible frequency is nums.length, so array size is length + 1.
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    
    // Step 3: Populate buckets
    for (const [num, count] of frequencyMap) {
        buckets[count].push(num);
    }
    
    // Step 4: Gather the top k frequent elements from right to left
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    return result; // We found our top K items!
                }
            }
        }
    }
    
    return result;
};
}
