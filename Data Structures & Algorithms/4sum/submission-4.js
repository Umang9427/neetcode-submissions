class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort(((a, b) => a - b))
        var numslength = nums.length

        var output = []
        if(numslength < 4) return output

        for(var i=0; i<numslength-3; i++)
        {
            if(i>0 && nums[i-1] === nums[i]) continue
            for(var j=i+1; j<numslength-2;j++){
                if(j>i+1 && nums[j-1] === nums[j]) continue

                var left = j+1
                var right= numslength-1

                while (left<right){
                    var sum = nums[i]+nums[j]+nums[left]+nums[right]
                    if(sum === target){
                        output.push([nums[i], nums[j], nums[left], nums[right]])

                        while(left<right && nums[left] === nums[left+1]) left++
                        while(left<right && nums[right] === nums[right-1]) right--
                        left++
                        right--
                    }
                    else if(sum< target){
                        left++
                    }
                    else{
                        right--
                    }
                }
            }
            }
            return output
    }
}
