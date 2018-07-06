var foo = {
    a: 1
}

var baz = Object.create(foo);
baz.b = 2
// console.log(baz.a); go up the chain and gets the value
console.log(Object.getOwnPropertyNames(baz));
console.log(Object.keys(baz));

// non-enumerable property
var bam = Object.create({}, {
    getFoo: {
      value: function() { return this.foo; },
      enumerable: false
    }
  });
  bam.foo = 1;
  
  console.log(Object.getOwnPropertyNames(bam).sort()); 
  // logs ["foo", "getFoo"]
console.log(Object.keys(bam));