/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) obj[s[i]] = 1;
        else obj[s[i]]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]] === undefined) return false;
        else obj[t[i]]--;
    }
    let ans = true;
    Object.keys(obj).some(v => {
        if (obj[v]) {
            ans = false;
            return true;
        }
    });
    return ans;
};

console.time('有效的字母异位词');
console.log(isAnagram("ab","a"));
console.timeEnd('有效的字母异位词');