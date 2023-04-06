function moveZerosToBeginning(arr) {
    let nonZeroIdx = 0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i] !== 0) {
            let temp = arr[nonZeroIdx];
            arr[nonZeroIdx] = arr[i];
            arr[i]=temp;
            nonZeroIdx++
        }
    }
    return arr;
}

const arr = [1, 0, 3, 0, 5, 0, 0, 7, 9, 0, 11, 0, 13];
console.log(moveZerosToBeginning(arr));