// P(r,c,step) = [P(r+2,c+1,step-1) + P(r+2,c-1,step-1)+ P(r-2,c-1,step-1)+ P(r-2,c+1,step-1)
// +P(r+1,c+2,step-1) + P(r-2,c+2,step-1)+ P(r-1,c-2,step-1)+ P(r+1,c-2,step-1)]/8
var knightProbability = function (N, K, r, c) {

    if (K === 0) return 1;
    let dp = [];
    let dr = [2, 2, 1, 1, -1, -1, -2, -2];
    let dc = [1, -1, 2, -2, 2, -2, 1, -1];

    dp[0] = [];
    for (let i = 0; i < N; i++) {
        dp[0][i] = [];
        for (let j = 0; j < N; j++) {
            dp[0][i][j] = 0;
        }
    }
    dp[0][r][c] = 1;
    let res = 0;
    for (let i = 1; i <= K; i++) {
        dp[i] = [];
        for (let n = 0; n < N; n++) {
            dp[i][n] = [];
            for (let m = 0; m < N; m++) {
                let tmp = 0;
                for (let j = 0; j < 8; j++) {
                    let x = n + dr[j];
                    let y = m + dc[j];
                    if (0 <= x && x < N && 0 <= y && y < N) {
                        tmp += dp[i - 1][x][y] / 8;
                    }
                }
                dp[i][n][m] = tmp;
                if(i === K){
                    res += tmp;
                }
            }
        }
    }
    return res;
};

console.time('“马”在棋盘上的概率');
console.log(knightProbability(3, 2, 0, 0));
console.timeEnd('“马”在棋盘上的概率');