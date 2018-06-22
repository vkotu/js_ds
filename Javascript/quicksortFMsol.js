function quicksort(array, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = array.length-1;

  if (lo < hi) {
    // partition array
    var p = partition(array, lo, hi);
    console.log('partitioning from', lo, 'to', hi, '=> partition:',  p);
    // sort subarrays
    quicksort(array, lo, p-1);
    quicksort(array, p+1, hi);
  }

  // for initial call, return sorted array
  if (hi-lo === array.length-1) return array;
}

// Lomuto partition scheme
function partition(arr, lo, hi) {
  // choose last element as pivot
  var pivot = arr[hi];
  // keep track of index to put pivot at
  var pivotLoc = lo;
  // iterate through subarray and if element <= pivot, place element before pivotLoc
  for (var i=lo; i<hi; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pivotLoc, i);
      pivotLoc++;
    }
  }
  // move pivot to its proper location
  swap(arr, pivotLoc, hi);
  return pivotLoc;
}

function swap (arr, i1, i2) {
  if (i1 === i2) return;
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  console.log('swapped', arr[i1], arr[i2], 'in', arr);
  return arr;
}


console.log(quicksort([10,2,5,8,2,4,3,9,6]));

console.log(quicksort([]));

console.log(quicksort([10, Number.MAX_SAFE_INTEGER, 123,344, 7129129, 820379823]));
