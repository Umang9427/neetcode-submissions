class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if( t === "") return ""
        let n1 = s.length, n2 = t.length

        if(n2> n1) return ""

        let window = {}
        let tcount = {}

        for (let char of t){
            tcount[char] = (tcount[char] || 0) + 1
        }

        let have = 0
        let need = Object.keys(tcount).length;     

        let res= [-1, -1]
        let reslen = Infinity
        let l=0
        for (let r = 0; r<n1; r++){
            window[s[r]] = (window[s[r]] || 0 ) + 1

            if(window[s[r]] === tcount[s[r]] && s[r] in tcount){
                have ++
            }

            while(have === need){
                if (r-l+1 < reslen){
                    res = [l , r]
                    reslen = r-l+1
                } 
                window[s[l]]--
                if(s[l] in tcount && window[s[l]] < tcount[s[l]]){
                    have--
                }
                l++
            }
        }

        if(reslen === Infinity){
            return ""
        } else{
            return s.substring(res[0], res[1]+1)
        }


    }
}
