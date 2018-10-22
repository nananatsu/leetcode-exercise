var detectCycle = function (head) {

    if(!head) return null;
    let set = new Set(); 
    set.add(head);
    while (head.next) {
        if (set.has(head.next)) return head.next;
        set.add(head.next);
        head = head.next;
    }
    return null;
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


console.time('环形链表 II');
console.log(detectCycle(node1));
console.timeEnd('环形链表 II');
