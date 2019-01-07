/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let s = n.toString(2);
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '1') ans++;
    }
    return ans;
};

console.time('位1的个数');
console.log(hammingWeight(81));
console.timeEnd('位1的个数');