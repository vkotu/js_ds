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

// resolve one after one
Array.prototype.reduce3 = Array.prototype.reduce3 || function (cb, initialVal) {
  const arr = this;
  let i = 0;
  let result = initialVal || arr[i++];
  let p = new Promise(function (resolve, reject) {
    let count = 0;
    function rec(result, i) {
      let pr = cb(result, arr[i]);
      pr.then((value) => {
        if(i === arr.length -1) {
          resolve(value);
        }else {
          rec(value, i+1);
        }
      });
    };
    rec(result, i);
  });
  return p;
};

var p = [1,2,3,4,5,6].reduce3(function (acc, val) {
  return new Promise(function (res, rej) {
    setTimeout(res(acc+val), Math.random() * 1000);
  });
}, 2);

p.then(function (val) {
  console.log(val);
});


var p2 = ['1','2','3','4','5','6'].reduce3(function (acc, val) {
  return new Promise(function (res, rej) {
    setTimeout(res(acc+val), Math.random() * 1000);
  });
});

p2.then(function (val) {
  console.log(val);
});
