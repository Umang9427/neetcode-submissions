class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var n = height.length
        var left = 0
        var right = n -1
        var leftMax = 0, rightMax = 0
        var water = 0

        while (left < right){
            if(height[left] < height[right]){
                if(leftMax < height[left]){
                    leftMax = height[left]
                }
                else{
                    water += leftMax - height[left]
                }
                left++
            }
            else{
                if(rightMax < height[right]){
                    rightMax = height[right]
                }
                else{
                    water += rightMax - height[right]
                }
                right--
            }
        }
        return water
    }
}
