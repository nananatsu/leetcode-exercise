var threeSumClosest = function (nums, target) {

    nums.sort((a, b) => a - b);
    let tmp = new Set();
    let closest;
    let minus;
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        let left = i + 1, right = nums.length - 1;
        let result;
        let m;
        while (left < right) {
            let lr = nums[left] + nums[right];
            if (lr < n) left++;
            else if (lr > n) right--;
            else if (lr === n) return target;
            let t = Math.abs(n - lr);
            if (m === undefined || t < m) {
                m = t;
                result = lr;
            }
        }
        let val = result + nums[i];
        let minust = Math.abs(target - val);
        if (minus === undefined || minust < minus) {
            closest = val;
            minus = minust;
        }
    }

    return closest;
};
console.time('最接近的三数之和');
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.timeEnd('最接近的三数之和');