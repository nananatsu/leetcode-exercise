var isIsomorphic = function (s, t) {
    if (cheackStr(s) === cheackStr(t)) {
        return true;
    } else {
        return false;
    }

};

function cheackStr(s) {
    let tmp = [];
    let str = ''
    for (let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        let index = tmp.indexOf(a);
        if (index > -1) {
            str += index;
        } else {
            tmp.push(a);
            str += (tmp.length - 1);
        }
    }
    return str;
}

console.time('同构字符串');
console.log(isIsomorphic('foo', 'bar'));
console.timeEnd('同构字符串');