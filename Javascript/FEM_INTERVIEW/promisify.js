

// Create a function to turn any function into a "promisfied" function.
// Any function to be promisified will always have a callback as the last argument.
// The callback will always have this signature:
//   function(result){}

/*
    const exampleFn = function (x, y, callback) {};
    const promisedFn = promisify(exampleFn);
    promisedFn().then(...).then(...)
*/

// Creating a custom setTimeout that takes callback at the end
function customSetTimeout(...args) {
    setTimeout(...args.reverse());
}
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve) => {
            function cb(result){
                resolve(result);
            }
            fn.apply(this, args.concat(cb));
        })
    }
}

let setTimeOutPromise = promisify(customSetTimeout);

function printAndReturnPromise() {
    console.log('First Callback function called');
    return setTimeOutPromise(1000);
}

function printAfterGivenTime() {
    console.log('Second Callback function called');
}

// Promise chain
setTimeOutPromise(2000)
    .then(printAndReturnPromise)
    .then(printAfterGivenTime);
