/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {

    this.data = {};

};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.data[val] === undefined) {
        this.data[val] = null;
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.data[val] !== undefined) {
        delete this.data[val];
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {

    let data = Object.keys(this.data);
    let r = Math.floor(Math.random() * data.length);
    return data[r];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// 初始化一个空的集合。
let randomSet = new RandomizedSet();
randomSet.insert(4);
randomSet.insert(5);
randomSet.insert(6);
randomSet.insert(1);
randomSet.insert(3);

console.log(randomSet.getRandom());