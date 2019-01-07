/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.val;
    this.child = new Map();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

    let node = this;
    for (let i = 0; i < word.length; i++) {
        let tmp = node.child.get(word[i]);
        if (tmp) {
            node = tmp;
            continue;
        } else {
            node.child.set(word[i], new Trie());
            node = node.child.get(word[i]);
        }
    }
    node.val = word;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this;
    let ans = true;
    for (let i = 0; i < word.length; i++) {
        let tmp = node.child.get(word[i]);
        if (tmp) {
            node = tmp;
            continue;
        } else {
            ans = false;
            break;
        }
    }
    if(node.val !== word) ans = false;
    return ans;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this;
    let ans = true;
    for (let i = 0; i < prefix.length; i++) {
        let tmp = node.child.get(prefix[i]);
        if (tmp) {
            node = tmp;
            continue;
        } else {
            ans = false;
            break;
        }
    }
    return ans;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");   
console.log(trie.search("app"));

