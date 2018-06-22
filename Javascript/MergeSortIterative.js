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


function mergeIterative (arr) {
  if (!arr.length) {
    return 'empty array';
  }

  var splitArray = arr.map(function (v) { return [v]; });

  while (splitArray.length > 1) {
    var result = []
    for (var i=0; i < splitArray.length; i+=2) {
      if (splitArray[i+1]) { result.push(merge(splitArray[i], splitArray[i+1])); }
      else { result.push(splitArray[i]); }
    }
    splitArray = result;
  }
  return splitArray[0];
}


console.log(mergeIterative([10,2,5,8,2,4,3,9,6]));

console.log(mergeIterative([]));

console.log(mergeIterative([10, Number.MAX_SAFE_INTEGER, 123,344, 7129129, 820379823]));
