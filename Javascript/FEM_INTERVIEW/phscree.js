function reverse(str){
    console.log([...str]);
    return str.split('').reverse().join('');
}


console.log(reverse("Hello, world!"));


function removeDups(str){
    let arr = str.split(' ');
    let obj = {};
    arr.forEach((a) => {
        obj[a] = true;
    })
    return Object.keys(obj).join(' ');
}

console.log(removeDups('this is is a test test string'));

const arr = [1,2,[3,4, [5,6,7],8],[9],10];


function flattenArray(ar){
    let res = [];

    for(let i=0;i<ar.length;i++){
        if(Array.isArray(ar[i])){
            res = res.concat(flattenArray(ar[i]));
        }else{
            res.push(ar[i]);
        }
    }

    return res;
}


function recFlatten(ar) {
    let res = [];
    while(ar.length) {
        if(Array.isArray(ar[0])){
            let t = ar.shift()
            ar = t.concat(ar);
        }else{
            res.push(ar.shift());
        }
    }
    return res;
}
// const arr = [1,2,[3,4, [5,6,7],8],[9],10];
function reduceFlatten(ar) {
    const newArray = ar.reduce((acc, curr) => {
        if(Array.isArray(curr)){
            acc = acc.concat(reduceFlatten(curr));
        }else{
            acc.push(curr);
            
        }
        return acc;
    }, [])

    return newArray;
}   

// console.log(flattenArray(arr));

// console.log(recFlatten(arr));

console.log(reduceFlatten(arr));