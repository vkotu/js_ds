var run = *function (){
    var x = 1 + (yield null);
    var y = x + (yield null);
    yield (x+y);
};

var it = run();
it.next();
it.next(10);
console.log(it.next(30).value);

function* main() {
    console.log('hello');
    yield 9;
    console.log('world');
    yield 10;
};

var it = main();

it.next();
it.next();

for (var i of main()) {
    console.log(i);
}



