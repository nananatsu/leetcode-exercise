var isPalindrome = function (x) {
    if (x < 0) return false;

    let l = 1, r = 10;

    while (x / l >= 10) {
        l = l * 10;
    }

    while (x !== 0) {
        if (Math.floor(x / l) !== x % r) return false;
        x = Math.floor((x % l) / r);
        l = l / 100;
    }
    return true;

};

console.time('回文数');
console.log(isPalindrome(121));
console.timeEnd('回文数');
