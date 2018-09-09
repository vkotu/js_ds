async function createFlow() {
    console.log("Me first");
    const data = await fetch('http://twitter.com/will/tweets/1');
    console.log(data);
}

createFlow();

console.log('Second me');