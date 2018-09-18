function binarySearch(inputArray, searchKey) {
    if(!inputArray || inputArray.length == 0 || !searchKey) {
        return -1;
    }
    var len = inputArray.length;
    var upperBound = len - 1;
    var lowerBound = 0;
    while(true) {
        var middle = Math.round((lowerBound + upperBound)/2);
        if(searchKey === inputArray[middle]) {
            return middle;
        } else if(lowerBound > upperBound) {
            return -1;
        } else {
            if(searchKey < inputArray[middle]) {
                upperBound = middle-1;
            } else if (searchKey > inputArray[middle]) {
                lowerBound = middle + 1;
            }
        }
    }
}

console.log("key found at index : ")
console.log(binarySearch([1,3,4,6,8,34,56,89], 2));