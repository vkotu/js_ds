function addOne (input) {
  var res = [];
  var isCarry = 1;

  for (var i=input.length-1 ;i>=0;i--) {
    var total = input[i] + isCarry;
    if(total === 10) {
      isCarry = 1;
    }else {
      isCarry = 0;
    }
    res[i] = total % 10;
  }

  if (isCarry === 1) {
    res[0] = 1;
    var length = res.length;
    for (var i=1; i<= length; i++) {
      res[i] = 0;
    }
  }
  return res;
}

console.log(addOne([9,9,9]));

console.log(addOne([8,9,8]));
console.log(addOne([8,9,8,9]));
