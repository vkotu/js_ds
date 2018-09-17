var matrix = [
['1', '2', '3'],
['4', '5', '6'],
['7', '8', '9'],
['10', '11', '12']];

var i=0,j=0;
var n=matrix.length, m=matrix[0].length;
var isRight = true;
for(var k=0; k<n*m;) {
  console.log("k= " + k + ", row=" + i + ", col " + j);
  if (isRight) {
    var str="";
    for (; j<m; j++) {
      str += matrix[i][j] + ' ';
      k++
    }
    console.log(str);
    i=i+1;
    j=j-1;

  } else {
    var str="";
    for (; j>=0; j--) {
      str += matrix[i][j] + ' ';
      k++;
    }
    console.log(str);
    i=i+1;
    j=j+1;
  }
  isRight = !isRight;

}
