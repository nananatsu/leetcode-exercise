var spiralOrder = function (matrix) {

    let m = matrix.length;
    if (m === 0) return [];
    let n = matrix[0].length;
    let tmp = [];

    let top = 0, bottom = m - 1; left = 0; right = n - 1;
    while (top <= bottom && left <= right) {
        if (left === right) {
            for (let i = top; i <= bottom; i++) {
                tmp.push(matrix[i][left]);
            }
            break;
        } else if (top === bottom) {
            for (let i = left; i <= right; i++) {
                tmp.push(matrix[top][i]);
            }
            break;
        }
        for (let i = left; i < right; i++) {
            tmp.push(matrix[top][i]);
        }
        for (let i = top; i < bottom; i++) {
            tmp.push(matrix[i][right]);
        }
        for (let i = right; i > left; i--) {
            tmp.push(matrix[bottom][i]);
        }
        for (let i = bottom; i > top; i--) {
            tmp.push(matrix[i][left]);
        }
        top++;
        left++;
        right--;
        bottom--;
    }
    return tmp;
};

console.time('螺旋矩阵');
console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]));
console.timeEnd('螺旋矩阵');
