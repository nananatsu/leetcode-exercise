var thirdMax = function (nums) {
    let m1, m2, m3;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!m1 || num >= m1) {
            if (m1 !== num) {
                [m1, m2, m3] = [num, m1, m2];
            }
        } else if (!m2 || num >= m2) {
            if (num !== m2) {
                [m2, m3] = [num, m2];
            }
        } else if (!m3 || num >= m3) {
            if (num !== m3) {
                m3 = num;
            }
        }
    }
    console.log(m1, m2, m3);
    return m3 !== undefined ? m3 : m1;
};

console.time('第三大的数');
console.log(thirdMax([3,3,4,3,4,3,0,3,3]));
console.timeEnd('第三大的数');
