var permute = function (nums) {

    let result = [];
    let dfs = (index) => {
        if (index === nums.length) {
            result.push([...nums]);
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            dfs(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]]
        }
    }
    dfs(0);
    return result;
};

console.time('全排列');
console.log(permute([1, 2, 3]));
console.timeEnd('全排列');
