/* Given a number N return the value of the Fibonacci number F(N), F(n) = F(n-1) + F(n-2)*/
//
function fibOfN_1(n) {
  if (n === 0 || n === 1) {
    return 1;
  }else {
    return fibOfN(n-1) + fibOfN(n-2);
  }
};

// console.log(fibOfN(5));

function fib2 () {
    var cache = {
        0: 1,
        1: 1
    };

    return function fibOfN_2(n) {

        if (cache[n]) {
            return cache[n];
        } else {
            var val = fibOfN_2(n-1) + fibOfN_2(n-2);
            if (!cache[n]) {
                cache[n] = val;
            }
            return val;
        }
    }
}

var fibOfN = fib2();
//
// console.log(fibOfN);
// console.log(fibOfN(5));
function fibIterativeES5(n) {
  var a = 1;
  var b = 0;
  var c = null;
  while (n > 1) {
    c = a;
    a = b + a;
    b = c;
    n--;
  }
  return a;
}
// console.log(fibIterativeES5(8));


function fibItr (n) {
  if (n <=2) {
    return 1;
  }
  let a = 1 ; b = 1;
  for (let i = 3; i<=n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibItr(8));
console.log(fibItr(12));
