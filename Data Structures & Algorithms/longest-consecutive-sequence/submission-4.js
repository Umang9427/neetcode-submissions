class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       if (!nums || nums.length === 0) return 0;

        const numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            // Only check sequence length if 'num' is the START of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // Count upwards as far as the sequence goes
                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                longest = Math.max(longest, currentStreak);
            }
        }

        return longest;
    }
}
