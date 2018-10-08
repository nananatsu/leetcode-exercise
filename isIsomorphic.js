var isIsomorphic = function (s, t) {
    let tmp = [];
    let tmp2 = [];
    for (let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        let b = t.charAt(i);
        let index = tmp.indexOf(a);
        let index2 = tmp2.indexOf(b);
        if(index !== index2){
            return false;
        }
        if (index === -1) {
            tmp.push(a);
        } 
        if (index2 === -1) {
            tmp2.push(b);
        }
    }
    return true;
};


console.time('同构字符串');
console.log(isIsomorphic('foo', 'bar'));
console.timeEnd('同构字符串');