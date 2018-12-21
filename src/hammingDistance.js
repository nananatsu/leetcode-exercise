var hammingDistance = function (x, y) {

    let count = 0;
    let sx = parseInt(x).toString(2);
    let sy = parseInt(y).toString(2);

    let lenx = sx.length;
    let leny = sy.length;
    if (lenx < leny) {
        for (let i = 0; i < leny - lenx; i++) {
            sx = 0 + sx;
        }
    } else if(lenx > leny) {
        for (let i = 0; i < lenx - leny; i++) {
            sy = 0 + sy;
        }
    }

    for (let i = 0; i < sx.length; i++) {
        if (sx.charAt(i) !== sy.charAt(i)) {
            count++;
        }
    }
    return count;
};

console.time('汉明距离');
console.log(hammingDistance(4,2));
console.timeEnd('汉明距离');
