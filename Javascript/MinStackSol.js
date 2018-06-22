function Stack () {
  this.storage = {

  };
  this.minStack = {

  };
  this.count = 0;
  this.minCount = 0;
};


Stack.prototype.size = function (obj) {
  var size = 0;
  for (var key in obj || this.storage) {
    size++;
  }
  return size;
};

Stack.prototype.push = function (val) {
  var count = this.count;
  this.storage[count] = val;
  this.count++;
  if (!this.minCount) {
    this.minStack[this.minCount] = val
    this.minCount++;
  } else {
    if (val <= this.minStack[this.minCount - 1]) {
      this.minStack[this.minCount] = val;
      this.minCount++;
    }
  }
};

Stack.prototype.peek = function () {
  console.log('size:' + this.size());
  if (!this.size()) {
    return 'empty stack';
  }
  return this.storage[this.size() - 1];
};

Stack.prototype.pop = function () {
  var count = this.count;
  if (!count) {
    return 'empty stack';
  }
  var val = this.storage[this.count - 1];
  if (val === this.minStack[this.minCount - 1]) {
    delete this.minStack[this.minCount - 1];
    this.minCount--;
  }
  delete this.storage[this.count - 1];
  this.count--;
  return val;

};

var s1 = new Stack();
s1.push(7);
s1.push(2);
s1.push(9);
s1.push(3);
s1.push(5);
s1.push(4);
s1.push(1);
s1.push(10);

console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.minStack[s1.minCount - 1]);

s1.pop();

console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.minStack[s1.minCount - 1]);

s1.pop();

console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.minStack[s1.minCount - 1]);
s1.pop();
s1.pop();
s1.pop();
s1.pop();
console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.minStack[s1.minCount - 1]);


s1.pop();
s1.pop();
console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.count);
console.log(s1.minCount);
console.log(s1.minStack[s1.minCount - 1]);

s1.push(9);
s1.push(3);
s1.push(5);
s1.push(3);

console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.minStack[s1.minCount - 1]);
s1.pop();

console.log(s1.storage);
console.log(s1.minStack);
console.log(s1.minStack[s1.minCount - 1]);
