

var board = [
['o', 'o', 'x'],
['x', 'x', 'o'],
['x', 'x', 'o']];
function isWinner(board) {
  var len = board.length;
  // check rows

  for (var row=0; row<len;row++) {
    for (var col=0; col<len-1;) {
      if (board[row][col] !== board[row][++col]) {
        break;
      }
      if(col === len-1) {
        console.log('row');
        return true;
      }
    }
  }

  for (col=0;col<len;col++) {
    for (row=0;row<len-1;) {
      if(board[row][col] !== board[++row][col]) {
        break;
      }
      if(row === len - 1) {
        console.log('col', col);
        return true;
      }
    }
  }

  // check diag
  for(var i=0,j=len-1; j > 0;) {
    if(board[i][j] !== board[++i][--j]) {
      break;
    }
    if(j === 0) {
      console.log('diag1');
      return true;
    }
  }

  //check other diag
  // check diag
  for(var i=len-1,j=len-1; i >0;) {
    if(board[i][j] !== board[--i][--j]) {
      break;
    }
    if(i === 0) {
      console.log('diag');
      return true;
    }
  }
  return false;
}

console.log(isWinner(board));
