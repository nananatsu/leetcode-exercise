/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    let nums = [];
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '+':
                nums.push(nums.pop() + nums.pop());
                break;
            case '-':
                let b = nums.pop();
                let a = nums.pop();
                nums.push(a - b);
                break;
            case '*':
                nums.push(nums.pop() * nums.pop());
                break;
            case '/':
                let m = nums.pop();
                let n = nums.pop();
                let ans = n / m;
                if(ans > 0) nums.push(Math.floor(n / m));
                else nums.push(Math.ceil(n / m));
                break;
            default:
                nums.push(parseInt(tokens[i]));
                break;
        }
    }
    return nums.pop();

};

console.time('逆波兰表达式求值');
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
console.timeEnd('逆波兰表达式求值');