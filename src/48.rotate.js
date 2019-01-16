/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    for (let i = 0; i < matrix.length - 1; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length - i; j++) {
            [matrix[i][j], matrix[matrix.length - 1 - j][row.length - 1 - i]] = [matrix[matrix.length - 1 - j][row.length - 1 - i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length - 1 - i; i++) {
        [matrix[i], matrix[matrix.length - 1 - i]] = [matrix[matrix.length - 1 - i], matrix[i]];
    }
    return matrix;
};

console.time('旋转图像');
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
console.timeEnd('旋转图像');