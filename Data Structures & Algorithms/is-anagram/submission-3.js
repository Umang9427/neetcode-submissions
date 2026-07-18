class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        var anagram = new Map()

        for (let char of s){
            anagram.set(char, (anagram.get(char)||0)+1)
        }
        for (let char of t){
            if (!anagram.get(char) || anagram.get(char)== 0) return false
            else{
                anagram.set(char, anagram.get(char) - 1)
            }
        }
        return true
    }
}