function foo () {
    return [1,,3,4,5,6,7];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1] !== undefined ? tmp[1] : 42;
var c = tmp[2];


////array destruccting
// a pattern
var [
    x, 
    y = 42, 
    z,
    ...args
] = foo() || []; 

//totaly ok

var o = {};

[
    o.x, 
    o.y = 42, 
    o.z,
    ...args
] = foo() || []; 

console.log(x, y, z);
console.log(o);
//
var i = 10, j = 20;
//swap with destructuring 
[j, i] = [i, j];

console.log(i, j);




