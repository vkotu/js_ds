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