var x = 10;
global.x = 20;
function foo () {
    console.log(this.x);
    // var that = this;
    setTimeout(function () {
        console.log(this.x);
    }, 1000);

    setTimeout(function () {
        console.log(x); // 10 always
    }, 1000);

    setTimeout(() => {
        console.log(this.x);
    }, 500);
}

foo();

foo.call({x: 30});