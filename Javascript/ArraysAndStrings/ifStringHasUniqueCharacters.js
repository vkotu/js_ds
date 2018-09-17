function isUniqueCharacters(str) {
  var charSet = {};
  for(var i=0; i< str.length; i++) {
    if (charSet[str[i]]) {
      return false;
    } else {
      charSet[str[i]] = true;
    }
  }
  return true;
}

console.log(isUniqueCharacters("abcdabc"));

console.log(isUniqueCharacters("abcdefg"));
