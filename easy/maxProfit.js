/***
 *  1. Problem
 *  So method is given array of integers in which you have to simulate buying and selling product. and the task it to return maxprofit
 *  NOTE: you have to well buy before selling product
 * 
 *  2. Examples
 *  maxProfit([5,6,1,9,10]) 9
 *  
 * 
 */

const maxProfit = (prices) =>{
 let maxProfit = 0;
 for(let buy = 0; buy < prices.length; buy++){
     for(let sell = buy + 1; sell < prices.length; sell++){
         if(prices[sell] - prices[buy] > maxProfit){
             maxProfit = prices[sell] - prices[buy];
         }
    }
 }
 return maxProfit;
}

const maxProfit2 = (prices) =>{
    let minProfit = Infinity;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minProfit){
            minProfit = prices[i]
        } else if(prices[i] - minProfit > maxProfit){
            maxProfit = prices[i] - minProfit;
        }

    }
    return maxProfit;
}

console.log(maxProfit2([5,6,1,9,10]));