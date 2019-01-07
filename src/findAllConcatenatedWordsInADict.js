/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    let set = new Set(words);

    return words.filter((v) => {
        let n = v.length;
        let dp = new Array(n);
        dp[0] = true;
        for (let i = 0; i < n; i++) {
            if (!dp[i]) continue;
            for (let j = i + 1; j <= n; j++) {
                if (j - i < n && set.has(v.slice(i, j))) {
                    dp[j] = true;
                }
            }
            if (dp[n]) return true;
        }
    });

};
let strs = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"];
console.time('472. 连接词');
console.log(findAllConcatenatedWordsInADict(strs));
console.timeEnd('472. 连接词');

