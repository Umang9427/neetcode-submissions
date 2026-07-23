class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        
        // Step 1: Sort the array to enable two pointers and duplicate skipping
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate values for the first element
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Early exit optimization: If smallest number > 0, sum can never be 0
            if (nums[i] > 0) break;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Skip duplicates for the second element
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the third element
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    // Move both pointers inward
                    left++;
                    right--;
                } else if (sum < 0) {
                    // Sum is too small -> move left pointer right to increase sum
                    left++;
                } else {
                    // Sum is too large -> move right pointer left to decrease sum
                    right--;
                }
            }
        }

        return result;
    }
}