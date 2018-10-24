const Emitter = require('./emitter.js');

const emitter = new Emitter();
var test = 0


var sub1 = emitter.subscribe('sum', num => (test = num + test));

emitter.emit('sum', 1);
var sub2 = emitter.subscribe('sum', num => (test = num * test));

console.log(test);

emitter.emit('sum', 2);
  console.log(test);
sub2.release('sum');
emitter.emit('sum', 2);
console.log(test);
