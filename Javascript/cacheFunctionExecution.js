function cache (fn) {
  var cache = {};
  return function (arg) {
    var key = arg;
    if (arguments.length > 1) {
      key = [].slice.call(arguments).join("");
    }
    if (cache[key]) {
      console.log('found in cache');
      return cache[key];
    }
    else {
      cache[key] = fn.apply(null, [].slice.call(arguments));
      return cache[key];
    }
  }
}

var f1 = cache(function () {
  var res = 1;
  if (arguments.length > 1) {
    for (var i=0; i<arguments.length; i++) {
      res = res * arguments[i];
    }
  }else {
    res = 2 * arguments[0];
  }
  return res
});

console.log(f1(1));

console.log(f1(2));
console.log(f1(2));

console.log(f1(3, 3));
console.log(f1(3, 3,5));

// var f2 = cache(function (a) {
//   return a*3;
// });
//
// console.log(f2(1));
//
// console.log(f2(1));
