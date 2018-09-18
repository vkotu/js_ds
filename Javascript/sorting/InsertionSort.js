function insertionSort (arr) {
  console.log(arr);
  for (var i=0; i<arr.length; i++) {
    for (j=i+1; j>0 ; j--) {
      if (arr[j] < arr[j-1]) {
        swap(arr, j, j-1);
      } else {
        break;
      }
    }
    console.log('pass: ' + i + '->' +  arr);
  }
  return 'final -> ' + arr;
}


function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp
};

console.log(insertionSort([9,4,6,1,4,2,10,0,2,8]));
console.log("###################################");
console.log(insertionSort([444, 140, 876, 129, 70, 902, 991, 941]));


function try2 (arr) {
  if (!arr.length) {
    return 'empty arr'
  }
  for (var i=0; i<arr.length; i++) {
    for (var j=i+1; j>0; j--) {
      if (arr[j] < arr[j-1]) {
        swap(arr, j, j-1);
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(try2([9,4,6,1,4,2,10,0,2,8]));
console.log("###################################");
console.log(try2([444, 140, 876, 129, 70, 902, 991, 941]));
