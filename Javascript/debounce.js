function debounce (cb, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    function trigger () {
      timeout = null;
      cb.apply(context, args);
    }
    if (timeout) { timeout = null; }
    timeout = setTimeout(trigger, wait || 500);
  }


}

//wont work because arrow function do not this. it behaves lexical and this will be global
function debounce2 (func, wait) {
  return (...args) => {
    var context = this;
    setTimeout(() => func.apply(context, args), wait)
  }
}



function sayHello() {
  console.log('My name is', this.name)
}

const amy = {
  name: 'amy',
  speak: debounce(sayHello, 1000),
  speak2: debounce2(sayHello, 1000)
}

amy.speak();

debounce(sayHello, 1000)();

amy.speak2();
