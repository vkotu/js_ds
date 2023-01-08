// Create a "shared" function that takes two array iterators
// and returns the numbers common in both arrays.

/*
    const i1 = function* () {
        yield* [0, 2, 3, 4, 9, 10];
    };
    const i2 = function* () {
        yield* [1, 2, 9, 10, 14];
    };
     // @param {Iterator} iter1
     // @param {Iterator} iter2
     //
     // @returns {Array} An array of number shared by both arrays
    function shared(iter1, iter2) {}
    shared(i1(), i2()); // [2, 9, 10]
*/
    const i1 = function* () {
        yield* [0, 2, 3, 4, 9, 10];
    };
    const i2 = function* () {
        yield* [1, 2, 9, 10, 14];
    };
     // @param {Iterator} iter1
     // @param {Iterator} iter2
     //
     // @returns {Array} An array of number shared by both arrays
    function shared(iter1, iter2) {
        let commonNumbers = [];

        let cur1 = iter1.next();
        let cur2 = iter2.next();

        while(cur1.done!==true && cur2!==true){
            if(cur1.value === cur2.value){
                commonNumbers.push(cur1.value);
                cur1 = iter1.next();
            }
            if(cur1.value < cur2.value){
                cur1 = iter1.next();
                continue;
            }
            if(cur2.value < cur1.value){
                cur2 = iter2.next();
                continue;
            }
        }
        return commonNumbers

    }
    console.log(shared(i1(), i2())); // [2, 9, 10]