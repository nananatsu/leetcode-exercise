var maxSubArray = function(nums) {
    
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(sum < 0) sum = 0;
        sum += nums[i];
        max = Math.max(max, sum);
    }
    return max;
};

console.time('最大子序和');
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.timeEnd('最大子序和');