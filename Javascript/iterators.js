var arr = ['a','b','c'];

var it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


for (var i of arr) {
    console.log(i); // a,b,c
}
// console.log(i);
for (var i in arr) {
    console.log(i);//0,1,2
}

var str = "hello";
for (var i of str) {
    console.log(i);//h,e,l,l,o
}
for (var i in str) {
    console.log(i);//0,1,2,3,4
}

[x, y ] = [ ...str ];
console.log(x, y);

// console.log(i);