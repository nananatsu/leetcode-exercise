var maxArea = function (height) {

    let ma = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        if (area > ma) ma = area;
        height[left] < height[right] ? left++ : right--;
    }
    return ma;
};

console.time('盛最多水的容器');
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.timeEnd('盛最多水的容器');

