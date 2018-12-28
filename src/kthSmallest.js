var kthSmallest = function (root, k) {
    let inOrder = (root) => {
        if (root === null) return;
        inOrder(root.left);
        i++;
        if (i === k) result = root.val;
        inOrder(root.right);
    }
    let i = 0;
    let result;
    inOrder(root, k);
    return result;
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
root.left.left.left = new TreeNode(1);

console.time('二叉搜索树中第K小的元素');
console.log(kthSmallest(root, 3));
console.timeEnd('二叉搜索树中第K小的元素');
