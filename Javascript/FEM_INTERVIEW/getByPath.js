// Write a function that returns the value at a give path
/*
    let testObj = {
        foo: 2,
        bar: 'car',
        baz: {x: 'xx', y: 'yy', biz: {a: 56}}
    };
    getByPath(['baz', 'biz', 'a'], testObj); //56
 */

    let testObj = {
        foo: 2,
        bar: 'car',
        baz: {x: 'xx', y: 'yy', biz: {a: 56}}
    };

    function getByPath(arr, testObj) {
        let pointer = testObj;
        arr.forEach((k) => {
            if(!pointer[k]){
                return
            }else{
                pointer = pointer[k];
            }
        })
        return pointer;
    }
    console.log(getByPath(['baz', 'biz', 'a'], testObj)); //56

    function getByPath2 ([first, ...rest], obj)  {
    if(!first || !obj[first]) {
      // Either no path was supplied or the top-level property doesnt' exist in obj
      return undefined;
    }

    if (rest.length < 1) {
      return obj[first];
    } else {
      return getByPath(rest, obj[first]);
    }
  }