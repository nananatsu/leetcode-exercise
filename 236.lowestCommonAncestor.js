var lowestCommonAncestor = function (root, p, q) {

    let query = (node, path, t) => {
        if (node === null) return;
        path.push(node);
        if (node.val === t.val) {
            path_list.push([...path]);
            return;
        }
        if (node.left !== null) {
            query(node.left, path, t);
        }
        if (node.right !== null) {
            query(node.right, path, t);
        }
        path.pop();
    }
    let path_p = [], path_q = [];
    let path_list = [];
    query(root, path_p, p);
    query(root, path_q, q);    

    let i = 0;
    let lowest = path_list[1][0];
    while (i < path_list[0].length && i < path_list[1].length) {
        if (path_list[0][i] !== path_list[1][i]) {
            break;
        }
        lowest = path_list[1][i];
        i++;
    }
    return lowest;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);


console.time('二叉搜索树的最近公共祖先');
console.log(lowestCommonAncestor(root, root.left, root.left.right.right));
console.timeEnd('二叉搜索树的最近公共祖先');
