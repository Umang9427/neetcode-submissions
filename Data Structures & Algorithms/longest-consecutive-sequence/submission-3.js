class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let map = new Map();
        let highest = 0;

        for (let num of nums) {
            // Skip duplicates
            if (map.has(num)) continue;

            // Fetch lengths of neighbors (0 if they don't exist)
            let left = map.get(num - 1) || 0;
            let right = map.get(num + 1) || 0;

            let newLen = left + right + 1;

            // Set current value
            map.set(num, newLen);

            // Update boundaries of the sequence!
            map.set(num - left, newLen);
            map.set(num + right, newLen);

            highest = Math.max(highest, newLen);
        }

        return highest;
    }
}
