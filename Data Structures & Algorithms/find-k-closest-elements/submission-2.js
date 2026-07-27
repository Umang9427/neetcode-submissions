class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let n = arr.length;
        
        // 1. Find closet position to x using binary search
        let l = 0, r = n - 1;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] >= x) r = mid;
            else l = mid + 1;
        }

        // 2. Set pointers on both sides of x
        let l2 = l - 1;
        let r2 = l;

        // 3. Expand outwards until we pick k elements
        while (k > 0) {
            if (l2 < 0) {
                r2++;
            } else if (r2 >= n) {
                l2--;
            } else if (Math.abs(arr[l2] - x) <= Math.abs(arr[r2] - x)) {
                l2--; // Prefer smaller value on tie
            } else {
                r2++;
            }
            k--;
        }

        // 4. Return contiguous slice (l2 and r2 stopped 1 step beyond bounds)
        return arr.slice(l2 + 1, r2);
    }
}