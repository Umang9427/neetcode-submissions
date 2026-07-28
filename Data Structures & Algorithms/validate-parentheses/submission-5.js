class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        let closeopen = { ")" : "(", "}" : "{", "]": "["}

        for (let char of s){
            if (char in closeopen){
                if (stack && closeopen[char] === stack[stack.length - 1]){
                    stack.pop()
                }
                else{
                    return false
                }
            }
            else{
                stack.push(char)
            }
        }
if (stack.length === 0) {
    return true;
} else {
    return false;
}    }
}
