var isValid = function (s) {

    let tmp = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === '(') {
            tmp.push(')');
        } else if (c === '[') {
            tmp.push(']');
        } else if (c === '{') {
            tmp.push('}');
        } else if (c !== tmp.pop()) {
            return false;
        }
    }
    if (tmp.length > 0) return false;
    return true;
};

console.time('有效的括号');
console.log(isValid('()[]{}'));
console.timeEnd('有效的括号');
