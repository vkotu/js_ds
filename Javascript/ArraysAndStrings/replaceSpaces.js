function replaceSpaces (str , len) {
  var arr = str.trim().split(" ");
  return arr.join("%20");
}

function replaceSpaces2(str) {
  str = str.replace(/^\s+|\s+$/g, "");
  console.log("/"+str+"/");
  return str.replace(/\s+/g, "%20");
}

console.log(replaceSpaces("Mr John Smith   "));
console.log(replaceSpaces2(" Mr John Smith   "));

var str = "123";

console.log(str.length);

str[3] = "s";
console.log(str[3]);

// function ctciSol (str, trueLength) {
//   var spaceCount = 0;
//   str = str.trim();
//   for(var i=0; i<trueLength ; i++) {
//     if(str[i] === ' ') {
//       spaceCount++;
//     }
//   }
//   var index = trueLength + spaceCount * 2;
//   //
//   for (i = trueLength -1; i >=0; i--) {
//     if(str[i] === ' '){
//       str[index-1] = '0';
//       str[index-2] = '2';
//       str[index-3] = '%';
//       index = index -3;
//     } else {
//       str[index-1]= str[i];
//       index = index -1;
//     }
//     console.log(str[index]);
//   }
//   return str;
//
// }

// console.log(ctciSol("Mr John Smith   ", 13));
