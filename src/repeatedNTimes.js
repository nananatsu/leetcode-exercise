/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    
    let temp = {};
    for(let i = 0;i < A.length;i++){
        if(!temp[A[i]]) temp[A[i]] = 1;
        else return A[i];
    }
};

console.time('961.重复N次的元素');
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));
console.timeEnd('961.重复N次的元素');

