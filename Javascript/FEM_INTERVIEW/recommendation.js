const randomString = (dict) => {
    let sum = 0;
    for(let key in dict) {
        sum = sum + dict[key];
    }
    console.log(sum);
    let randomNumber = Math.floor(Math.random() * sum);
    for(let key in dict) {
        console.log('randomNumber', randomNumber);
        randomNumber = randomNumber - dict[key];
        if(randomNumber <=0) {
            return key;
        }
    }
}

const randomStringBinarySearch = (dict) => {
    let sum = 0;
    let sumsArray = []
    for(let key in dict) {
        sum = sum + dict[key];
        sumsArray.push(sum);
    }
    console.log(sumsArray);
    let randomNumber = Math.floor(Math.random() * sum);
    for(let key in dict) {
        console.log('randomNumber', randomNumber);
        randomNumber = randomNumber - dict[key];
        if(randomNumber <=0) {
            return key;
        }
    }
}


console.log(randomStringBinarySearch({'apple': 2, 'cat': 3, 'baby': 5, 'wife': 8}))
// console.log(randomString({'apple': 2, 'cat': 3, 'baby': 5, 'wife': 8}))
// console.log(randomString({'apple': 2, 'cat': 3, 'baby': 5, 'wife': 8}))
// console.log(randomString({'apple': 2, 'cat': 3, 'baby': 5, 'wife': 8}))
// console.log(randomString({'apple': 2, 'cat': 3, 'baby': 5, 'wife': 8}))