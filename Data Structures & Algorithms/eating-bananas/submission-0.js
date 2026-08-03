class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
    let right = Math.max(...piles);

    // Helper function to calculate total hours needed at speed k
    function getHours(k) {
        let hours = 0;
        for (let pile of piles) {
            // Equivalent to Math.ceil(pile / k) without float precision issues
            hours += Math.ceil(pile / k);
        }
        return hours;
    }

    // Binary search for the minimum k
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (getHours(mid) <= h) {
            // Speed mid is fast enough, try to find a smaller speed
            right = mid;
        } else {
            // Speed mid is too slow, increase speed
            left = mid + 1;
        }
    }

    return left; // 'left' is the minimum speed k
    }
}
