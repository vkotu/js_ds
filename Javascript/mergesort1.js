function merge(left, right) {

  var result = [];

  for (var lp = 0,rp=0; lp < left.length || rp < right.length;) {
    if (left[lp] <= right[rp]) {
      result.push(left[lp]);
      lp++
    }else if (right[rp] <= left[lp]) {
      result.push(right[rp]);
      rp++;
    }else if (lp < left.length) {
      result.push(left[lp++]);
    } else {
      result.push(right[rp++]);
    }

  }
  return result;

}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  var leftSorted = mergeSort(arr.slice(0, arr.length/2));
  var rightSorted = mergeSort(arr.slice(arr.length/2));

  return merge(leftSorted, rightSorted);
}


console.log(mergeSort([10,2,5,8,2,4,3,9,6]));

console.log(merge([7, 8, 9,10,11,12,13,15],[1, 2, 3,4 ,5 ,6]));
