class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            // While nums[i] is in valid range [1, n] AND not at its correct spot
            while (
                nums[i] > 0 && 
                nums[i] <= n && 
                nums[nums[i] - 1] !== nums[i]
            ) {
                // Swap nums[i] with the element at its target index (nums[i] - 1)
                let targetIdx = nums[i] - 1;
                let temp = nums[i];
                nums[i] = nums[targetIdx];
                nums[targetIdx] = temp;
            }
        }

        // Second pass: Find the first index where index + 1 is missing
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        // If 1 to n are all present, the answer is n + 1
        return n + 1;
    }
}