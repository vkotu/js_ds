var Node = {
    init: function (value) {
        if (value === undefined) {
            console.log("please provide a value for the new node");
            return;
        }
        this.val = value;
        this.prev = null;
        this.next = null
    }
}

var Dlist = {
    init: function init (val) {
        if(val === undefined) {
            console.log('head value cannot be empty');
            return;
        }
        var node =  Object.create(Node);
        node.init(val);
        this.head = node;
        this.tail = this.head;
    },

    forEach: function forEach (callback) {
        var node = this.head;
        while(node) {
            callback(node);
            node = node.next;
        }
    },

    print: function print() {
        if (!this.head) {
            console.log('List not yet initialised');
            return;
        }
        var res = [];
        this.forEach(function (node) {
            res.push(node.val);
        });
        console.log (res.join(","));
    },

    findByNode: function findNode (inputNode) {
        if (!inputNode) {
            console.log('Please provide a node');
            return;
        }
        var node = this.head;
        while (node) {
            if (node === inputNode) {
                return node;
            }
            node = node.next;
        }
        console.log('cannot find');
        return;
    },

    insertAfter: function (node, value) {
        if (!node || value === undefined) {
            console.log('Input node or value is empty')
            return;
        }
        var targetNode = this.findByNode(node), oldTargetNext, newNode;
        if(!targetNode) {
            console.log('cannot find node to insert after it');
            return;
        }
        oldNext = targetNode.next,
        newNode = Object.create(Node);
        newNode.init(value);

        targetNode.next = newNode;
        newNode.prev = targetNode;
        newNode.next = oldNext;
        oldNext && (oldNext.prev = newNode)
        if (this.tail === targetNode) {
            this.tail = newNode;
        }
        console.log('Insert complete');
    },

    removeAfter: function removeAfter(node) {
        if (!node) {
            console.log('provide a node');
            return;
        }
        var targetNode = this.findByNode(node);

        if (!targetNode) {
            console.log('target node not found');
            return;
        }

        var nodeToRemove = targetNode.next;
        if(!nodeToRemove) {
            console.log('nothing to remove');
            return;
        }
    
        targetNode.next = nodeToRemove.next;
        nodeToRemove.next && (nodeToRemove.next.prev = targetNode);
        if (nodeToRemove === this.tail) {
            this.tail = targetNode;
        }
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        return nodeToRemove;
    },

    insertHead: function insertHead(val) {
        if (!this.head) {
            console.log('List not initialised');
            return;
        }
        var newNode = Object.create(Node);
        newNode.init(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this.head;
    },

    removeHead: function removeHead() {
        if (!this.head) {
            console.log('List is not initialized');
            return;
        }
        var oldHead = this.head;
        if (oldHead.next) {
            this.head = oldHead.next;
        }else {
            this.head = null;
            this.tail = null;
        }
        // var oldHead = this.head;
        // var newHead = oldHead.next;
        // this.head = newHead;
        // newHead.prev = null;
        // oldHead.next = null;
        // return oldHead;
    },
    findNodeByVal: function (val) {
        var node = this.head;
        while (node) {
            if(node.val === val) {
                return node;
            }
            node = node.next;
        }
        console.log('Node with given val not found');
    },

    appendToTail: function (val) {
        if(!this.head) {
            console.log('List is not initialised');
            return;
        }
        var newTail = Object.create(Node);
        newTail.init(val);
        newTail.prev = this.tail;
        this.tail.next = newTail;
        this.tail = newTail;
        return this.tail;
    },

    insertBefore: function (node, val) {
        if(!this.head) {
            console.log('List is not initialised');
            return;
        }
        var targetNode = this.findByNode(node);
        if(!targetNode ) {
            return 'Node not found';
        }
        var newNode = Object.create(Node);
        newNode.init(val);
        newNode.prev = targetNode.prev;
        newNode.next = targetNode;
        targetNode.prev = newNode;
        newNode.prev.next = newNode;
        if (targetNode === this.head) {
            this.head = newNode;
        }
    },

    removeBefore: function (node) {
        if(!this.head) {
            console.log('List is not initialised');
            return;
        }
        var targetNode = this.findByNode(node);
        if(!targetNode ) {
            return 'Node not found';
        }
        var removedNode = targetNode.prev;
        if (!removedNode) {
            return 'nothing to remove';
        }
        removedNode.prev && (removedNode.prev.next = targetNode);
        targetNode.prev = removedNode.prev;
        if (removedNode === this.head) {
            this.head = targetNode;
        }
        removedNode.next = null;
        removedNode.prev = null;
        return removedNode.val;
    }

}

var dList = Object.create(Dlist);
dList.init(1);
// dList.removeHead();
dList.print();
dList.insertAfter(dList.head,3);
dList.insertAfter(dList.head,2);
dList.insertAfter(dList.head.next.next,4);
dList.removeAfter(dList.head);
dList.insertAfter(dList.head,2);
// dList.removeAfter(dList.head.next.next);

// console.log(dList.tail);
dList.removeAfter(dList.head.next);
dList.print();
dList.removeHead();
dList.print();
dList.appendToTail(5);
dList.appendToTail(6);
dList.print();
dList.insertBefore(dList.head.next.next, 3);
dList.print();
dList.removeBefore(dList.head.next);
dList.print();
dList.insertHead(2);
dList.print();