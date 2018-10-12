//两句话中的不常见单词
var uncommonFromSentences = function (A, B) {
    let tmp = [...A.split(' '), ...B.split(' ')];
    tmp = tmp.sort();
    let result = [];
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] !== tmp[i + 1]) {
            if(tmp[i] !== tmp[i - 1]) result.push(tmp[i]);
        } else {
            i++;
        }
    }
    return result;
};

console.time('不常见单词');
console.log(uncommonFromSentences("op vu kux dn jsenj hbdez hbdez nbenh z op dxmqd op", "kux wnx wnx wbi jsenj nlgfn vu f vu fvxas dn op tb"));
console.timeEnd('不常见单词');

