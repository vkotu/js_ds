

// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }
    let baz = foo.bind({bar: 'hello'})
    baz(); // Hello
*/


Function.prototype.bind2 = function (obj){
    const funcToBeCalled = this;
    return function(){
        // console.log(...arguments);
        funcToBeCalled.call(obj, [...arguments]);
    }
}

    const foo = function(a,b) {
        console.log(a,b);
        console.log(this.bar);
        console.log('####');
        return;
    }
    let baz = foo.bind2({bar: 'hello'})
    baz('a','b'); // Hello