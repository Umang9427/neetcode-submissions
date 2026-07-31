class StockSpanner {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        if(this.stack.length === 0){
            if(!price){
                return null
            } 
            else{
                this.stack.push(price)
                return 1
            } 

        }else{
            let output = 1
            let n = this.stack.length
            while(n > 0 && this.stack[n-1] <= price && this.stack[n-1]!= null){
                output++
                n--
            }
            this.stack.push(price)
            return output
        }
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
