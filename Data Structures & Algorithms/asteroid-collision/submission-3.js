class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    /**
 * @param {number[]} asteroids
 * @return {number[]}
 */
asteroidCollision(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        // Collision happens ONLY if top is moving RIGHT (> 0) and current is moving LEFT (< 0)
        while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const top = stack[stack.length - 1];

            if (top < Math.abs(asteroid)) {
                // Top asteroid explodes, check next element in stack
                stack.pop();
            } else if (top === Math.abs(asteroid)) {
                // Both asteroids explode
                stack.pop();
                destroyed = true;
                break;
            } else {
                // Current asteroid explodes
                destroyed = true;
                break;
            }
        }

        // If current asteroid wasn't destroyed, push to stack
        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
}
}
