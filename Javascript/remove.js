var x = [1,2,3,4,5,6,7];

function remove (array, from , to) {
  var rest = array.slice((to || from) + 1, array.length);
  array.length = from;
  array.push.apply(array, rest);
  return array;
}



function remove1(ar, pos) {
  var before = ar.slice(0, pos);
  var rest = ar.slice(pos+1);
  console.log(before);
  console.log(rest);
  return before.concat(rest);
}
// console.log(remove(x,4));

console.log(remove1(x,4));
