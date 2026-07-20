class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    
    sortArray(nums) {
        quicksort(nums, 0, nums.length-1);

        return nums
    }
}

function partition (nums, low, high){
        var pi = nums[high]

        var i = low - 1

        for(var j=low; j<high; j++){
            if(nums[j]<pi){
                i++
                swap (nums, i, j)
            }
        }
        swap(nums, i+1, high)
        return i+1
    }

    function swap (nums, i , j){
        var temp = nums [i]
        nums[i] = nums [j]
        nums[j] = temp

    }
    function quicksort (nums, low, high){
        if(low<high){
            let pi = partition (nums, low, high)

            quicksort(nums, low, pi-1)
            quicksort(nums, pi+1, high)
        }
    }

