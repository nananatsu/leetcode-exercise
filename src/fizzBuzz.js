/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {

    let result = [];
    for (let i = 1; i <= n; i++) {
        let isThreeMulti = i % 3 === 0;
        let isFiveMulti = i % 5 === 0;
        if (isThreeMulti && !isFiveMulti) result.push("Fizz");
        else if (!isThreeMulti && isFiveMulti) result.push("Buzz");
        else if (isThreeMulti && isFiveMulti) result.push("FizzBuzz");
        else result.push(i + "");
    }
    return result
};

console.time('Fizz Buzz');
console.log(fizzBuzz(15));
console.timeEnd('Fizz Buzz');