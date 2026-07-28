class MinStack {
    constructor() {
        this.stack = [];
    }

    /** 
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            // First element is its own minimum
            this.stack.push([val, val]);
        } else {
            // Compare new val with current top element's stored minimum
            const currentMin = this.getMin();
            this.stack.push([val, Math.min(val, currentMin)]);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}