var peakIndexInMountainArray = function(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] > A[i + 1]) {
            if(A[i] > A[i - 1]){
                return i;
            }
        }
    }
};

console.time('山脉数组的峰顶索引');
console.log(peakIndexInMountainArray([0,2,1,0]));
console.timeEnd('山脉数组的峰顶索引');
