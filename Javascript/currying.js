Function.prototype.curry = function () {
  if (arguments.length < 1) {
    return 'nothing to curry';
  }
  var context = this;
  if (typeof context !== 'function') {
    return 'should be callable'
  }
  var args = [].slice.call(arguments)
  return function () {
    return context.apply(context, args.concat([].slice.call(arguments)));
  }
}


var converter = function (factor, symbol, input) {
  return factor * input + symbol;
}

var curry = converter.curry(1.62, 'km');
console.log(curry(3));
