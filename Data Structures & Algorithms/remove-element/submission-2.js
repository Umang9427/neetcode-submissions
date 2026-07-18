class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0; // Pointer for the position of valid elements

    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT the value we want to remove
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move it to the front at index k
            k++; // Increment our count of valid elements
        }
    }

    return k; // Return the total count of elements not equal to 'val'
    }
}
