// var mergeKLists = function (lists) {

//     let result = new ListNode();
//     let current = result;
//     let len = lists.length;
//     let tmp = new Array(len).fill(1);
//     while (len) {
//         let min = 0;
//         for (let i = 0; i < lists.length; i++) {
//             if (!lists[i]) {
//                 if (tmp[i]) {
//                     tmp[i] = 0;
//                     len--;
//                 }
//                 continue;
//             }
//             if (!lists[min]) {
//                 min = i;
//                 continue;
//             }
//             if (lists[i].val < lists[min].val) min = i;
//         }
//         current.next = lists[min];
//         lists[min] = lists[min] ? lists[min].next : null;
//         current = current.next;
//     }
//     return result.next;
// };

var mergeKLists = function (lists) {
    if(lists.length === 0) return null;
    let mergeTwoLists = function (l1, l2) {
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

    let result = lists[0];
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node1 = new ListNode(-6);
node1.next = new ListNode(4);
node1.next.next = new ListNode(5);
let node2 = new ListNode(-8);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);
let node3 = new ListNode(-7);
node3.next = new ListNode(6);

console.time('合并K个排序链表');
console.log(mergeKLists([node1]));
console.timeEnd('合并K个排序链表');
