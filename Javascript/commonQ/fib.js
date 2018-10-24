function fib (n) {
    var a = 1; b=1;

    while(n > 1) {
        var temp = a;
        a = b;
        b = temp+ b;
        n--;
    }

    return a;
}

function fibTest (n) {
    var a = 1; b=1;

    while(n > 2) {
        b = a + b;
        a = b-a;
        n--;
    }

    return b;
}


console.log(fib(6));
console.log(fibTest(6));
