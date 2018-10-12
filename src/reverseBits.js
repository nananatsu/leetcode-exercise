var reverseBits = function (n) {
    let b = parseInt(n).toString(2);
    let str = '';
    for (let i = b.length - 1; i >= 0; i--) {
        str += b.charAt(i);
    }
    while (str.length < 32) {
        str += 0;
    }
    return parseInt(str, 2)
};

console.time('颠倒二进制位');
console.log(reverseBits(43261596));
console.timeEnd('颠倒二进制位');