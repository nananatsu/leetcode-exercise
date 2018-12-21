var canPlaceFlowers = function (flowerbed, n) {

    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (!flowerbed[i - 1] || flowerbed[i - 1] === 0) && (!flowerbed[i + 1] || flowerbed[i + 1] === 0)) {
            i++;
            count++;
        } else if (flowerbed[i] === 1) {
            i++;
        }
    }
    return count >= n;
};

console.time('种花问题');
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.timeEnd('种花问题');