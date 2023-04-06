function binaryToDecimalConv(binaryNumber) {
    var decimal = 0n;
    // console.log(decimal);
    // console.log(Object.entries(binaryNumber));
    for(let [idx, digit] of Object.entries(binaryNumber)) {
        let power = binaryNumber.length - idx  -1;
        
        decimal += BigInt(digit) * (2n ** BigInt(power));
    }
    return decimal;
}

const result1 = binaryToDecimalConv("1111100110001100");
console.log(result1);