const things = [ 'nest', 'Eggs', 'bite', 'gator', 'caYman', 'Grip', 'grips', 'Jaw', 'crocodilian', 'Bayou' ];


function sortArrayOfString(arr) {
  arr.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a > b ? 1 : a < b ? -1 : 0;
  });
  return arr;
}

console.log(sortArrayOfString(things));

const things2 = [ 'nest', 'Eggs', 'bite', 'gator', 'caYman', 'Grip', 'grips', 'Jaw', 'crocodilian', 'Bayou' ];

things2.sort(function(a,b){
  return a.localeCompare(b);
});

console.log(things2);
