const inputField = document.getElementById('searchField');

inputField.addEventListener('keyup', debounce(search, 500));

function search (e) {
    if (e.target.value !== "") {
      console.log(`Fetching results for ${e.target.value}`);
      return 'done';
    }

}



function debounce (cb, wait) {
  var timeout;

  return function () {
    const context = this, args = arguments;

    function trigger () {
      timeout = null;
      cb.apply(context, args);
    }

    if (timeout) { clearTimeout(timeout); }
    timeout = setTimeout(trigger, wait || 500);
  }
}
