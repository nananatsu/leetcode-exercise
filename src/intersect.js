/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    let hash = {};
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        if (hash[nums1[i]] === undefined) hash[nums1[i]] = 1;
        else hash[nums1[i]]++;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]] && hash[nums2[i]] > 0) {
            ans.push(nums2[i]);
            hash[nums2[i]]--;
        }
    }
    return ans;
};

console.time('两个数组的交集 II');
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.timeEnd('两个数组的交集 II');