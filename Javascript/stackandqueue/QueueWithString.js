function Queue () {
  this.storage = "";
};

Queue.prototype.enqueue = function (val) {
  if (this.storage) {
    this.storage = this.storage + ',' + val;
  } else {
    this.storage = val;
  }
}

Queue.prototype.dequeue = function () {
  var str = this.storage.substring(0, this.storage.indexOf(','));
  this.storage = this.storage.slice(this.storage.indexOf(',') + 1);
  return str;
}

var q1 = new Queue();

q1.enqueue('a');
q1.enqueue('b');
q1.enqueue('c');

console.log(q1.storage);

console.log(q1.dequeue());
console.log(q1.storage);
console.log(q1.dequeue());
console.log(q1.storage);
q1.enqueue('d');
console.log(q1.storage);
