// function recursiveMult (arr, num) {
//   if (arr.length === 1) {
//     return [arr[0] * num];
//   } else {
//     return [arr[arr.length - 1] * num].concat(recursiveMult(arr.slice(0, arr.length - 1), num));
//   }
// }

function recursiveMult (arr, num) {
  if (!arr.length) {
    return 'empty array';
  }
  if (arr.length === 1) {
    return [arr[0] * num];
  } else {
    return [arr[0] * num].concat(recursiveMult(arr.slice(1, arr.length), num));
  }
}


console.log(recursiveMult([1], 8));
