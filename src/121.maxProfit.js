var maxProfit = function(prices) {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min) min = prices[i];
        else if(prices[i] - min > max) max = prices[i] - min;
    }
    return max;
    
};

console.time('买卖股票的最佳时机');
console.log(maxProfit([7,1,5,3,6,4]));
console.timeEnd('买卖股票的最佳时机');