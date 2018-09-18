function Stack() {
  this.storage = {

  };
  this.count = 0;
}

Stack.prototype.push = function (val) {
  this.storage[++this.count] = val;
}

Stack.prototype.pop = function () {
  if (!this.count) {
    return 'empty stack';
  } else {
    var temp = this.storage[this.count];
    delete this.storage[this.count--];
    return temp;
  }
}


Stack.prototype.peek = function () {
  return this.storage[this.count];
}

var sTest = new Stack();
sTest.push('a');
sTest.push('b');
sTest.push('c');
sTest.push('d');

console.log(sTest.storage);

console.log(sTest.peek());

sTest.pop();
sTest.pop();
console.log(sTest.storage);
console.log(sTest.peek());
console.log("#########################");
console.log("#########################");
console.log("#########################");


function Queue() {
  this.stackIn = new Stack();
  this.stackOut = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.stackIn.push(val);
}
Queue.prototype.transferToStackOut = function () {
  while (this.stackIn.count > 0) {
    this.stackOut.push(this.stackIn.pop());
  }
}


Queue.prototype.dequeue = function () {
  if (this.stackOut.count === 0 ) {
    this.transferToStackOut();
  }
  if (!this.stackOut.count) {
    return 'queue empty';
  }
  return this.stackOut.pop();
}

Queue.prototype.peek = function () {
  if (this.stackOut.count === 0) {
    this.transferToStackOut();
  }
  if (!this.stackOut.count) {
    return 'queue empty';
  }
  return this.stackOut.peek();
}

var q1 = new Queue();

q1.enqueue('a');
q1.enqueue('b');
q1.enqueue('c');

console.log('peek: ' +  q1.peek());
console.log('dequeue: ' + q1.dequeue());
console.log('peek: ' + q1.peek());
