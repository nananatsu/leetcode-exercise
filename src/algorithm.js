// 冒泡排序
// 兩兩比較找出最大（小）值再進行下一次遍歷
function bubbleSort(arr) {
    console.time('冒泡排序');
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.timeEnd('冒泡排序');
    //console.log(arr);
}

// 冒泡改進，記錄未交換位置數據索引，即已排序部分不再遍歷
function bubbleSort2(arr) {
    console.time('冒泡排序2');
    let len = arr.length - 1;
    while (len > 0) {
        let pos = 0;
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        len = pos;
    }
    console.timeEnd('冒泡排序2');
}

// 冒泡改進，同時找最大值、最小值
function bubbleSort3(arr) {
    console.time('冒泡排序3');
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        for (j = low; j < high; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        high--;
        for (i = high; i > low; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            }
        }
        low++;
    }
    console.timeEnd('冒泡排序3');
}

// 選擇排序
// 找到最大（小）元素，放到起始
function selectionSort(arr) {
    console.time('選擇排序');
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    console.timeEnd('選擇排序');
    //console.log(arr);
}

// 插入排序
// 將數據插入到已排序部分
function insertionSort(arr) {
    console.time('插入排序');
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; arr[j] < arr[j - 1]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    console.timeEnd('插入排序');
    // console.log(arr);
}

//插入排序，使用二分查找插入值
function insertionSort2(arr) {
    console.time('插入排序2');
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let left = 0, right = i - 1;
        const tmp = arr[i];
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[i] > arr[mid]) {
                left = mid + 1;
            } else if (arr[i] < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
                break;
            }
        }
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = tmp;
    }
    console.timeEnd('插入排序2');
    // console.log(arr);
}

//希爾排序
// 已一定間隔/增量進行插入排序
function shellSort(arr) {
    let len = arr.length;
    let gap = 1;
    console.time('希爾排序');
    while (gap < len / 5) {
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (let i = gap; i < len; i++) {
            for (let j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
                [arr[j + gap], arr[j]] = [arr[j], arr[j + gap]];
            }
        }
    }
    console.timeEnd('希爾排序');
    // console.log(arr);
}

//分治，拆分最小數組，再進行合并
function mergeSortTest(arr) {
    console.time('歸并排序');
    mergeSort(arr);
    console.timeEnd('歸并排序');
}

function mergeSortTest2(arr) {
    console.time('歸并排序2');
    mergeSort2(arr);
    console.timeEnd('歸并排序2');
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(arguments.callee(left), arguments.callee(right));
}

function mergeSort2(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge2(arguments.callee(left), arguments.callee(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
        while (left.length) {
            result.push(left.shift());
        }
        while (right.length) {
            result.push(right.shift());
        }
        return result;
    }
}

function merge2(left, right) {
    let l1 = 0, r1 = 0, result = [];
    while (l1 < left.length && r1 < right.length) {
        if (left[l1] < right[r1]) {
            result.push(left[l1++]);
        } else {
            result.push(right[r1++]);
        }
    }
    return result.concat(left.slice(l1)).concat(right.slice(r1));
}

// 分治，將數組已基準值pivot分為兩部分，再遞歸
function quickSort(arr, left, right) {
    if (arr.lenght === 1) {
        return;
    }
    let index = partition(arr, left, right);
    if (left < index - 1) {
        quickSort(arr, left, index - 1);
    }
    if (index < right) {
        quickSort(arr, index, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}

function quickSort2(arr) {
    if (arr.length <= 1) return arr;
    return [
        ...quickSort2(arr.slice(1).filter(item => item < arr[0])),
        arr[0],
        ...quickSort2(arr.slice(1).filter(item => item > arr[0]))
    ]
}


function quickSortTest(arr) {
    let left = 0, right = arr.length - 1;
    console.time('快速排序');
    quickSort(arr, left, right);
    console.timeEnd('快速排序');
    // console.log(arr);
}

function quickSort2Test(arr) {
    console.time('快速排序2');
    quickSort2(arr);
    console.timeEnd('快速排序2');
    // console.log(arr);
}


// 構造堆，再排序
function heapSort(arr) {
    console.time('堆排序');
    let heapSize = arr.length;
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(arr, i, heapSize);
    }

    for (let j = heapSize - 1; j >= 1; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        heapify(arr, j, 0);
    }
    console.timeEnd('堆排序');
}

function heapify(arr, heapSize, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]];
        arguments.callee(arr, heapSize, largest);
    }
    return arr;
}

