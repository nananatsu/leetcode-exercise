/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        if ((ascii >= 48 && ascii <= 57) || (ascii >= 97 && ascii <= 122)) {
            arr.push(s[i])
        } else if ((ascii >= 65 && ascii <= 90)) {
            arr.push(s[i].toLocaleLowerCase());
        }
    }
    return arr.join('') === arr.reverse().join('');
};

console.time('验证回文字符串');
console.log(isPalindrome("race a car"));
console.timeEnd('验证回文字符串');