function bubbleSort(arr) {
  if(!arr.length) {
    return;
  }
  console.log('input ' + arr);
  for (var i=0; i<arr.length-1; i++) {
    for(var k=0; k<arr.length- i - 1; k++) {
      if (arr[k] > arr[k+1]) {
        var temp = arr[k];
        arr[k] = arr[k+1];
        arr[k+1] = temp;
      }
    }
    console.log('pass: ' + i + '->' +  arr);
  }
  return arr;
}
console.log(bubbleSort([9,4,6,1,4,2,10,0,2,8]));
