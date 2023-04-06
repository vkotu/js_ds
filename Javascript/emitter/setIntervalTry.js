class MySetInterval {
    constructor() {
    }

    setIntrvl(cb, time) {
        let timeOutId;

        function rec() {
            cb()
            timeOutId= setTimeout(rec, time);
        }
        rec();

        return {
            clearIntrvl() {
                clearTimeout(timeOutId);
            }
        }
    }
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