//G(n) = B(n+1) XOR B(n)
var grayCode = function (n) {

    let res = [];
    let size = 1 << n;
    for (let i = 0; i < size; i++) {
        res.push((i >> 1) ^ i);
    }
    return res;
};

console.time('格雷编码');
console.log(grayCode(2));
console.timeEnd('格雷编码');