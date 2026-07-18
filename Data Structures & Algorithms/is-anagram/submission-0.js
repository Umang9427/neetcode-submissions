class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        var cleanSort = (str) => str.split('').sort().join(''); 

        return cleanSort(s) === cleanSort(t)

    }
}
