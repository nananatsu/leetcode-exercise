var findMode = function (root) {
    let result = [];
    if(root){
        let tmp = [];
        tmp.push(check(root, tmp));
        tmp.sort((a,b) => a.val - b.val);
        let max = 0;
        for (let i = 0; i < tmp.length; i++) {
            let c = tmp[i].count;
            let v = tmp[i].val;
            if(tmp[i + 1] && v === tmp[i + 1].val){
                tmp[i + 1].count += c + 1;
            }else{
                if (c > max) {
                    max = c;
                    result = [];
                    result.push(tmp[i].val);
                } else if (c === max) {
                    result.push(tmp[i].val);
                }
            }
        }
    }
    return result;
};

function check(node, tmp) {
    let count = 0;
    if (node.left) {
        if (node.left.val === node.val) {
            count++;
            count += check(node.left, tmp).count;
        } else {
            tmp.push(check(node.left, tmp));
        }
    }
    if (node.right) {
        if (node.right.val === node.val) {
            count++;
            count += check(node.right, tmp).count;
        } else {
            tmp.push(check(node.right, tmp));
        }
    }
    return { val: node.val, count: count };
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let node = new TreeNode(6);
node.left = new TreeNode(2);
node.right = new TreeNode(8);
node.left.left = new TreeNode(0);
node.left.right = new TreeNode(4);
node.right.left = new TreeNode(7);
node.right.right = new TreeNode(9);
node.left.right.left = new TreeNode(2);
node.left.right.right = new TreeNode(6);

console.time('二叉搜索树中的众数');
// console.log(findMode(node));
console.timeEnd('二叉搜索树中的众数');

// let arr = [];
// function dfs(root) {
//     if (!root) return;
//     dfs(root.left);
//     arr.push(root.val);
//     dfs(root.right);
// }
// dfs(node);
// console.log(arr);