function recursiveReverse(arr) {
  if (!arr.length) {
    return 'empty array';
  }
  if (arr.length === 1) {
    return arr;
  } else {
    return [arr[arr.length - 1]].concat(recursiveReverse(arr.slice(0, arr.length - 1)));
  }
}

console.log(recursiveReverse([1,2,3,4,5,6]));
console.log(recursiveReverse([]));
