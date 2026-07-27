class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let n1 = s1.length
        let n2 = s2.length

        if(n1>n2){
            return false
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }
        const matches = (a, b) => {
            for (let i = 0; i < 26; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        };

        if (matches(s1Count, s2Count)) return true;

        
        for (let i = s1.length; i < s2.length; i++) {
            s2Count[s2.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i - s1.length) - 97]--;

        // Check match
        if (matches(s1Count, s2Count)) return true;
    }

    return false;
    }
}
