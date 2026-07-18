class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

    for (const str of strs) {
        // 1. Sort the characters of the word to get its unique signature
        //    "act" -> ["a", "c", "t"] -> ["a", "c", "t"] -> "act"
        //    "cat" -> ["c", "a", "t"] -> ["a", "c", "t"] -> "act"
        const sortedKey = str.split('').sort().join('');
        
        // 2. If we haven't seen this signature before, create an empty sublist for it
        if (!groups[sortedKey]) {
            groups[sortedKey] = [];
        }
        
        // 3. Add the original word to its matching anagram sublist
        groups[sortedKey].push(str);
    }

    // 4. Object.values() extracts all the sublists from our map and returns them as an array
    return Object.values(groups);
    }
}
