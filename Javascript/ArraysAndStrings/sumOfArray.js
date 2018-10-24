const numbers = [1, 2, 3, 4,9];

const sum = numbers.reduce(function (acc, number) {
  return acc += number;
}, 0);
console.log(sum);

function sum2 (numbers = []) {
  if (!Array.isArray(numbers) || !numbers.length) {
    return;
  }
  return numbers.reduce( (acc, curVal) => { return acc += curVal; });
}

console.log(sum2(numbers));
console.log(sum2(""));


Array.prototype.reduce2 = function(cb) {
  if (!Array.isArray(this)) {
    return 'Expecting array';
  }
  var result = 0;
  this.forEach(function (val) {
    result = cb(result, val);
  });
  return result;
}


const sum3 = numbers.reduce2(function (acc, number) {
  return acc += number;
}, 0);
console.log(sum3);
