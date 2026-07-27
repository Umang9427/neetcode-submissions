class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    const deque = []; // Stores indices
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window bound
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Maintain decreasing order: remove smaller elements from back
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // 3. Add current index to back of deque
        deque.push(i);

        // 4. Add maximum (front of deque) to result once first full window is processed
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
    }
}
