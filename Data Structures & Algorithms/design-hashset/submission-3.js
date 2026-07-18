class MyHashSet {
    
    constructor() {
        this.myobject= new Set()
    }

    /**
     * @param {number} key
     * @return {void}
     */
    
    add(key) {
        this.myobject.add(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.myobject.has(key)){
        this.myobject.delete(key)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.myobject.has(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
