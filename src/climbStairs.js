var climbStairs = function (n) {

    if (n === 1) return 1;
    if (n === 2) return 2;

    let result = new Array(n);
    result[0] = 1;
    result[1] = 2;
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result[n - 1];
};

console.time('爬楼梯');
console.log(climbStairs(44));
console.timeEnd('爬楼梯');