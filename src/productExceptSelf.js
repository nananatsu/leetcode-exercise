var productExceptSelf = function (nums) {

    let len = nums.length - 1;
    let i = 0;
    let j = len;
    let left = [], right = [];
    left[len] = 1;
    right[0] = 1;
    while (i < len) {
        if (i === 0) {
            left[i] = nums[i];
            right[j] = nums[j];
        } else {
            left[i] = nums[i] * left[i - 1];
            right[j] = nums[j] * right[j + 1];
        }
        i++;
        j--;
    }
    let out = [];
    out[0] = right[1];
    out[len] = left[len - 1];
    for (let n = 1; n < len; n++) {
        out[n] = left[n - 1] * right[n + 1];
    }
    return out;

};

console.time('除自身以外数组的乘积');
console.log(productExceptSelf([1, 2, 3, 4]));
console.timeEnd('除自身以外数组的乘积');

