Function.prototype.call2 = function call2(oThis) {
  if (typeof this !== 'function') {
    return 'not callable';
  }

  oThis.fToCall = this;

  var aArgs = [].slice.call(arguments, 1);
  return eval("oThis.fToCall(" + aArgs + ")");
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
foo.call2(obj, 20,30);
foo.call3(obj, 20,30);

Function.prototype.myOwnCall = function(someOtherThis) {
  someOtherThis = someOtherThis || global;
  var uniqueID = "00" + Math.random();
  while (someOtherThis.hasOwnProperty(uniqueID)) {
    uniqueID = "00" + Math.random();
  }
  someOtherThis[uniqueID] = this;
  const args = [];
  // arguments are saved in strings, using args
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }

  // strings are reparsed into statements in the eval method
  // Here args automatically calls the Array.toString() method.
  var result = eval("someOtherThis[uniqueID](" + args + ")");
  delete someOtherThis[uniqueID];
  return result;
};
