// Nim游戲
var canWinNim = function (n) {
    if ((n % 4) === 0) {
        return false;
    } else {
        return true;
    }
};

console.time('NIM');
console.log(canWinNim());
console.timeEnd('NIM');