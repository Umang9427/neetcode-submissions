class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let carsl = position.length
        let cars = []
        
        let output = 0
        if(!position && carsl === 0) return 0

        
        for( let i = 0; i< carsl ; i++){
            let relpos =  target - position[i]
            cars[i] = [position[i], relpos / speed[i]] 
        }
        cars.sort( (a,b) => b[0] - a[0])

        let fleets = 0;
        let maxTime = 0; // Tracks arrival time of current fleet leader

        // 3. Iterate through cars from closest to farthest
        for (let i = 0; i < carsl; i++) {
            const currentTime = cars[i][1];

            // If this car takes longer than the fleet ahead, it starts a NEW fleet
            if (currentTime > maxTime) {
                fleets++;
                maxTime = currentTime; // Update fleet leader's time
            }
            // Otherwise, currentTime <= maxTime: it catches up and merges into maxTime fleet
        }

        return fleets;
    }
}
