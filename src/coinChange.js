/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    let dp = new Array(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        let min;
        for (let j = 0; j < coins.length; j++) {
            let m = dp[i - coins[j]];
            if (m !== undefined) {
                min = min !== undefined ? min > m ? m : min : m;
            }
        }
        if (min !== undefined) dp[i] = min + 1;
    }
    return dp[amount] !== undefined ? dp[amount] : -1;

};

console.time('零钱兑换');
console.log(coinChange([186, 419, 83, 408], 6249));
console.timeEnd('零钱兑换');
