class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        var nums = []
        for (var i = 0; i< operations.length; i++){
            if(operations[i] === "D"){
                var temp = nums[nums.length-1] * 2
                nums.push(temp)
            }
            else if (operations[i] === "C"){
                nums.pop()
            }
            else if (operations [i] === "+" ){
                var temp = nums[nums.length-1] + nums [nums.length-2]
                nums.push (temp)
            }
            else{ 
                nums.push(Number(operations[i])) 
            }
        }
        let sum = 0
        for (var i = 0 ; i< nums.length ; i++){
            sum += nums[i]
        } 
        return sum
    }
}
