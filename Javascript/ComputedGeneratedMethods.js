var obj = {
    *[Symbol.iterator]() {
        for (var i=this.start; i<=this.end; i++){
            yield this.values[i];
        }
    },
    values: [2, 4 ,6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
    start: 3,
    end: 10
}

vals = [ ...obj ];

console.log(vals);

var obj2 = [1,2,3,4,5,6];

console.log([...obj2]);
console.log(...obj2);
function foo (z, y, ...args) {
    console.log(z,y);
}

foo(...obj2);
