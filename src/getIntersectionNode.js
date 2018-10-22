// a =x + c; b = y + c;
// a + b = l;
// l- a - b - c = c;
var getIntersectionNode = function (headA, headB) {

    if(!headA || !headB) return null;
    let nodeA = headA, nodeB = headB;
    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    }
    return nodeA;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = node1;
// node1.next.next = new ListNode(0);
// node1.next.next.next = new ListNode(-4);
// node1.next.next = new ListNode(2);
// node1.next.next.next = new ListNode(4);
// node1.next.next.next.next = new ListNode(5);

console.time('相交链表');
console.log(getIntersectionNode(node1));
console.timeEnd('相交链表');
