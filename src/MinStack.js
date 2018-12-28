/**
 * initialize your data structure here.
 */
var MinStack = function () {

    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (x < this.min) this.min = x;
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let tmp = this.stack[this.stack.length - 1];
    this.stack = this.stack.slice(0, this.stack.length - 1);
    if (tmp === this.min) {
        this.min = Number.MAX_SAFE_INTEGER;
        this.getMin();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.min < Number.MAX_SAFE_INTEGER) return this.min;
    let tmp = [...this.stack];
    tmp.sort((a, b) => a - b);
    this.min = tmp[0];
    return this.min;
};


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// console.time("最小栈");
// let minStack = new MinStack();
// arr.forEach((v) => {
//     minStack.push(v);
// })
// for (let i = 0; i < 7500; i++) {
//     minStack.getMin();
// }
// console.timeEnd("最小栈")
// console.log(minStack.getMin())

// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); 
// minStack.pop();
// console.log(minStack.top());   
// console.log(minStack.getMin());  