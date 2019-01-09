/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

    let obj = {};
    for (let i = 0; i < tasks.length; i++) {
        obj[tasks[i]] !== undefined ? obj[tasks[i]]++ : obj[tasks[i]] = 1;
    }
    let sum = 0;
    let max;
    Object.keys(obj).forEach((key) => {
        if (max === undefined || obj[key] > obj[max[0]]) max = [key];
        else if (obj[key] === obj[max[0]]) max.push(key);
        sum += obj[key];
    })

    let ans = (obj[max[0]] - 1) * (n + 1) + max.length;
    return ans > sum ? ans : sum;

};

console.time('Task Scheduler');
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0));
console.timeEnd('Task Scheduler');