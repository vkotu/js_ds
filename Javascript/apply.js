Function.prototype.apply2 = function (oThis) {
  if (typeof this !== 'function') {
    return 'not callable';
  }
  console.log(Object.prototype.toString.call(arguments[1]));
  if(!Array.isArray(arguments[1])) {
    return 'second param must be array';
  }
  var aArgs = arguments[1];
  console.log(aArgs);
  oThis.fname = this;
  return oThis.fname(...aArgs);
}


var obj = {
  x :10
}


function foo(a, b) {
  console.log(this.x);
  console.log(a,b);
}

String.prototype.test = function () {
  console.log(this);
  console.log(typeof this);
}
var x = "sad";
console.log(typeof x);
x.test();


console.log(foo.apply2(obj, [0, 30]));
