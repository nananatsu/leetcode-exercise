/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums[0] === undefined) return 0;
    
    let dp = new Array(nums.length);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(dp[i - 1],dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];

};

console.time('打家劫舍');
console.log(rob([0,3,2,0]));
console.timeEnd('打家劫舍');