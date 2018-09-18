function Queue() {
  this.stack = [];
}

var q = new Queue();

Queue.prototype.enQueue = function (val) {
  if (!this instanceof Queue) {
    throw new TypeError('Expeecting instance of Queue');
  }
  if (val === null || val === undefined) {
    return;
  }
  this.stack && this.stack.push(val);
}

Queue.prototype.deQueue = function () {
  if (this.stack && !this.stack.length) {
    return;
  }
  var x = this.stack.pop();
  if (!this.stack.length) {
    return x;
  }
  var item = this.deQueue();
  this.stack.push(x);
  return item;
}


q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
console.log(q.stack);

console.log(q.deQueue());
console.log(q.deQueue());

q.enQueue(3);

q.enQueue(3);

console.log(q.deQueue());
