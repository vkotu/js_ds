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

Stack.prototype.pop = function () {
  var size = this.size(),
    val = this.storage[size-1];
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

console.log(s1.storage);
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.storage);
