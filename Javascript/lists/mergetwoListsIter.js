// sorted lists
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null) {
        return [];
    }

    var p1 = l1;
    var p2 = l2;
    var head, cur;
    while (p1 !== null || p2 !== null) {
        var temp = new ListNode();
        if(!head) {
            head = temp;
        }
        if(!cur) {
            cur = temp;
        } else {
            cur.next = temp;
            cur = temp;
        }
        if (p1 === null) {
            cur.val = p2.val;
            p2 = p2.next;
        }
        else if (p2 === null) {
            cur.val = p1.val;
            p1 = p1.next;
        }
        else if (p1.val <= p2.val) {
            cur.val = p1.val;
            p1 = p1.next;
        }
        else if (p2.val < p1.val) {
            cur.val = p2.val;
            p2 = p2.next;
        }
    }
    console.log(head);
    return head
};
