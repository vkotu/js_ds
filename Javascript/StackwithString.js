function Stack () {
  this.storage = "";
}

Stack.prototype.push = function push (value) {
  if (this.storage) {
    this.storage = this.storage + ',' +  value;
  } else {
    this.storage = value;
  }
}

Stack.prototype.pop = function pop () {
  var str = this.storage.substring(this.storage.lastIndexOf(',') + 1, this.storage.length);

  this.storage = this.storage.substring(0,this.storage.lastIndexOf(','));

  return str;
}

Stack.prototype.size = function size () {
  return this.storage.length;
}

var myWeeklyMenu = new Stack ();

myWeeklyMenu.push('redBeans');

myWeeklyMenu.push('blackBeans');

console.log(myWeeklyMenu.storage);
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.storage);
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.storage);
