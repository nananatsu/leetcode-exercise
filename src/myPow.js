// leetcode 50.Pow(x, n)
// 利用相乘後數據，減少運算次數
var myPow = function (x, n) {

    let result = x;
    if (n === 0) {
        return result = 1;
    } else {
        result = cal(x, Math.abs(n));
        if (n < 0) {
            result = 1 / result;
        }
    }
    return result;
};

function cal(x, n) {
    console.log(n);
    let i = 1;
    let result = x;
    if (n === 1) {
        return x;
    }
    while (n > 1 & i <= (n / 2)) {
        result = result * result;
        i = i * 2;
    }
    let result2 = (n - i) > 0 ? cal(x, n - i) : 1
    return result * result2;
}

console.time('指數');
console.log(myPow(2.00000, 10))
console.timeEnd('指數');