var containsDuplicate = function (nums) {

    let tmp = [];
    for (let i = 0; i < nums.length; i++) {
        if (tmp[nums[i]] === undefined) tmp[nums[i]] = 1;
        else if (tmp[nums[i]] >= 1) return true;
    }
    return false;
};

console.time('存在重复元素');
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.timeEnd('存在重复元素');

