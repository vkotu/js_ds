var arr = [38, 7, 8, 10, 12];
var arr1= [1, 2, 2, 4];
var arr2 = [1, 2, 3, 2, 5, 1, 7];



function findLongIncSubArr(arr) {
  if(!arr.length) {
    return;
  }

  var maxSum = Number.MIN_SAFE_INTEGER;
  var curSum = 0;
  for(var i=0;i<arr.length;i++){
    if (arr[i+1] && arr[i+1] > arr[i]){
      curSum += arr[i];
    } else {
      curSum += arr[i];
      if(maxSum < curSum) {
        maxSum = curSum;
      }
      curSum = 0;
    }
  }
  return maxSum;
}


console.log(findLongIncSubArr(arr));
console.log(findLongIncSubArr(arr1));
console.log(findLongIncSubArr(arr2));
