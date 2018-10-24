var m = [
['1', '2', '3'],
['4', '5', '6'],
['7', '8', '9']];


var i=0,j=0;

var n = m.length;
var isUp = true;

for (var k=0; k<n*n;) {
  if(isUp) {
    for (; i>=0 && j<n;i--,j++) {
      console.log(m[i][j]);
       k++
    }
    if (j===n) {
      i = i+2;
      j = n-1;
    }
    if (i<0 && j<=n-1) {
      i = 0;
    }
  }else {
    for (; i<n && j>=0; i++,j--) {
      console.log(m[i][j]);
       k++
    }
    if (i === n) {
      j = j+2;
      i = i-1;
    }
    if (j<0 && i<=n-1) {
      j=0;
    }
  }
  isUp = !isUp;
}
