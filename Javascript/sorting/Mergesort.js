function merge(l, r) {
  var result = [];
  for (var lp=0, rp=0; lp < l.length || rp < r.length;) {
    if (l[lp] < r[rp]) {
      result.push(l[lp++]);
    } else if (r[rp] < l[lp]) {
      result.push(r[rp++]);
    } else if (lp < l.length) {
      result.push(l[lp++])
    } else {
      result.push(r[rp++]);
    }
    // console.log(result);
  }

  return result;
}

function mergeTry(l, r) {
  var res = [];
  for (var lp=0, rp=0; lp < l.length || rp < r.length; ) {
    if (l[lp] <= r[rp]) {
      res.push(l[lp++]);
    } else if (l[lp] >= r[rp] ){
      res.push(r[rp++]);
    } else if (lp < l.length) {
      res.push(l[lp++]);
    } else {
      res.push(r[rp++]);
    }
  }
  return res;
}

console.log(mergeTry([7, 8, 9,10,11,12,13,15],[1, 2, 3,4 ,5 ,6]));


function mergeSort(arr) {
if (!arr.length) {
  return 'empty array';
}

  if(arr.length ===1 ) {
    return arr;
  }

  var leftSorted = mergeSort(arr.slice(0, arr.length/2));
  var rightSorted = mergeSort(arr.slice(arr.length/2));

  return mergeTry(leftSorted, rightSorted);
}

console.log(mergeSort([10,2,5,8,2,4,3,9,6]));

console.log(mergeSort([]));

console.log(mergeSort([10, Number.MAX_SAFE_INTEGER, 123,344, 7129129, 820379823]));
