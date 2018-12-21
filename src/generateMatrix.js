var generateMatrix = function (n) {

    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }

    let num = 1;
    let top = 0, bottom = n - 1; left = 0; right = n - 1;
    while (top <= bottom && left <= right) {
        if (left === right) {
            for (let i = top; i <= bottom; i++) {
                matrix[i][left] = num++;
            }
            break;
        } else if (top === bottom) {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            break;
        }
        for (let i = left; i < right; i++) {
            matrix[top][i] = num++;
        }
        for (let i = top; i < bottom; i++) {
            matrix[i][right] = num++;
        }
        for (let i = right; i > left; i--) {
            matrix[bottom][i] = num++;
        }
        for (let i = bottom; i > top; i--) {
            matrix[i][left] = num++;
        }
        top++;
        left++;
        right--;
        bottom--;
    }
    return matrix;
};

console.time('螺旋矩阵');
console.log(generateMatrix(3));
console.timeEnd('螺旋矩阵');
