// 迭代
// var reverseList = function (head) {
//     let pre = null;
//     while (head) {
//         let next = head.next;
//         head.next = pre;
//         pre = head;
//         head = next;
//     }
//     return pre;
// };

// 遞歸
var reverseList = function (head) {
    if(head === null || head.next === null) return head;
    let node = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return node;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.time('反转链表');
console.log(reverseList(node));
console.timeEnd('反转链表');
