Function.prototype.call2 = function call2(oThis) {
  if (typeof this !== 'function') {
    return 'not callable';
  }
  var fToCall = this;
  return fToCall.apply(oThis, Array.prototype.slice.call(arguments, 1));
}


Function.prototype.call3 = function call2(oThis) {
  if (typeof this !== 'function') {
    return 'not callable';
  }

  oThis.fToCall = this;
  var aArgs= [].slice.call(arguments, 1);
  return oThis.fToCall(...aArgs);
}


var obj = {
  x: 10
}

function foo (a,b) {
  console.log(this.x);
  console.log(a);
  console.log(b);
}

// foo();
foo.call3(obj, 20,30);
