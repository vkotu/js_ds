var arr2 = [1,4,4,2];

var arr = [1,2,4,4];


function findTwoSumTarget(arr, target) {
  var obj={};
  for (var i= 0;i<arr.length; i++) {
    if(obj[arr[i]]) {
      return [obj[arr[i]], arr[i]];
    }else {
      obj[target-arr[i]] = arr[i];
    }
  }
  return false;
}


//only if sorted
function findTwoSumTarget2(arr, target) {

  for (var i= 0, j=arr.length-1;i<j;) {
    if(arr[i]+arr[j] < target) {
      i++;
    }else if (arr[i]+arr[j] <target) {
      j--;
    }else {
      return [arr[i], arr[j]];
    }
  }
  return false;
}

console.log(findTwoSumTarget(arr2, 8));
console.log(findTwoSumTarget(arr2, 9));
console.log(findTwoSumTarget(arr2, 6));


console.log(findTwoSumTarget2(arr, 8));
console.log(findTwoSumTarget2(arr, 9));
console.log(findTwoSumTarget2(arr, 6));
