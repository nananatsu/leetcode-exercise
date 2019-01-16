/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9){
            digits[i] = 0;
            if(i === 0){
                digits = [1].concat(digits);
            }
        }else{
            digits[i] += 1;
            break;
        }
    }
    return digits;

};

console.time('加一');
console.log(plusOne([9]));
console.timeEnd('加一');