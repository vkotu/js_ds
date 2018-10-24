const numbers = [1, [2, [3]], [4],[9, [10, 11], 12]];



function flattenArray(arr) {
  if(!Array.isArray(arr)) {
    return [arr];
  }
  var result = [];
  for (var i=0; i<= arr.length-1;i++) {
    result = result.concat(flattenArray(arr[i]));
  }
  return result;
}


function flattenArray2(arr) {
    if (!Array.isArray(arr)) {
        return [arr];
    } else {
        var result = [];
        for (var i=0; i< arr.length; i++) {
            var x = flattenArray2(arr[i]);
            result = result.concat(x);
        }
        return result;
    }
}
console.log(flattenArray2(numbers));


function flattenArrayIterative(arr) {
  var result = [];
  while(arr.length) {
    var val = arr.shift();
    if (!Array.isArray(val)) {
      result.push(val);
    }else {
      arr = val.concat(arr);
      //or
      // for(let i=val.length-1; i>=0;i--) {
      //   arr.unshift(val[i]);
      // }
    }
  }
  return result;
}




console.log(flattenArrayIterative(numbers));
