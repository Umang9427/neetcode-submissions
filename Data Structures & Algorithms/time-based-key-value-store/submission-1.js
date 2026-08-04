class TimeMap {
    constructor() {
        // Map<string, Array<{ timestamp: number, value: string }>>
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        // Since timestamps strictly increase, pushing keeps the array sorted
        this.map.get(key).push({ timestamp, value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
if (!this.map.has(key)) return "";

        const list = this.map.get(key);
        let left = 0;
        let right = list.length - 1;
        let res = "";

        // Binary search for largest timestamp <= target timestamp
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (list[mid].timestamp <= timestamp) {
                res = list[mid].value; // Found a valid timestamp, save candidate
                left = mid + 1;        // Try to find an even larger timestamp <= target
            } else {
                right = mid - 1;       // Timestamp too large, search left
            }
        }

        return res;
    }
}
