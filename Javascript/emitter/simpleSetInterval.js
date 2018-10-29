class MySetInterval {
  constructor() {
    this.registeredCbs = [];
  };

  setIntrvl(cb, time) {
    var timeoutId;
    function rec() {
      cb();
      timeoutId = setTimeout(rec, time || 1000);
    }
    rec();

    return {
      clearIntrvl() {
        clearTimeout(timeoutId);
      }
    }
  };

}

var i1 = new MySetInterval();

var t1 = i1.setIntrvl(() => { console.log('i1'); }, 500);
var t2 = i1.setIntrvl(() => { console.log('i2'); }, 1000);


setTimeout(() => {
  t1.clearIntrvl();
}, 3000);

setTimeout(() => {
  t2.clearIntrvl();
}, 6000);

/* simple function */
// function mySetInternal(cb, time) {
//   function rec() {
//       cb();
//       setTimeout(rec, time);
//   }
//   rec();
// }

// mySetInternal(() => {
//   console.log('hi');
// }, 1000)