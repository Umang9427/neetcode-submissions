class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let strings = path.split("/")

        let output = []
        for(let word of strings){
            
            if(word === "" || word === "."){
                continue
            }
            else if(word === ".."){
                if(output.length != 0) output.pop()
                continue
            }
            else{
                output.push(word)
            }
            
        }
        return "/" + output.join("/")
    }
}
