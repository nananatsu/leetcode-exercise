/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    
    let arr = [2,3,5,7,11,13,17,19,23,29,31];
    let result = 0;
    for(let i = L; i <= R; i++){
        let tmp = i.toString(2);
        let count = 0;
        for(let j = 0; j < tmp.length; j++){
            if(tmp[j] === '1') count++;
        }
        if(arr.indexOf(count) > -1) result++;
    }
    return result;
};

console.time('762. 二进制表示中质数个计算置位');
console.log(countPrimeSetBits(10,15));
console.timeEnd('762. 二进制表示中质数个计算置位');