/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {

    let n = ring.length, m = key.length;
    let dp = new Array();
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n).fill(0));
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = Number.MAX_SAFE_INTEGER;
            for(let k = 0; k < n; k++){
                if(ring[k] === key[i]){
                    let diff = Math.abs(j - k);
                    let step = Math.min(diff,n - diff);
                    dp[i][j] = Math.min(dp[i][j], step + dp[i + 1][k]);
                }
            }
        }
    }
    return dp[0][0] + m;

};

let ring = "caotmcaataijjxi";
let key = "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx";

console.time('514. 自由之路');
console.log(findRotateSteps(ring, key));
console.timeEnd('514. 自由之路');

