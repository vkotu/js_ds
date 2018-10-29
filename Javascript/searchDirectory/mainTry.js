var inp = document.getElementById('searchField');

inp.addEventListener('keyup', debounce(query, 400));

function query(e) {
  console.log('query for str ' + arguments[0].target.value);
}

function debounce (cb, wait) {
  var timeout;

  return function (e) {
    var context = this;
    var args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = undefined;
      cb.apply(context, args);
    }, wait || 500);
  }
}