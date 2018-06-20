// loop

function expLoop(base, exponent) {
  var result = 1;
  while (exponent >= 1) {
    result *= base;
    exponent--;
  }
  return result;
}

console.log(expLoop(2,10));
console.log(expLoop(5,4));

/****/

// recursion


function expRecursion(base, exponent) {
  if (exponent === 1) {
    return base;
  } else {
    return base * expRecursion(base, exponent - 1);
  }
}

console.log(expRecursion(2,10));
console.log(expRecursion(5,4));
