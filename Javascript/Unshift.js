function unshift (arr, numtoAdd) {
  if(!arr.length) {
    arr[0] = numtoAdd;
    return;
  }

  for (var i = arr.length; i>= 0; i--) {
    arr[i] = arr[i-1];
  }
  arr[0] = numtoAdd;
  return arr;
}

console.log(unshift([1,2,3,4], 9));



var foo = "Hello";
(function() {
  var bar = " World";
  console.log(foo + bar);
})();
console.log(foo + bar);
