function isOneEditAway (str1, str2) {
  if (Math.abs(str1.length - str2.length) >=2) {
    return false;
  }
  var charSet1 = {};
  var charSet2 = {};
  for (var i=0, j=0;i<str1.length|| j<str2.length;i++, j++) {
    if (str1.charAt(i)) {
      charSet1[str1.charAt(i)] ? charSet1[str1.charAt(i)]++ : charSet1[str1.charAt(i)] = 1;
    }
    if (str2.charAt(i)) {
      charSet2[str2.charAt(i)] ? charSet2[str2.charAt(i)]++ : charSet2[str2.charAt(i)] = 1;
    }
  }
  if (str1.length < str2.length) {
    var temp = charSet2;
    charSet2 = charSet1;
    charSet1 = temp;
  }

  var diff = 0;

  for (var  key in charSet1) {
    if (!charSet2[key]) {
      diff++;
    }
  }
  if (diff > 1) {
    return false;
  } else{
    return true;
  }
}


console.log(isOneEditAway("pale", "ple"));
console.log(isOneEditAway("alep", "ple"));
console.log(isOneEditAway("pales", "pale"));
console.log(isOneEditAway("pale", "bale"));
console.log(isOneEditAway("pale", "bae"));
