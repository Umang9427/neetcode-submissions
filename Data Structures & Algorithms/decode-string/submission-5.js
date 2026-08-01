class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = []
        let currentnum = 0 
        let currentstr = ""

        for (let char of s){
            if(!isNaN(char)){
                currentnum = currentnum * 10 + Number(char)
            }
            else if(char === "["){
                stack.push(currentstr)
                stack.push(currentnum)

                currentnum = 0
                currentstr = ""
            }
            else if(char === "]"){
                var prevnum = stack.pop()
                var prevstr = stack.pop()

                currentstr = prevstr + currentstr.repeat(prevnum)
            }
            else{
                currentstr += char
            }
        }

        return currentstr 
    }
}
