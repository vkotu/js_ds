function selectionSort(arr) {
  console.log('input array-> '+ arr);
  if(!arr.length) { return };
  for (var i=0; i< arr.length; i++) {
    var min = i;
    for (var j= i+1; j<arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
    console.log('pass: ' + i + '->' +  arr);
  }

}

function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp
};

console.log(selectionSort([9,4,6,1,4,2,10,0,2,8]));
