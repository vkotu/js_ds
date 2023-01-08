 function sleep(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    }) 
}

    async function run() {
        await sleep(500);
        console.log('hello');
        await sleep(500);
        console.log('world');
    }

    async function test() {
        await run();
    }

    test();