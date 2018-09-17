function removeDuplicate(str) {
  var charObj = {  };
  for (var i =0 ; i<str.length; i++) {
    charObj[str.charAt(i)] = 1;
  }
  var result = "";
   for (var i in charObj) {
    result += i;
  }
  return result;
}
console.log(removeDuplicate("abc basd asdasd asdaadnkqwlqkedmpksl adsced"));
