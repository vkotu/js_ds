// array as stack1


function Queue () {
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.enqueue = function (val) {
  if (!this instanceof Queue) {
    throw new TypeError('Expecting instance of Queue');
  }
  if (val === null || val === undefined) {
    return 'No value to be queued';
  }
  this.stack1 && this.stack1.push(val);
  console.log(this.stack1);
}

Queue.prototype.printQ = function () {
  if(this.stack2 && this.stack2.length) {
    for(var i = this.stack2.length-1; i>=0; i--) {
      console.log("stack => ", this.stack2[i]);
    }
  }
  if(this.stack1 && this.stack1.length) {
    for(var i = 0; i<=this.stack1.length-1; i++) {
      console.log("stack => ", this.stack1[i]);
    }
  }
}

Queue.prototype.dequeue = function () {
  if (!this instanceof Queue) {
    throw new TypeError('Expecting instance of Queue');
  }
  if(this.stack2.length) {
    return this.stack2.pop();
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.length ? this.stack2.pop() : 'Nothing in Queue';
  }
};


var qu = new Queue();
qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
qu.enqueue(4);

qu.printQ();

console.log(qu.dequeue());
console.log(qu.dequeue());
qu.enqueue(5);
qu.enqueue(6);
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.dequeue());
qu.enqueue(7);
qu.printQ();
