function isPermAPalindrom(str) {
  var charCount = {};
 // str = str.replace(/\s/g, '');
 var a = 'a'.charCodeAt('a'.indexOf('a'));
 var z = 'z'.charCodeAt('z'.indexOf('z'));
  for (var i=0;i<str.length;i++) {
    if (!(a <= str.charCodeAt(i) && str.charCodeAt(i) <=z)) {
      continue;
    }
    if(charCount[str.charAt(i)]) {
      charCount[str.charAt(i)]++;
    } else {
      charCount[str.charAt(i)] = 1;
    }
  }
  console.log(charCount);
  var foundOdd = false;
  for (var char in charCount) {
    if (charCount[char]%2 === 1) {
      if (foundOdd) {
        return false;
      }
      foundOdd = true;
    }
  }
  return true;
}

console.log(isPermAPalindrom('tact coa'));
console.log(isPermAPalindrom('tactco aobc'));
