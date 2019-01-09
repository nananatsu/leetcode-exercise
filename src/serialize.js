/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

    let str = '';
    let dfs = (node) => {
        if (node === null) {
            str = str + ' ,';
            return;
        }
        else str = str + node.val + ',';
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return str.slice(0,str.length - 1);

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let arr = data.split(',').reverse();
    let dfs = (arr) => {
        let s = arr.pop();

        if(s === ' ') return null;
        let node = new TreeNode(parseInt(s));
        node.left = dfs(arr);
        node.right = dfs(arr);
        return node;
    }
    return dfs(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let n = new TreeNode(-1);
n.left = new TreeNode(0);
n.right = new TreeNode(1);
// n.right.left = new TreeNode(4);
// n.right.right = new TreeNode(5);

let s = serialize(n);
let d = deserialize(s);