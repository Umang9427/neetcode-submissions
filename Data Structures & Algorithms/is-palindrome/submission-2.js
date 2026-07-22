class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    
    isPalindrome(s) {
        var left = 0
        var right = s.length-1

        if(!s || s.length ===0) return false
        while (left<right){
            if(!jc(s[left])){
                left++
                continue
            }
            else if(!jc(s[right])){
                right-- 
                continue
            }
            else{
                if(s[left].toLowerCase()!= s[right].toLowerCase()){
                    return false
                }
                else{
                    left++
                    right--
                }
            }
        }
        return true
    }
}
function jc(char){
    const code = char.charCodeAt(0)
    
    return(
        (code>=48 && code<=57) || (code>=65 && code<=90)  || (code >= 97 && code <= 122) 

    )
    }