class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var min = 101
        var minindex = 0
        var profit = 0
        for(var i=0; i< prices.length; i++){
            if(prices[i] < min){
                min = prices[i]
                minindex = i
            }
            else{
                var temp = prices[i] - min
                if(temp> profit) profit = temp
            }   
            
        }
        return profit
    }
}
