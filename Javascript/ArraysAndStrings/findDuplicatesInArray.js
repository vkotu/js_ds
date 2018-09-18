var arr = [1,2,3,1,3,6,6];


for (var i=0; i< arr.length; i++) {
  if (arr[Math.abs(arr[i])] >= 0) {
    arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
  } else {
    console.log(Math.abs(arr[i]));
  }
}