// 統計數字出現次數，只能排序整數
function countingSort(arr) {
    let C = [];
    let B = [];
    let min = max = arr[0];
    console.time('计数排序');
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
        C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1;
    }
    for (let j = min; j <= max; j++) {
        for (let m = 0; m < C[j]; m++) {
            B.push(j);
        }
    }
    console.timeEnd('计数排序');
    // console.log(B);
}

// 將不同值根據函數映射到到不同bucket中，每個bucket單獨排序
function bucketSort(arr, num) {
    console.time('桶排序');
    if (arr.lenth <= 1) return arr;
    num = num || (num > 1 && typeof num === 'number') ? num : 10;

    let bucket = [], result = [], min = max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
    }

    let space = (max - min + 1) / num;
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] - min) / space);
        if (bucket[index]) {
            bucket[index].push(arr[i]);
            for (let j = bucket[index].length - 2; j >= 0; j--) {
                if (bucket[index][j] > bucket[index][j + 1]) {
                    [bucket[index][j], bucket[index][j + 1]] = [bucket[index][j + 1], bucket[index][j]]
                } else {
                    break;
                }
            }
        } else {
            bucket[index] = [];
            bucket[index].push(arr[i]);
        }
    }
    let n = 0;
    while (n < num) {
        result = result.concat(bucket[n]);
        n++;
    }
    console.timeEnd('桶排序');
    // console.log(result);
}

function bucketSort2(arr, num) {
    console.time('桶排序2');
    if (arr.lenth <= 1) return arr;
    num = num || (num > 1 && typeof num === 'number') ? num : 10;
    let bucket = [], result = [], min = max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
    }
    let space = (max - min + 1) / num;
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] - min) / space);
        if (bucket[index]) {
            let left = 0, right = bucket[index].length - 1;
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (arr[i] > bucket[index][mid]) {
                    left = mid + 1;
                } else if (arr[i] < bucket[index][mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                    break;
                }
            }
            for (let j = bucket[index].length - 1; j >= left; j--) {
                bucket[index][j + 1] = bucket[index][j];
            }
            bucket[index][left] = arr[i];
        } else {
            bucket[index] = [];
            bucket[index].push(arr[i]);
        }
    }
    let n = 0;
    while (n < num) {
        result = result.concat(bucket[n]);
        n++;
    }
    console.timeEnd('桶排序2');
    // console.log(result);
}

let array = new Array(10000000);
for (let i = 0; i < array.length; i++) {
    const num = Math.ceil(Math.random() * 10000000);
    array[i] = num;
}

let a1 = [...array];
let a2 = [...array];
let a3 = [...array];
let a4 = [...array];
let a5 = [...array];
let a6 = [...array];
let a7 = [...array];
let a8 = [...array];
let a9 = [...array];
let a10 = [...array];
let a11 = [...array];
let a12 = [...array];
let a13 = [...array];
let a14 = [...array];
let a15 = [...array];
// bubbleSort(a1);
// bubbleSort2(a2);
// bubbleSort3(a3);
// selectionSort(a4);
// insertionSort(a5);
// insertionSort2(a6);
// shellSort(a7);
// mergeSortTest(a8);
// mergeSortTest2(a9);
// quickSortTest(a10);
// quickSort2Test(a11);
// heapSort(a12);
// countingSort(a13);
// bucketSort(a14, 1000);
bucketSort2(a15, 1000);













