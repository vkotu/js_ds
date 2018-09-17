function doSomethingElse() {
  console.log('done');
}

function doSomething () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('resolving');
    }, 2000);
  });
}

// doSomething().then(function () {
//   return doSomethingElse();
// });
//
// doSomething().then(function () {
//   doSomethingElse();
// });
//
// doSomething().then(doSomethingElse());
//
doSomething().then(doSomethingElse);
