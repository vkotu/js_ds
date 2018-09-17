var m = [
['1', '2', '3'],
['4', '5', '6'],
['7', '8', '9']];

var i=0, j=0, n=m.length;

var isUp = true;

for (var k=0; k< n*n;) {
  var str = "";
  if(isUp) {
    for(; i>=0&&j<=n-1; i--,j++) {
      str += m[i][j] + " ";
      k++;
    }
    console.log(str);
    if (i<0&&j<=n-1) {
      i = 0;
    }
    if(j==n){
      j--; i = i+2;
    }
  } else {
    for (; j>=0&&i<=n-1; j--,i++) {
      str += m[i][j] + " ";
      k++;
    }
    console.log(str);
    if (j <0 && i<=n-1) {
      j=0;
    }
    if(i==n) {
      j=j+2; i--;
    }
   }
   isUp = !isUp;
}
