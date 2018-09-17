function isPalindrom (str) {
  for (var i=str.length-1, j=0; j <=str.length/2; i--,j++) {
      if (str.charAt(i) !== str.charAt(j)) {
        return false;
      }
  }
  return true;
}
console.log(isPalindrom('dadad'));
