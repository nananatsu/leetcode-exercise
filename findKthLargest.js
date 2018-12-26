var findKthLargest = function(nums, k) {
    nums.sort((a,b) => a - b);
    return nums[nums.length - k];
};

console.time('数组中的第K个最大元素');
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));
console.timeEnd('数组中的第K个最大元素');
