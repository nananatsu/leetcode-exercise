/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function (num) {

    let s = num.toString(2);
    let arr = new Array(s.length);
    arr[0] = 1;
    arr[1] = 2;
    for (let i = 2; i < s.length; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    let ans = 0;
    for(let i = 0;i < s.length;i++){
        if(s[i] === '1'){
            ans += arr[s.length - i - 1];
            if(i > 0 && s[i - 1] === '1'){
                return ans;
            }
        }
    }
    ans++;
    return ans;

};


console.time('600. 不含连续1的非负整数');
console.log(findIntegers(0));
console.timeEnd('600. 不含连续1的非负整数');