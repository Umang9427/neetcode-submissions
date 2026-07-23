class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        // Step 1: Sort weights in ascending order
        people.sort((a, b) => a - b);

        let left = 0;                  // Lightest remaining person
        let right = people.length - 1; // Heaviest remaining person
        let boatCount = 0;

        // Step 2: Pair heaviest with lightest where possible
        while (left <= right) {
            // If the lightest and heaviest can share a boat, pair them
            if (people[left] + people[right] <= limit) {
                left++; // Lightest gets on the boat
            }
            
            // The heaviest person ALWAYS gets a boat (either shared or alone)
            right--; 
            boatCount++; // One boat is used
        }

        return boatCount;
    }
}