class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let unique = new Set();
        let left = 0;
        let max = 0;

        for (let right = 0; right < s.length; right++) {
            // Shrink window from left until the duplicate character is removed
            while (unique.has(s[right])) {
                unique.delete(s[left]);
                left++;
            }

            // Add current character to window
            unique.add(s[right]);

            // Update max length seen so far
            max = Math.max(max, right - left + 1);
        }

        return max;
    }
}