function returnApple(callBack) {
    setTimeout(() => {
        callBack('🍏')
    }, 500);
};


const promisifyApple = function(returnApple) {
    return function () {
        return new Promise((resolve) => {
            returnApple((val) =>{
                resolve(val);
            })
        });
    }
}

let p = promisifyApple(returnApple);

async function test () {
    const val = await p();
    console.log('here is appple', val);
    p().then((val) => {
        console.log('here is apple', val);
    })
    console.log('after then');
            returnApple((val) =>{
                console.log(val);
            });

}

 test();

