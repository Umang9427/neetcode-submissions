class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        var stack = []

        let maxarea = 0
        let apheights= [...heights, 0]

        for (var i = 0; i< apheights.length; i++){
            while (stack.length > 0 && apheights[i]< apheights[stack[stack.length - 1]]){
                const h = apheights[stack.pop()]
                const w = stack.length === 0 ? i : i - stack[stack.length -1]-1

                maxarea = Math.max (maxarea, h*w)
            }


            stack.push(i)     
        }
        return maxarea
    }
}
