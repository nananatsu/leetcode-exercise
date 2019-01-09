/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    let dp = [];
    for (let i = 0; i < nums.length; i++) {
        let left = 0, right = dp.length - 1;
        if (dp.length === 0 || nums[i] > dp[right]) dp.push(nums[i]);
        else {
            if(right === 0) dp[0] = nums[i];
            let mid = 0;
            while (left < right) {
                mid = Math.floor((left + right) / 2);
                if (dp[mid] > nums[i]) {
                    right = mid;
                }
                else {
                    if(dp[mid] === nums[i]) break;
                    if (dp[mid + 1] > nums[i]) { dp[mid + 1] = nums[i]; break; }
                    left = mid;
                }
            }
        }
    }
    return dp.length;
};

console.time('Longest Increasing Subsequence');
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.timeEnd('Longest Increasing Subsequence');
