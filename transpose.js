//矩陣轉置
var transpose = function (A) {
    let B = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if(!B[j]){
                B[j] = [];
            }
            B[j].push(A[i][j]);
        }
    }
    return B;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));