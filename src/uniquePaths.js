var uniquePaths = function (m, n) {

    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(new Array(m).fill(1));
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    return arr[n-1][m-1];
};

console.time('不同路径');
console.log(uniquePaths(51, 9));
console.timeEnd('不同路径');
// var uniquePaths = function (m, n) {
    //     let res = 0;
    //     let fun = (i, j) => {
    //         if(i === m && j === n) return res++;
    //         if (i < m) fun(i + 1, j);
    //         if (j < n) fun(i, j + 1);
    //     }
    //     fun(1,1);
    //     return res;
//     let fun = (i, j) => {
//         if (i === 1 || j === 1) return 1;
//         return fun(i - 1, j) + fun(i, j - 1);
//     }
//     return fun(m, n);
// };
