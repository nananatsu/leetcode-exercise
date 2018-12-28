// leetcode 122
var maxProfit = function (prices) {
    let sum = 0;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        console.log(min,max,prices[i]);
        if (prices[i] < min && prices[i] >= max) {
            console.log("@@@@@")
            min = prices[i];
            continue;
        }
        else if (prices[i] > min && prices[i] > max) {
            console.log("$$$$$")
            max = prices[i];
        }
        else if(prices[i] <= max){
            console.log("#####");
            sum += max - min;
            max = 0;
            min = prices[i];
        }
    }
   if(max - min > 0)  sum += max - min;
    return sum;

};

console.time('买卖股票的最佳时机 II');
console.log(maxProfit([3,2,6,5,0,3]));
console.timeEnd('买卖股票的最佳时机 II');