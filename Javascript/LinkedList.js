function Node(value) {
  this.value = value;
  this.next=null;
}

function LinkedList (value) {
  if (value === undefined) { console.log('value cannot be empty!'); return;}
  var node = new Node(value);
  this.head = node;
  this.tail = this.head;
}

LinkedList.prototype.addToTail = function (value) {
  var node = new Node(value);
  this.tail.next = node;
  this.tail = node;
}

LinkedList.prototype.remove = function () {
  ll.head = ll.head.next;
}

LinkedList.prototype.forEach = function (callback) {
  if(!this.head) {
    return;
  }
  var temp = this.head;
  while (temp) {
    callback(temp.value);
    temp = temp.next;
  }
}

LinkedList.prototype.print = function () {
  var res = [];
  if (!this.head) {
    return 'Empty';
  }
  this.forEach(function (v) {
    res.push(v);
  });
  console.log(res.join(','));
}

LinkedList.prototype.insertAfter = function insertAfter(node, value) {
  if (!node || !value) {
    return 'node or value is empty';
  }
  var newNode = new Node(value);
  newNode.next = node.next;
  node.next = newNode;
  if (this.tail === node) {
    This.tail = newNode;
  }
}

LinkedList.prototype.removeAfter  = function removeAfter(node) {
  var removedNode = node.next;
  if (!removedNode) { console.log('nothing to remove'); return;}

  node.next = removedNode.next;
  removedNode.next = null;

  if (removedNode === this.tail) {
    this.tail = node;
  }
  return removedNode;


}

LinkedList.prototype.insertHead = function (val) {
  if (!val) {
    console.log('empty val');
    return;
  }
  var newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  return this.head;
}

LinkedList.prototype.appendToTail = function (val) {
  if (!this.tail) {
    console.log('Empty list, no tail to append');
    return;
  }
  if (val === undefined) {
    console.log('No val');
    return;
  }
  var newNode = new Node(val);
  this.tail.next = newNode;
  this.tail = newNode;
  return this.tail;
}

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    console.log('Empty list, no head');
    return;
  }

  var oldHead = this.head;
  this.head = oldHead.next;
  oldHead.next = null;
  return oldHead;
  return this.tail;
}

var ll = new LinkedList(10);


ll.addToTail(20);
ll.addToTail(30);
ll.addToTail(40);
// console.log(ll);
// ll.remove();
// console.log(ll);
ll.print();
ll.insertAfter(ll.head, 15);
console.log(ll.tail);
ll.removeAfter(ll.tail);
ll.removeAfter(ll.head);

ll.print();
ll.insertHead(9);
ll.insertHead(8);
console.log(ll.tail);
ll.appendToTail(50);
console.log(ll.tail);
ll.print();

ll.appendToTail(60);
console.log(ll.tail);

ll.removeHead();
console.log(ll.head);
ll.print();
