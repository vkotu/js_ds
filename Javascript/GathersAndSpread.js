function foo(x, ...args) {
    console.log(args);
    bar (...args);
    baz(...args);
}

function bar (...args) {
    console.log(args);
}

function baz (x, y, z) {
    console.log(x);
}

foo(1,2,3,4);