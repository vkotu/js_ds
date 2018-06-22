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



function recursiveReverse2 (arr) {
  var reversed = [];

  function addItems (orderedArr) {
    if (!orderedArr.length) {
      return;
    }

    reversed.push(orderedArr.pop());

    if (orderedArr.length > 0) {
      addItems(orderedArr);
    }
  }

  addItems(arr);

  return reversed;

}

console.log(recursiveReverse2([1,2,3,4,5,6,7,8]));
console.log(recursiveReverse2([]));
console.log(recursiveReverse2([2]));
