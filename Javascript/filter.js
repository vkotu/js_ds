function isBigEnough(value) {
  return value >= 10;
}


Array.prototype.filter1 = function filter2 (func) {
  var res = [];
    if(this.length > 0) {
      for(var i in this) {
        if (func(this[i])) {
          res.push(this[i]);
        }
      }
    }

    return res;
}


var filtered = [12, 5, 8, 130, 44].filter1(isBigEnough);
console.log(filtered);
