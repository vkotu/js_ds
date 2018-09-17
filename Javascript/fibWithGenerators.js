// wrong not working

function* fibonacci(number) {
  var a = 1, b = 1, i =3;
  while (true) {
    for (; i<=number; i++) {
      // console.log(i);
      let c = a+b;
      a = b;
      b = c;
      console.log(c);
    }

    number = yield b;
    // console.log(number);
  }
}


var it = fibonacci(1);
console.log(it.next());
console.log(it.next(2));

console.log(it.next(7));
console.log(it.next(8));
console.log(it.next(10));
console.log(it.next(8));
