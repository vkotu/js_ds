function getData(d) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(d);
        }, 1000)
    });
}

getData(1).then(function (v) {
    console.log(v+1);
    it.next();
});

function* gen() {
    console.log("hello");
    yield null;
    console.log("world");
}

var it = gen();
it.next();