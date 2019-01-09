/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {

    if(a === 0) return b;
    if(b === 0) return a;
    let res = a^b;
    let carry = (a&b) << 1;
    return getSum(res,carry);


};

console.time('两整数之和');
console.log(getSum(-2,3));
console.timeEnd('两整数之和');