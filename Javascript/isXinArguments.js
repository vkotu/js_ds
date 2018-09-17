// 'use strict';
function isTwoPassed(){
  var args = [].slice.call(arguments);
  return args.indexOf(2) != -1;
}

console.log(isTwoPassed(1,4)) //false
console.log(isTwoPassed(5,3,1,2)) //true



function isEqual(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== b.length) {
    return false;
  }

  for (var i=0 ; i< aProps.length; i++) {
    if(a[aProps] !== b[aProps]) {
      return false;
    }
  }
  return true;
}


function foo () {
  bam = "bam";

}
foo();

console.log(bam);
