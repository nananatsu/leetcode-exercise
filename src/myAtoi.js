var myAtoi = function (str) {
    let INT32 = Math.pow(2, 31);
    let MAX_INT32 = INT32 - 1;
    let MIN_INT32 = -INT32;

    let regx = '^[0-9]*$'
    let isNegative;
    let start, end;
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        let isNumber = c.match(regx);
        if (start === undefined) {
            if (isNumber) {
                start = i;
            } else if (c === '-' && isNegative === undefined) {
                isNegative = true;
            } else if (c === '+' && isNegative === undefined) {
                isNegative = false;
            } else if (c !== ' ' || (c === ' ' && isNegative !== undefined)) {
                break;
            }
        } else {
            if (!isNumber) {
                end = i;
                break;
            }
        }
    }

    let num = 0;
    if (start !== undefined) {
        num = Number(str.substring(start, end));
        if (isNegative) {
            num = -num;
            if (num < MIN_INT32) num = MIN_INT32;
        } else {
            if (num > MAX_INT32) num = MAX_INT32;
        }
    }
    return num;
};

console.time('字符串转整数 (atoi)');
console.log(myAtoi("+   2"));
console.timeEnd('字符串转整数 (atoi)');