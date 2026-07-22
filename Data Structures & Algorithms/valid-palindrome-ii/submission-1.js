class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--; // Fix 1: Decrement right!
            } else {
                // Fix 2: Check BOTH possibilities using a helper function:
                // 1. Skip left character (left + 1, right)
                // 2. Skip right character (left, right - 1)
                return (
                    this.isPalindrome(s, left + 1, right) ||
                    this.isPalindrome(s, left, right - 1)
                );
            }
        }

        return true;
    }

    // Helper method to check if a substring is a standard palindrome
    isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}