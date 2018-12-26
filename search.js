var search = function (nums, target) {

    let rot;
    let len = nums.length - 1;
    for (let i = 1; i <= len; i++) {
        if (nums[i] < nums[i - 1]) rot = i;
    }

    let queryTarget = (arr, l, r, target) => {
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] > target) r = mid - 1;
            else if (arr[mid] < target) l = mid + 1;
            else if (arr[mid] === target) return mid;
        }
        return -1;
    }

    if (rot) {
        if (target < nums[rot] || target > nums[rot - 1]) return -1;
        if (target > nums[len]) return queryTarget(nums, 0, rot - 1, target);
        else return queryTarget(nums, rot, len, target);
    }else{
        if (target < nums[0] || target > nums[len]) return -1;
        return queryTarget(nums,0,len,target);
    }

};

console.time('搜索旋转排序数组');
console.log(search([1,3],3));
console.timeEnd('搜索旋转排序数组');
