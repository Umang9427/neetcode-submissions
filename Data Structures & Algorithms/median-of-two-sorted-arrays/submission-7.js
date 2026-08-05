class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // BUG FIX 1: Added 'return' keyword
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let m = nums1.length;
        let n = nums2.length;
        let l = 0, r = m;
        
        // BUG FIX 2: Added '+ 1' to put the extra element on the left for odd total lengths
        let halflen = Math.floor((m + n + 1) / 2);

        while (l <= r) {
            // BUG FIX 4: Removed right-bias '+ 1' to prevent infinite loops
            let i = Math.floor((l + r) / 2);
            let j = halflen - i;

            let max1 = i <= 0 ? -Infinity : nums1[i - 1];
            let min1 = i >= m ? Infinity  : nums1[i];
            
            // BUG FIX 3: Changed nums2[j] to nums2[j - 1]
            let max2 = j <= 0 ? -Infinity : nums2[j - 1];
            let min2 = j >= n ? Infinity  : nums2[j];

            // BUG FIX 5: Corrected comparison (left maxes <= right mins)
            if (max1 <= min2 && max2 <= min1) {
                // BUG FIX 6: Swapped max/min logic to match left vs right partition halves
                if ((m + n) % 2 === 0) {
                    return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
                } else {
                    return Math.max(max1, max2);
                }
            } 
            else if (max1 > min2) {
                r = i - 1;
            } 
            else {
                l = i + 1;
            }
        }

        return 0;
    }
}