// 尋找數組中的山脈
// 查詢元素i，左右兩側的最長遞減序列
var longestMountain = function (A) {
    let max = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > A[i + 1]) {
            left = 0;
            right = 0;
            for (let n = i - 1; n >= 0; n--) {
                if (A[n] < A[n + 1]) {
                    left++;
                } else {
                    break;
                }
            }
            for (let m = i + 1; m < A.length; m++) {
                if (A[m] < A[m - 1]) {
                    right++;
                } else {
                    break;
                }
            }
            if (left > 0 && right > 0) {
                max = Math.max(max, left + right + 1);
            }
        }
    }
    return max;
};

console.time('最長山脈');
console.log(longestMountain([0, 1, 0]));
console.timeEnd('最長山脈');