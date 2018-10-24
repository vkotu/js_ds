function flattenArray(arr) {

  if (!Array.isArray(arr)) {
    return [arr];
  }
  var res = []
  for (var i =0;i<arr.length;i++) {
    res.concat(flattenArray(arr[i]));
  }
  return res;
}


function iter (arr) {
  if(!Array.isArray(arr)) {
    return [arr];
  }
  var res = [];
  while (arr.length) {
    var temp = arr.shift;
    if(!Array.isArray(arr)) {
      res.push(temp);
    }else {
      arr = temp.concat(arr);
    }
  }
}
