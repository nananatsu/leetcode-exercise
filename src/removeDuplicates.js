var removeDuplicates = function (nums) {

    let len = nums.length - 1;
    let i = 1;
    let offset = 1;
    while (i <= len) {
        if (nums[i] <= nums[i - 1]) {
            if (i + offset > len) break;
            if (nums[i + offset] > nums[i]) {
                nums[i] = nums[i + offset];
            }else{
                offset++;
            }
        } else {
            i++;
        }
    }
    return i;
};

console.time('删除排序数组中的重复项');
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates( [0,0,1,1,1,2,2,3,3,4]));
console.timeEnd('删除排序数组中的重复项');

