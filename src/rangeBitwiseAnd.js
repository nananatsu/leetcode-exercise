var rangeBitwiseAnd = function (m, n) {
    let i = 0;
    while (m !== n) {
            m = m >> 1;
            n = n >> 1;
            i++;
    }
    return n << i;
};

console.time('数字范围按位与');
console.log(rangeBitwiseAnd(5,7));
console.timeEnd('数字范围按位与');