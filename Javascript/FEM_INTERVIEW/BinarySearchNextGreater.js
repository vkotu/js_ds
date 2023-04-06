function binarySearchNextGreatest(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let nextGreatest = null;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            nextGreatest = arr[mid];
            right = mid - 1;
        }
    }

    return nextGreatest;
}

console.log(binarySearchNextGreatest([3,8,19,24],3));