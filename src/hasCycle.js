var hasCycle = function(head) {
    
    if(!head) return false;
    if(!head.next) return false;
    let slow = head;
    let fast = head.next;
    while(slow !== fast){
        if(fast == null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node1 = new ListNode(3);
node1.next = new ListNode(2);
node1.next.next = new ListNode(0);
node1.next.next.next = new ListNode(-4);
// node1.next.next = new ListNode(2);
// node1.next.next.next = new ListNode(4);
// node1.next.next.next.next = new ListNode(5);


console.time('环形链表');
console.log(hasCycle(node1));
console.timeEnd('环形链表');
