class MyStack {
    constructor() {
        this.stack = new Array()
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.stack.length === 0){
            return false
        }
        else{
            let last = this.stack[this.stack.length - 1]  
            this.stack.pop()
            return last
        }
    }

    /**
     * @return {number}
     */
    top() {
         if(this.stack.length === 0){
            return false
        }
        else{
            return this.stack[this.stack.length - 1]
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        if(this.stack.length === 0){
            return true
        }
        else{
            return false
        }
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
