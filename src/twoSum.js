var twoSum = function (nums, target) {

    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        if (arr[n] !== undefined) {
            return [arr[n], i];
        }
        arr[nums[i]] = i;
    }
};

console.time('两数之和');
console.log(twoSum([3, 2, 4], 6));
console.timeEnd('两数之和');