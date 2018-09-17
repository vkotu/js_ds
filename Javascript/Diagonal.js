var m = [
['1', '2', '3'],
['4', '5', '6'],
['7', '8', '9'],
['10', '11', '12']];

var rowCount = m.length;
var colCount = m[0].length;

for (var k=0; k<rowCount;k++) {
  var str = "";
  for(var i=k,j=0; i>=0 && j<colCount; i--,j++) {
    str += m[i][j] + ' ';
  }
  console.log(str);
}
for (var k=1; k<colCount;k++) {
  var str = "";
  for(i=rowCount-1,j=k; j<colCount&&i>=0; i--,j++) {
    str += m[i][j] + ' ';
  }
    console.log(str);
}
