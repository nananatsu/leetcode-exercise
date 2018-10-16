var threeSum = function (nums) {

    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] === 0) {
            let count = 1;
            for (let n = i + 1; n < nums.length; n++) {
                if (nums[n] === 0) count++;
                else break;
            }
            if (count >= 3) result.push([0, 0, 0]);
            break;
        }
        let t = nums[i] === 0 ? 0 : -nums[i];
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let n = nums[left] + nums[right];
            if (n > t) right--;
            else if (n < t) left++;
            else if (n === t) {
                let arr = [nums[i], nums[left], nums[right]];
                let len = result.length;
                if (len > 0) {
                    if (result[len - 1].toString() !== arr.toString()) result.push(arr);
                }
                else
                    result.push(arr);
                right--;
                left++;
            };

        }
    }
    return result;
};

console.time('三数之和');
console.log(threeSum([-2,0,0,2,2]));
console.timeEnd('三数之和');