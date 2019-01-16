/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) obj[s[i]] = i;
        else obj[s[i]] = Number.MAX_SAFE_INTEGER;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    Object.keys(obj).some(v => {
        if (obj[v] < ans) {
            ans = obj[v];
            return true;
        }
    });
    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

console.time('字符串中的第一个唯一字符');
console.log(firstUniqChar("leetcode"));
console.timeEnd('字符串中的第一个唯一字符');