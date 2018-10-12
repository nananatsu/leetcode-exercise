var countPrimes = function (n) {
    let count = 1;
    let tmp = [n];
    if (n <= 2) count = 0;
    for (let i = 3; i < n; i += 2) {
        if (tmp[i]) continue;
        count++;
        for (let j = i * i; j < n; j += i) {
            tmp[j] = true;
        }
    }
    return count;
};

console.time('计数质数');
console.log(countPrimes(72));
console.timeEnd('计数质数');

// var countPrimes = function (n) {
//     let count = 0;
//     let tmp = [];
//     if (n > 2) {
//         count++;
//         tmp.push(2);
//         for (let i = 3; i < n; i = i + 2) {
//             let sqrt = Math.ceil(Math.sqrt(i));
//             let j = 0;
//             let flag = true;
//             while (tmp[j] <= sqrt) {
//                 if (i % tmp[j] === 0) {
//                     flag = false;
//                     break;
//                 }
//                 j++;
//             }
//             if (flag) {
//                 count++;
//                 tmp.push(i);
//             }
//         }
//     }
//     return count;
// };
