class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var left = 0, right = heights.length-1
        var area = 0

        if(!heights || heights.length<2) return 0
        while (left < right){
            var temp
            if(heights[left]< heights[right]){
                temp = heights[left] * (right - left)
                left++
            }
            else if (heights[left] > heights[right]){
                temp = heights[right] * (right - left)
                right--
            }
            else{
                temp = heights[left] * (right - left)
                left++
                right --
            }
            if(temp> area) area= temp
        }
    return area
    }
}
