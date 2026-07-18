class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        var strslength = strs.length
        var temp = strslength

        if(strslength === 0) return ""
        if (strslength === 1) return strs[0]

        var prefix = strs[0]
        while (temp > 0){
            if (prefix === "") return "" 
            if(strs[temp-1].startsWith(prefix)){
                temp = temp - 1
                continue
            }
            else{
                prefix= prefix.slice(0, prefix.length-1)
                continue
            }
        }
        return prefix
    }
}
