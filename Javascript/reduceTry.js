Array.prototype.reduce2 = Array.prototype.reduce2 || function (cb, initialVal){
  const arr = this;
  let i = 0;
  let result = initialVal || arr[i++];
  for(;i<arr.length;i++) {
    result = cb(result, arr[i]);
  }
  return result;
};

// with initial
var x = [1,2,3,4,5].reduce2(function (acc, val) {
  return acc+val;
}, 1);
console.log(x);

//with out initial
var x = [1,2,3,4,5].reduce2(function (acc, val) {
  return acc+val;
});
console.log(x);

//with out initial
x = [1,2,3,4,5].reduce2((acc, val) => {
    acc[val] = val;
    return acc;
}, {0: 0});
console.log(x);

Array.prototype.reduce3 = function (cb, initialVal) {
  var arrayInput = this;
  var result, i;
  if (initialVal !== undefined) {
    result = initialVal;
    i = 0;
  } else {
    result = arrayInput[0];
    i =1;
  }
  var length = this.length;
  var p = new Promise(function (resolve, reject) {
    function rec (cb, i) {
      var pr = cb(result, arrayInput[i]);
      pr.then(function (val) {
        result = val;
        if (i < length-1) {
          rec(cb, i+1);
        }else {
          resolve(result);
        }
      });
    }
    rec(cb,i);
  });
  return p;
}

var p = [1,2,3,4,5,6].reduce3(function (acc, val) {
  return new Promise(function (res, rej) {
    setTimeout(res(acc+val), 100);
  });
}, 0);

p.then(function (val) {
  console.log(val);
});


var p2 = ['1','2','3','4','5','6'].reduce3(function (acc, val) {
  return new Promise(function (res, rej) {
    setTimeout(res(acc+val), 100);
  });
});

p2.then(function (val) {
  console.log(val);
});
