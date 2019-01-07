/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.list = nums;
    this.init = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.list = this.init;
    return this.list;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {

    let len = this.list.length;
    let shuffleArr = new Array(len);
    for (let i = 0; i < len; i++) {
        let r = Math.floor(Math.random() * len);
        while (shuffleArr[r] !== undefined) {
            r = Math.floor(Math.random() * len);
        }
        shuffleArr[r] = this.list[i];
    }
    this.list = shuffleArr;
    return this.list;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let nums = [1,2,3];
let solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
console.log(solution.shuffle());

// 重设数组到它的初始状态[1,2,3]。
console.log(solution.reset());

// 随机返回数组[1,2,3]打乱后的结果。
console.log(solution.shuffle());