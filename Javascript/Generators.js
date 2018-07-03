var run = coroutine(function* (){
    var x = 1 + (yield null);
    var y = x + (yield null);
    yield (x+y);
});

run();
run(10);
run(30).value;