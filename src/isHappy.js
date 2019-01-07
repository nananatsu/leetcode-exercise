/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let flag = 4;
    let func = (num) => {
        let s = num + '';
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            let number = parseInt(s[i]);
            sum += number * number;
        }
        if (sum === 1) return true;
        if (sum === flag) return false;
        return func(sum);
    }
    return func(n);
};

console.time('202. 快乐数');
console.log(isHappy(19));
console.timeEnd('202. 快乐数');

