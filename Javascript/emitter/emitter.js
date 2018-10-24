class Emitter {
  constructor (events = {}){
    this.events = events;
  };

  subscribe(name, cb) {
    if(!this.events[name]){
      this.events[name] = [];
    }
    this.events[name].push(cb);

    return {
      release: () => {
        this.events[name] &&
        this.events[name].indexOf(cb) >=0 &&
        this.events[name].splice(this.events[name].indexOf(cb), 1);
      }
    }
  };

  emit(name, ...args){
    return (this.events[name] || []).map(fn => fn(...args));
  };

}

module.exports = Emitter;
