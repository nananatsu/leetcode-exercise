var maxDepth = function (root) {

    let getDeep = (root, d) => {
        if (root === null) {
            return d;
        }
        let d1 = getDeep(root.left, d + 1);
        let d2 = getDeep(root.right, d + 1);
        return Math.max(d1, d2);
    }
    return getDeep(root, 0);

};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

console.time('二叉树的最大深度');
console.log(maxDepth(root));
console.timeEnd('二叉树的最大深度');
