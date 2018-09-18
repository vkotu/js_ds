function Stack () {
  this.storage = {

  };
};


Stack.prototype.size = function () {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
};

Stack.prototype.push = function (val) {
  var size = this.size();
  this.storage[size] = val;
};

Stack.prototype.peek = function () {
  console.log('size:' + this.size());
  if (!this.size()) {
    return 'empty stack';
  }
  return this.storage[this.size() - 1];
};

Stack.prototype.pop = function () {
  var size = this.size();
  if (!size) {
    return 'empty stack';
  }
  var val = this.storage[size-1];
  delete this.storage[size-1];
  return val;

};

var s1 = new Stack();

s1.push('a');
s1.push('b');
s1.push('c');

console.log(s1.storage);

console.log(s1.pop());

s1.push('d');
s1.push('e');

console.log('peek:' + s1.peek());

console.log(s1.storage);
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.storage);
console.log(s1.pop());
console.log(s1.storage);
console.log(s1.pop());
console.log('peek:' + s1.peek());
console.log(s1.storage);
console.log(s1.pop());
s1.push('c');
console.log(s1.storage);
s1.push('d');
s1.push('e');
console.log(s1.storage);
console.log(s1.pop());
console.log(s1.storage);
