//二叉搜索树最近公共祖先
var lowestCommonAncestor = function (root, p, q) {

    let query = (node, v) => {
        if (ancestor.indexOf(node.val) > -1) { lowest = node; }
        else { ancestor.push(node.val); }
        if (node.val < v.val) {
            query(node.right, v);
        } else if (node.val > v.val) {
            query(node.left, v);
        }
    }
    let ancestor = [];
    let lowest;
    query(root, p);
    query(root, q);
    return lowest;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);


console.time('二叉搜索树的最近公共祖先');
console.log(lowestCommonAncestor(root, root.left, root.left.right));
console.timeEnd('二叉搜索树的最近公共祖先');
