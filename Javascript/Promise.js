function getData(d) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(d);
        }, 1000)
    });
}

getData(1).then(function (v) {
    console.log(v+1);
    it.next("kotu");
});

function* gen() {
    console.log("hello");
    var name = yield "waiting for name";
    console.log("Mr/Ms: " + name);
}

var it = gen();
console.log(it.next().value);
