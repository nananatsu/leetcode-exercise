var maximumSwap = function (num) {
    let arr = (num + '').split('');
    return parseInt(swap(arr, 0, arr.length).join(''));
};

function swap(arr, left, right) {
    let start = arr[left];
    let max = 0;
    let index = 0;
    for (let i = left + 1; i < right; i++) {
        let n = arr[i];
        if (n >= max) {
            max = n;
            index = i;
        }
    }
    if (max > start) {
        [arr[left], arr[index]] = [arr[index], arr[left]];
    } else {
        if (right - left > 2) {
            swap(arr, left + 1, right);
        }
    }
    return arr;
}

console.time('最大交换');
console.log(maximumSwap(2736));
console.timeEnd('最大交换');