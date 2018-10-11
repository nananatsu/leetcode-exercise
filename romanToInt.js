var romanToInt = function (s) {

    let roman = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let high = roman[s.charAt(i)];
        let low = roman[s.charAt(i + 1)];
        if (high < low) {
            total += roman[s.substring(i, i + 2)];
            i++;
        } else {
            total += high;
        }
    }
    return total;

};

console.time('罗马数字转整数');
console.log(romanToInt('MCMXCIV'));
console.timeEnd('罗马数字转整数');