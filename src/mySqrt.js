/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    if(x === 1) return 1;
    let ans = x / 2;
    while (ans * ans > x) {
        ans = ans / 2
    }
    for (let i = Math.floor(ans); i <= 2 * ans; i++) {
        if(i * i > x) break;
        ans = i;
    }
    return ans;

};

console.time('x 的平方根');
console.log(mySqrt(5));
console.timeEnd('x 的平方根');