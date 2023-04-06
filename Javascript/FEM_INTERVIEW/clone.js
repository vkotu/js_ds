const obj = {a: 1, b: {x: 2, y: 3}, c: {d: [1,2,3]}, e:() => {}};
function deepClone(obj) {
    if(typeof obj !== 'object' || !obj) {
        return obj
    }
    let clone = Array.isArray(obj) ? [] : {}
    for(const key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

let t = deepClone(obj);
console.log(t)