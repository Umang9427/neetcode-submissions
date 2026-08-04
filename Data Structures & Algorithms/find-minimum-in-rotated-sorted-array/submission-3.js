class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            // Min is in the right unsorted section
            left = mid + 1;
        } else {
            // Min is mid or in the left section
            right = mid;
        }
    }

    // When left === right, we have converged on the minimum element
    return nums[right];
    }
}
