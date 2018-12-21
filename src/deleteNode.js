var deleteNode = function (node) {

    node.val = node.next.val;
    node.next = node.next.next;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

console.time('删除链表中的节点');
console.log(deleteNode(head.next));
console.timeEnd('删除链表中的节点');
