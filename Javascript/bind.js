Function.prototype.bind2 = function bind2(oThis) {
  if (typeof this !== 'function') {
    return 'not a callable';
  }

  var aArgs = Array.prototype.slice.call(arguments, 1);
  var fToBind = this;

  return function () {
    return fToBind.apply(oThis, aArgs.concat([].slice.call(arguments)));
  }
}


var obj = {
  'x': 10
}

var obj2 = {
  'x': 20
}
// global.x = 20;
function foo(a,b) {
  console.log(this.x);
  console.log(arguments);
}


var bar = foo.bind2(obj, 11,12,13);

bar(14,15);


Function.prototype.bindTry = function (context) {
  var ftoBind = this;

  if (typeof ftoBind !== 'function') { return; }
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    ftoBind.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
}
var bar1 = foo.bindTry(obj, 11,12,13);

bar1(14,15);