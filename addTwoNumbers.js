var addTwoNumbers = function (l1, l2) {

    let carry = 0;
    let node = new ListNode();

    let sum = function (l1, l2, node, carry) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        node.val = val % 10;
        carry = ~~(val / 10);
        if ((l1 && l1.next) || (l2 && l2.next) || carry > 0) {
            node.next = new ListNode();
            sum(l1 ? l1.next : 0, l2 ? l2.next : 0, node.next, carry);
        }
    }
    sum(l1, l2, node, 0);
    return node;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node = new ListNode(1);

let node2 = new ListNode(9);
node2.next = new ListNode(9);


console.time('两数相加');
console.log(addTwoNumbers(node, node2));
console.timeEnd('两数相加');
