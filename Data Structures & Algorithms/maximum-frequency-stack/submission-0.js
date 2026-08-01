class FreqStack {
    constructor() {
        this.map = new Map()
        this.freqmap = new Map()
        this.maxfreq = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let count = (this.map.get(val) || 0) + 1
        this.map.set(val, count)

        if(count > this.maxfreq) this.maxfreq = count

        if(!this.freqmap.has(count)){
            this.freqmap.set(count, [])
        }
        this.freqmap.get(count).push(val)
    }

    /**
     * @return {number}
     */
    pop() {
        let val = this.freqmap.get(this.maxfreq).pop()

        this.map.set(val, this.map.get(val) - 1)

        if(this.freqmap.get(this.maxfreq).length === 0){
            this.maxfreq--
        }
        return val
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
