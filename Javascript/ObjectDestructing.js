function foo( ) {
    return {
        a:1, c:3, d: { e: 4 } 
    };
}
// object properties on right in case of object destructing
var {
    a = 10,
    b : X = 42,
    c : Y,
    d : Z,
    d : {
        e
    } = {}
} = foo() || {};

console.log(X);
console.log(Y);
console.log(e);
console.log(Z);


function baz ({a, b = 10, c} = {}) {
    console.log(a, b, c);
}

baz({
    c: 6,
    a: 5
});

