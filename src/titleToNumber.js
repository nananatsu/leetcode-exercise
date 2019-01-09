/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {

    let obj = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
        'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19,
        'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
    }
    let sum = 0;
    let pow = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        sum += obj[s[i]] * pow;
        pow *= 26;
    }
    return sum;

};

console.time('Excel表列序号');
console.log(titleToNumber('AB'));
console.timeEnd('Excel表列序号');