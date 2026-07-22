class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        var coml = word1.length + word2.length

        var itr1= word1.length, itr2 = word2.length
        var output = ""
        while (itr1>0 || itr2>0){
            if(itr1!=0 && itr2!=0){
                output +=(word1[word1.length - itr1])
                output +=(word2[word2.length - itr2])

                itr1--
                itr2--
            }
            else if(itr1===0 && itr2!=0){
                output += (word2[word2.length - itr2])
                itr2--
            }
            else if(itr1!=0 && itr2===0){
                output += (word1[word1.length - itr1])
                itr1--
            }
        }
        return output
    }
}
