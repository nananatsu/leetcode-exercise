/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    let last, len = nums.length;

    k = k % len;
    for (let i = 0; i < k; i++) {
        last = nums[len - 1]
        for (let j = len - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last;
    }
    return nums;
};

console.time('旋转数组');
console.log(rotate([1, 2, 3, 4, 5, 6], 2));
console.timeEnd('旋转数组');