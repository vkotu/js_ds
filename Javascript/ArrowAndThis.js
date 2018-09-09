global.x = 88;
global.y = 99;
function foo() {

    setTimeout(() => {
        console.log(this.x);// remembers its lexical scope
    }, 1000);

    setTimeout(function () {
        // console.log(this);
        console.log(this.x);
    }, 500);

    setTimeout(() => {
        // console.log(this);//
        console.log(this.y);
    }, 1500);
}

// foo.call({x: 52});
var baz = foo.bind({x: 1, y : 2});
baz();
// foo();


function bam () {
  return () => this.bar;
};


global.bar = "bar1";
var o1 = {bar: "bar2", foo: bam};
var o2 = {bar: "bar3"};

var f1 = bam();
var f2 = o1.foo();
var f3 = bam.call(o2);

console.log(f1());
console.log(f2());
console.log(f3());
console.log(f1.call(o2));
console.log("*********");
