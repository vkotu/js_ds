function Foo (who) {
    this.me = who;
    this.x = 10;

}


Foo.prototype.identify = function () {
    console.log(this.me);
}

function Bar(who) {
    Foo.call(this, who);

    // this.speak = function () {
    //     console.log("bar speak");
    // }
}

Bar.prototype = Object.create(Foo.prototype);

var b1 = new Bar('john');

b1.identify();
Foo.prototype.speak = function () {
    console.log('hello');
};

b1.speak();

console.log(b1.x);
console.log(b1.me);