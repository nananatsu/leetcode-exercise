// 階乘后的0
var trailingZeroes = function(n) {

    let i = 1;
    let count = 0;
    while(Math.pow(5,i) < n){
        count += Math.floor(n/Math.pow(5,i));
        i++;
    }
    return count;
};

console.log(trailingZeroes(3));