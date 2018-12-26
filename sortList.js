var sortList = function (head) {

    if (head === null || head.next === null) return head;

    let fast = head;
    let slow = head;
    let pre = null;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        pre = slow;
        slow = slow.next;
    }
    if (pre !== null) pre.next = null;
    let l1 = sortList(head);
    let l2 = sortList(slow);
    return merge(l1, l2);
};

function merge(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let node = new ListNode();
    let next = node;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            next.next = l1;
            l1 = l1.next;
            next = next.next;
        } else {
            next.next = l2;
            l2 = l2.next;
            next = next.next;
        }
    }
    if (l1 !== null) next.next = l1;
    if (l2 !== null) next.next = l2;
    return node.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node = new ListNode(4);
node.next = new ListNode(2);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(3);

console.time('排序链表');
console.log(sortList(node));
console.timeEnd('排序链表');
