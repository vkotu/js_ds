var arr = [100, 87, 1, 2, 30, 31, 9, 22];
var arr1= [-100, -99, -88];
var arr2 = [5, 3, 2, 1];



function findLongIncSubArr(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return;
  }
  var result = 0;
  var count = 1;
  arr.forEach(function (val, index) {
    if (arr[index + 1] && arr[index + 1] > arr[index]) {
      count++;
    } else {
      result = count > result ? count : result;
      count = 1;
    }
  });
  return result;
}


console.log(findLongIncSubArr(arr));
console.log(findLongIncSubArr(arr1));
console.log(findLongIncSubArr(arr2));
