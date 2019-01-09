/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    let INI_MAX = 2147483647;
    let INT_MIN = -2147483648;
    if(dividend === INT_MIN && divisor === -1) return INI_MAX;

    let ans = 0;
    let isNegative = (dividend < 0) ^ (divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let minus,count;
    while (dividend >= divisor) {
        minus = divisor;
        count = 1;
        while((dividend >> 1) >= minus){
            minus <<= 1;
            count <<= 1;
        }
        dividend -= minus;
        ans += count;
    }
    return isNegative?-ans:ans;
};

console.time('两数相除');
console.log(divide(2147483647,2));
console.timeEnd('两数相除');