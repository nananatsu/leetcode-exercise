var findMedianSortedArrays = function (nums1, nums2) {
    let tmp = [];
    let n = 0, m = 0;
    while (n < nums1.length && m < nums2.length) {
        if (nums1[n] < nums2[m]) {
            tmp.push(nums1[n]);
            n++;
        } else {
            tmp.push(nums2[m]);
            m++;
        }
    }
    if (n < nums1.length) {
        tmp = tmp.concat(nums1.slice(n));
    } else {
        tmp = tmp.concat(nums2.slice(m));
    }
    let len = tmp.length;
    if (len % 2 === 1) {
        return tmp[Math.floor(len / 2)];
    } else {
        let mid = len / 2;
        return (tmp[mid] + tmp[mid - 1]) / 2;
    }
};

// function sort(arr, left, right) {
//     if (left < right) {
//         let p = arr[right];
//         let n = left - 1;
//         for (let i = left; i <= right; i++) {
//             if (arr[i] <= p) {
//                 n++;
//                 [arr[n], arr[i]] = [arr[i], arr[n]];
//             }
//         }
//         sort(arr, left, n - 1);
//         sort(arr, n + 1, right);
//     }
// }

console.time('两个排序数组的中位数');
console.log(findMedianSortedArrays([3],[-2,-1]));
console.timeEnd('两个排序数组的中位数');