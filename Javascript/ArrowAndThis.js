global.x = 88;
global.y = 99;
function foo() {
    var x = 42;

    setTimeout(() => {
        console.log(this.x);
    }, 1000);

    setTimeout(() => {
        console.log(this.y);
    }, 1000);
}

foo.call({x: 52});
var baz = foo.bind({x: 1, y : 2});
baz();
foo();