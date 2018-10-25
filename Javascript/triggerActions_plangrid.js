function triggerActions (count) {
  var result = [];
  var printOrder = 1;
  for (let i=1; i<=count; i++) {
    processActions(i, function(val) {
      result[i] = val;
      if (i === printOrder) {
        console.log("first method: " + val);
        while(result[++printOrder]) {
          console.log("first method: " + result[printOrder]);
        }
      }
    });
  }
}

triggerActions(5);

function processActions (i, cb) {
  setTimeout( () => { cb("processed " + i) }, Math.random() * 1000);
}


// what if it returns Promise??

function triggerActions2 (count) {
  var result = [];
  var printOrder = 1;
  for (let i=1; i<=count; i++) {
    let pr = processActions2(i);
    pr.then( (val) => {
      result[i] = val;
      if (i === printOrder) {
        console.log("second method: " + val);
        while(result[++printOrder]) {
          console.log("second method: " + result[printOrder]);
        }
      }
    });
  }
}

triggerActions2(5);

function processActions2 (i) {
  return new Promise(function (res, rej) {
      setTimeout( () => { res("processed " + i); }, Math.random() * 1000);
  });

}
