// 数组中的K-diff数对
var findPairs = function (nums, k) {
    let arr = nums.sort((a, b) => a - b);
    let len = arr.length;
    let map = new Map();
    if (k > (arr[len] - arr[0])) {
        return 0;
    } else {
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                const a = arr[j] - arr[i];
                if (a > k) {
                    break;
                } else if (a === k) {
                    map.set(arr[i], arr[j]);
                }
            }
        }
    }
    return map.size;
};

console.time('測試');
console.log(findPairs([3, 1, 4, 1, 5], 2));
console.timeEnd('測試');