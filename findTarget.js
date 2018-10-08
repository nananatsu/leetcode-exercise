var findTarget = function (root, k) {
    let tmp = [];
    let search = function (node) {
        if (!node) return;
        search(node.left);
        tmp.push(node.val);
        search(node.right);
    }
    search(root);
    console.log(tmp);
    let left = 0;
    let right = tmp.length - 1;
    while(left < right){
        let v = tmp[left] + tmp[right];
        if(v < k){
            left++;
        }else if(v > k){
            right--;
        }else{
            return true;
        }
    }
    return false;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let node = new TreeNode(2);
node.left = new TreeNode(1);
node.right = new TreeNode(3);
// node.left.left = new TreeNode(-4);
// node.left.right = new TreeNode(1);
// node.right.left = new TreeNode(7);
// node.right.right = new TreeNode(9);
// node.left.right.left = new TreeNode(2);
// node.left.right.right = new TreeNode(6);


console.time('两数之和 IV - 输入 BST');
console.log(findTarget(node, -1));
console.timeEnd('两数之和 IV - 输入 BST');
