
var rotateRight = function (head, k) {

    if(!head) return null;
    if(k === 0) return head;
    let st = head;
    let cu = head;
    let end;
    let len = 1;
    while (cu.next) {
        cu = cu.next;
        len++;
    }

    if(len === 1) return head;

    end = cu;
    if (k >= len) k = k % len;
    if(k === 0) return head;

    let i = 1;
    cu = st;
    while (cu.next) {
        if (len - i === k) break;
        cu = cu.next;
        i++;
    }

    let node = cu.next;
    cu.next = null;
    end.next = head;
    return node;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node1 = new ListNode(0);
node1.next = new ListNode(1);
// node1.next.next = new ListNode(2);
// node1.next.next.next = new ListNode(4);
// node1.next.next.next.next = new ListNode(5);


console.time('旋转链表');
console.log(rotateRight(node1, 2));
console.timeEnd('旋转链表');
