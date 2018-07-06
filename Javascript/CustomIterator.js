var obj = {
    [Symbol.iterator]() {
        var idx = this.start,
            en = this.end;
        var it = {
            next: () => {
                if (idx <= en) {
                    var v = this.values[idx];
                    idx++;
                    return { value: v, done: false };
                } else {
                    return {done: true}
                }
            }
        }
        return it;
    },
    values: [2, 4 ,6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
    start: 6,
    end: 13
}

vals = [ ...obj ];
console.log(vals);