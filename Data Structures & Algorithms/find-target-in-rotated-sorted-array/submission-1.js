class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Determine if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target is within the left sorted half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Search left
            } else {
                left = mid + 1;  // Search right
            }
        } 
        // Otherwise, the right half must be sorted
        else {
            // Check if target is within the right sorted half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;  // Search right
            } else {
                right = mid - 1; // Search left
            }
        }
    }

    return -1; // Target not found
    }
}
