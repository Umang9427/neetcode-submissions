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
topKFrequent = function(nums, k) {
    // Step 1: Count how many times each number appears using a Map
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Convert the map into an array of entries: [[num, count], [num, count]]
    const entriesArray = [...frequencyMap.entries()];
    
    // Step 3: Sort the array based on the count (index 1) in descending order
    entriesArray.sort((a, b) => b[1] - a[1]);
    
    // Step 4: Extract the keys (index 0) of the first 'k' elements
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(entriesArray[i][0]);
    }
    
    return result;
};
}
