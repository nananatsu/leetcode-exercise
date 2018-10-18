var mergeTwoLists = function (l1, l2) {

    let result = new ListNode();
    let current = result;
    while (l1 || l2) {
        if (!l1) {
            current.next = l2;
            break;
        }
        if (!l2) {
            current.next = l1;
            break;
        }
        console.log(current)
        if (l1.val < l2.val) {
            current.next = l1;
            current = current.next;
            l1 = l1.next;
        } else {
            current.next = l2;
            current = current.next;
            l2 = l2.next;
        }
    }
    return result.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(4);
let node2 = new ListNode(1);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);

console.time('两数相加');
console.log(mergeTwoLists(node1, node2));
console.timeEnd('两数相加');
