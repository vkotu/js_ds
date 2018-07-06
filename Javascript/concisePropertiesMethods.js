var a = 1;
var c = "hello";
var obj = {
    a,
    b() { },
    [c]: 42,
    [c+"fn"] () {},
    *foo () {},
    *[cn+"gn"]() {}
}

console.log(obj);