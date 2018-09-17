function reverse (str) {

  if (!str || str.length === 0) {
    return;
  }
  var strAr = str.split("");
  for (var i =0 , j = strAr.length-1; i<strAr.length/2; i++,j--) {
    let temp = strAr[j];
    strAr[j] = strAr[i];
    strAr[i] = temp;
  }
  return strAr.join("");
}


console.log(reverse("abcdes"));
