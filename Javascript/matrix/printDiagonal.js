var board = [
['1', '2', '3'],
['4', '5', '6'],
['7', '8', '9'],
['10', '11', '12']];

var colCount = board[0].length;
var rowCount = board.length;

for (var k = 0; k < rowCount; k++) {
 var result = "";
  for (var row = k,col=0; row>=0 && col < colCount;) {
    result  = result + " " +  board[row][col];
    row--;
    col++;
  }
  console.log(result);
}


for (var k = 1; k < colCount; k++) {
  result = "";
  for (var row=rowCount-1, col=k; row >= 0 && col < colCount;) {
    result = result + " " + board[row][col];
    row--;
    col++;
  }
  console.log(result);
}

/////
for ( var k=colCount -1; k >=0 ; k--) {
 var result = "";
  for (var col = k, row = 0; col < colCount && row < rowCount;  ) {
    result  = result + " " +  board[row][col];
    col++;
    row++;
  }
  console.log(result);
}

for (var k = 1; k<rowCount;k++) {
  var result = "";
  for (var row =k, col=0; row<rowCount && col<colCount;) {
    result  = result + " " +  board[row][col];
    row++;
    col++;
  }
  console.log(result);
}
