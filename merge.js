var merge = function (nums1, m, nums2, n) {

    let len = m + n;
    m--;
    n--;
    while (len--) {
        if(n < 0) break;
        if (nums1[m] > nums2[n]) {
            nums1[len] = nums1[m];
            m--;
        } else {
            nums1[len] = nums2[n];
            n--;
        }
    }
};

console.time('合并两个有序数组');
console.log(merge([1,2,3,0,0,0], 3,[2,5,6], 3));
console.timeEnd('合并两个有序数组');
