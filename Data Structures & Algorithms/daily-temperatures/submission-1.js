class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = []; // Stores indices

    for (let i = 0; i < n; i++) {
        // While current temp is warmer than temp at index on top of stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        
        // Push current day's index
        stack.push(i);
    }

    return result;
    }
}
