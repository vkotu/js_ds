var x = [1,2,3,4,5,6,7];

function remove (array, from , to) {
  var rest = array.slice((to || from) + 1, array.length);
  array.length = from;
  Array.push.call(array, rest);
  return array;
}

console.log(remove(x,4));