var MyQueue = function () {
    this.queue = [];
};

MyQueue.prototype.push = function (x) {
    this.queue.push(x);
};

MyQueue.prototype.pop = function () {
    const val = this.queue[0];
    this.queue = this.queue.splice(1);
    return val;
};

MyQueue.prototype.peek = function () {
    return this.queue[0];
};

MyQueue.prototype.empty = function () {
    return this.queue[0] ? false : true;
};

let q = new MyQueue();
q.push(1);
q.push(2);
console.log(q.pop());
console.log(q.pop());