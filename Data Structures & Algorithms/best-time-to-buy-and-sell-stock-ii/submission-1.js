class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var profit = 0
        if (!prices){ return 0}

        for (var i=0; i<prices.length-1; i++){
            if(prices[i+1]> prices[i]){
                profit = profit + prices[i+1] - prices[i]

            }
            else{ 
                continue
            }
        }   
        return profit 
    }
}
