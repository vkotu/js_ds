function partition (arr, begin, end) {
  if (begin === end) {
    return being;
  }

  var pivot = end;
  var pivotLoc = begin;
  for (var i = begin; i <= pivot-1; i++) {
    if (arr[i] <= arr[pivot]) {
      swap(arr, i, pivotLoc);
      pivotLoc++;
    }
  }
  swap(arr, pivotLoc, pivot);
  return pivotLoc;
}



function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp
};



function quickSort (arr, begin, end) {

  if (arr === undefined || arr === null || arr.length === 0) {
    return;
  }

  if (begin === undefined) {
    begin = 0;
  }
  if(end === undefined) {
    end = arr.length -1;
  }

  if (begin < end) {
    var p = partition(arr, begin, end);
    console.log(p);
    quickSort(arr, begin, p - 1);
    quickSort(arr, p+1, end);
  }

  if (end - begin == arr.length -1) {
    return arr;
  }
}


console.log(quickSort([10,2,5,8,2,4,3,9,6]));
