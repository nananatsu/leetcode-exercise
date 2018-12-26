var maxPathSum = function (root) {

    let maxPath = (node) => {
        if (node === null) return 0;
        let left = Math.max(maxPath(node.left, res), 0);
        let right = Math.max(maxPath(node.right, res), 0);
        res = Math.max(res, left + right + node.val);
        return Math.max(left, right) + node.val;
    }

    let res = Number.MIN_SAFE_INTEGER;
    maxPath(root);
    return res;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
// root.left.left = new TreeNode(2);
// root.left.right = new TreeNode(4);

console.time('二叉树中的最大路径和');
console.log(maxPathSum(root));
console.timeEnd('二叉树中的最大路径和');
