var obj1  = {
  x: 1
};

var obj2 = Object.create(obj1);

obj1.y = 90;
obj2.z = 9;

console.log(obj2.x);
console.log(obj2.y);
console.log(obj1.y);



console.log(obj1.hasOwnProperty('x'));
console.log(obj2.hasOwnProperty('x'));

console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.getOwnPropertyNames(obj2));

console.log(Object.getPrototypeOf(obj1));

var person1 = new Object();
console.log(Object.getPrototypeOf(person1));

var obj3 = Object.create(obj2);

console.log(obj3.x);


for (var i=1 ; i<5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i*1000);
}

for (let i=1 ; i<5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i*1000);
}
