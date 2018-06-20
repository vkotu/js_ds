function Queue () {
  this.storage = {

  }
  this.head = 0;
  this.tail = 0;
}


Queue.prototype.size = function () {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
};


Queue.prototype.enqueue = function (val) {
  this.storage[this.tail] = val;
  this.tail += 1;
}


Queue.prototype.dequeue = function () {
  if (this.head == this.tail) {
    this.head = 0;
    this.tail = 0;
    console.log('empty queue: reset');
    return;
  } else {
    delete this.storage[this.head];
    this.head += 1;
  }
}

var q1 = new Queue();

q1.enqueue('a');
q1.enqueue('b');
q1.enqueue('c');
q1.enqueue('d');

console.log(q1.storage);

console.log(q1.size());

q1.dequeue();

console.log(q1.storage);

q1.dequeue();

console.log(q1.storage);

q1.enqueue('e');

q1.enqueue('f');

console.log(q1.storage);

q1.dequeue();

q1.dequeue();

q1.dequeue();

q1.dequeue();

console.log(q1.storage);

q1.dequeue();

q1.enqueue('g');

q1.enqueue('h');

console.log(q1.storage);

q1.dequeue();

console.log(q1.storage);
