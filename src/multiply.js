var multiply = function (num1, num2) {

    if (num1 === '0' || num2 === '0') return '0';
    let muti = [];
    let result = [];

    for (let i = num1.length - 1; i >= 0; i--) {
        let num = ~~num1[i];
        if (muti[num] === undefined) {
            let carry = 0;
            let arr = [];
            for (let j = num2.length - 1; j >= 0; j--) {
                let n = ~~num2[j];
                let val = num * n + carry;
                arr.push(val % 10);
                carry = ~~(val / 10);
            }
            if (carry !== 0) arr.push(carry);
            muti[num] = arr.reverse();
        }
        let tmp = muti[num].concat(new Array(num1.length - 1 - i).fill(0));

        let len = result.length - 1;
        let res = []
        let carry = 0;
        for (let n = tmp.length - 1; n >= 0; n--) {
            let x = ~~tmp[n];
            let y;
            len >= 0 ? y = ~~result[len] : y = 0;
            len--;
            let sum = x + y + carry;
            res.push(sum % 10);
            carry = ~~(sum / 10);
        }
        if (carry !== 0) res.push(carry);
        result = res.reverse();
    }
    return result.join('');
};

console.time('字符串相乘');
console.log(multiply('999', '999'));
console.timeEnd('字符串相乘');

