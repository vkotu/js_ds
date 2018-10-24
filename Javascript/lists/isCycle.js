var hasCycle = function(head) {
    if (head == null) {
        return false;
    }
    var p1 = head;
    var p2 = head.next ? head.next.next : null;
    while(p1 && p2) {
        if (p1 === p2) {
            return true;
        }
        p1 = p1.next;
        p2 = p2.next ? p2.next.next : null;
    }
    return false;
};
