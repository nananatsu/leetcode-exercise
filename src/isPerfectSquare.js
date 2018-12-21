// 有效的完全平方数
var isPerfectSquare = function (num) {

    if(num === 1){
        return true;
    }
    return search(num, 0 , num);

};

function search(num, left, right) {
    let result = false;
    if (right - left <= 1) {
        return result;
    }
    let mid = Math.floor((left + right) / 2);
    let val = mid * mid;
    if (val > num) {
        result = search(num, left, mid);
    } else if (val < num) {
        result = search(num, mid, right);
    } else if (val === num) {
        result = true;
    }
    return result;
}

console.time('有效的完全平方数');
console.log(isPerfectSquare(14));
console.timeEnd('有效的完全平方数');