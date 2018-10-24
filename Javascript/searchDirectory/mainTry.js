const inputField = document.getElementById('searchField');

inputField.addEventListener('keyup', debounce(search, 500));

function search(e) {
  var val = e.target.value;
  console.log('searching results for query' + val );
}

function debounce(cb, wait) {
  var timeout;


  return function () {
    var args = arguments;
    var context = this;

    function trigger() {
      timeout = null;
      return cb.apply(context, args);
    }

    if(timeout) { clearTimeout(timeout);}
    timeout = setTimeout(trigger, wait || 500);
  }
}
