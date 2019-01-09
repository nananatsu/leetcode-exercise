/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {

    if(numerator === 0) return '0';
    let isNegative = (numerator < 0) ^ (denominator < 0);
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    let mod = numerator % denominator;
    let d = Math.floor(numerator / denominator);
    let ans = '';
    let mod_list = [mod];
    while (mod !== 0) {
        ans += Math.floor(mod * 10 / denominator);
        mod = mod * 10 % denominator;
        let index = mod_list.indexOf(mod);
        if (index > -1) {
            ans = ans.slice(0, index) + '(' + ans.slice(index) + ')';
            break;
        } else {
            mod_list.push(mod);
        }
    }
    ans = ans.length > 0 ? d + '.' + ans : d + '';
    return isNegative ? '-' + ans : ans;
};

console.time('分数到小数');
console.log(fractionToDecimal(-50, 8));
console.timeEnd('分数到小数');