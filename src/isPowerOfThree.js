/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if(n === 1) return true;
    return /^10+$/.test(n.toString(3));
};

console.time('3的幂');
console.log(isPowerOfThree(81));
console.timeEnd('3的幂');