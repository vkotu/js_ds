function Foo (who) {
    this.me = who;
}


Foo.prototype.identify = function () {
    console.log(this.me);
}

function Bar(who) {
    Foo.call(this, who)
}

Bar.prototype = Object.create(Foo.prototype);

var b1 = new Bar('john');

b1.identify();
Foo.prototype.speak = function () {
    console.log('hello');
};

b1.speak();