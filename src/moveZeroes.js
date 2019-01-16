/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let index;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (index !== undefined) {
                nums[index] = nums[i];
                index++;
            }
        } else {
            if (index === undefined) index = i;
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;

};

console.time('移动零');
console.log(moveZeroes([1, 0, 1]));
console.timeEnd('移动零');