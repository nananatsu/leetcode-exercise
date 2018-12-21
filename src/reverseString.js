var reverseString = function (s) {
    let str = '';
    for (let i = s.length - 1; i >= 0; i--){
        str += s.charAt(i);
    }
    return str;
};

var reverseString2 = function (s) {
    let arr = s.split('');
    arr = arr.reverse();
    return arr.join('');
};

console.time('反转字符串');
console.log(reverseString('amanaP :lanac a ,nalp a ,nam A'));
console.timeEnd('反转字符串');
// console.time('反转字符串2');
// console.log(reverseString2('amanaP :lanac a ,nalp a ,nam A'));
// console.timeEnd('反转字符串2');
