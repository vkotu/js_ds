function dToB(base10number) {
    var binary = "";
    var next = base10number;
    while(next>0n){
        let remainder = next%2n;
        binary = remainder+binary;
        next = next/2n;
    }

    return binary;
}

dToB(7768n);