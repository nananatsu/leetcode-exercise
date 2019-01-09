/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let arr = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1);
        arr[i] = row;
        if (i === 0) { row[0] = 1; }
        else {
            row[0] = 1;
            row[i] = 1;
            for (let j = 1; j < i; j++) {
                row[j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }
    return arr;
};

console.time('帕斯卡三角形');
console.log(generate(5));
console.timeEnd('帕斯卡三角形');