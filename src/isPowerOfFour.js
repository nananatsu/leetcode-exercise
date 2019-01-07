/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {

    return num > 0 && ((num & (num - 1)) === 0) && ((num & 0x55555555) !== 0);

};

console.time('342. 4的幂');
console.log(isPowerOfFour(16));
console.timeEnd('342. 4的幂');

