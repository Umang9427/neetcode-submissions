class MyHashMap {
    constructor() {
        this.buckets = 769;
        this.keys = Array.from({length: this.buckets}, () => []);
        this.values = Array.from({length: this.buckets}, () => []);
    }

    _hash(key) {
        return key % this.buckets;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this._hash(key); // Fix 1: Added "this."
        const keyIndex = this.keys[index].indexOf(key);

        if (keyIndex === -1) {
            // Key doesn't exist, push new key and value
            this.keys[index].push(key);
            this.values[index].push(value);
        } else {
            // Fix 2: Update only the value matching the key's position
            this.values[index][keyIndex] = value;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this._hash(key); // Fix 1: Added "this."
        const keyIndex = this.keys[index].indexOf(key);

        if (keyIndex === -1) {
            return -1;
        } else {
            // Fix 3: Return the actual mapped value
            return this.values[index][keyIndex];
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this._hash(key); // Fix 1: Added "this."
        const keyIndex = this.keys[index].indexOf(key);

        if (keyIndex !== -1) {
            // Fix 4: Splice using keyIndex, not bucket index
            this.keys[index].splice(keyIndex, 1);
            this.values[index].splice(keyIndex, 1);
        }
    }
}