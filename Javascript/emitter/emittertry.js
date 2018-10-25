function Emitter() {
  var events = {};
  return {
    subscribe (name, cb) {
      if (events[name]) {
        events[name].push(cb);
      }else {
        events[name] = [cb];
      }
      return {
        release() {
          if(!events[name]) {
            console.log("nothing to remove");
          } else {
            let idx = events[name].indexOf(cb);
            idx >=0 ?
              events[name].splice(idx, 1) : console.log("no callback found");
          }
        }
      }
    },
    emit(name, ...args) {
      if(!events[name]) {
        console.log("nothing subscribed");
      } else{
        events[name].forEach(function (cb){
          cb(...args);
        });
      }
    }
  };
}

const emitter = Emitter();
let count = 0;
const e2 = emitter.subscribe("e1", (num) => {
  count += num;
});

const e1 = emitter.subscribe("e1", (num) => {
  count *= num;
});

emitter.emit('e1', 1);
console.log(count);

emitter.emit('e1', 6);
console.log(count);
e1.release();


emitter.emit('e1', 6);
console.log(count);
e1.release();
