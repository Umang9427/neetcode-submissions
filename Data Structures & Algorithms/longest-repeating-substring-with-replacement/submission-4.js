class Solution {
    /**
     * @param {string} s
     * @param {numbera} k
     * @return {number}
     */
  characterReplacement(s, k) {
    const counts = {}; // Stores character frequencies in the current window
    let left = 0;
    let maxFreq = 0;   // Count of the most frequent character in the window
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        counts[char] = (counts[char] || 0) + 1;
        
        // Update the count of the most frequent character seen so far
        maxFreq = Math.max(maxFreq, counts[char]);

        // Current window size is (right - left + 1)
        // If (windowSize - maxFreq) > k, the window is invalid, so shrink it
        while ((right - left + 1) - maxFreq > k) {
            counts[s[left]]--;
            left++;
        }

        // Record the maximum valid window size
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
}
