var majorityElement = function (nums) {

    let tmp = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = tmp.get(nums[i]);
        val ? tmp.set(nums[i], val + 1) : tmp.set(nums[i], 1);
    }
    let n = nums.length / 2;
    let res;
    tmp.forEach((v,k) => {
        if(v > n){
            res = k;
            return;
        }
    })
    return res;
};

console.time('求众数');
console.log(majorityElement([2,2,1,1,1,2,2]));
console.timeEnd('求众数');
