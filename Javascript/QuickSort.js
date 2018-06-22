function partition(arr, lowIndex, hiIndex) {
  //taking last element as pivot
  var pivotIndex = hiIndex;
  var firstPointer = lowIndex - 1;
  for (var secondPointer = lowIndex; secondPointer <= hiIndex-1; secondPointer++ ) {
    if (arr[secondPointer] <= arr[pivotIndex]) {
      firstPointer++;
      swap(arr, secondPointer, firstPointer);
    }
  }
  swap(arr, pivotIndex, firstPointer+1);
  console.log('pass :' + arr);
  return firstPointer + 1;
}


function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp
};


function quickSort(arr, begin, end) {
  if (!arr.length) {
    return 'empty array';
  }
  if (begin === undefined) {
    begin = 0;
  }
  if (end === undefined) {
    end = arr.length - 1;
  }

  if (begin < end) {
    var p = partition(arr, begin, end);
    console.log('partitioning from', begin, 'to', end, '=> partition:',  p);
    quickSort(arr,begin, p - 1);
    quickSort(arr, p+1, end);
  }

  if (end-begin === arr.length-1) {
    return arr;
  }

}


console.log(quickSort([10,2,5,8,2,4,3,9,6]));

console.log(quickSort([]));

console.log(quickSort([10, Number.MAX_SAFE_INTEGER, 123,344, 7129129, 820379823]));
