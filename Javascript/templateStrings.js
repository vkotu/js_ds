var name = "kyle";
var oNumber = "123";
var total = 319.7;

function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
    var str = "";
    for (var i = 0; i <strings.length; i++ ) {
        if (i > 0) {
            if (typeof values[i-1] == "number") {
                str += values[i-1].toFixed(2);
            } else {
                str += values[i-1]; 
            }
        }
        str += strings[i];
    }
    return str;
}


var msg = `Hello, ${name}, your
order (#${oNumber}) was $${total}`;
console.log(msg);

var msg2 = foo`Hello, ${name}, your \
order (#${oNumber}) was $${total}`;
console.log(msg2);

