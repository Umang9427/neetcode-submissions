class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        // Pointer k keeps track of the index for unique elements
        let k = 1;

        for (let i = 1; i < nums.length; i++) {
            // If current element is different from the previous unique element
            if (nums[i] !== nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}