

var board = [['x', 'x', 'x'],
['x', 'o', 'o'],
['o', 'z', 'x']];
function isWinner(board) {
  var won = false;
  var isDaig = true;

  for (var row = 0; row < board.length; row++) {
    var isRowOk = true;
    for (var col = 0; col < board.length; col++) {
      if (row == col) {
        if (board[row][col] !== 'x' && isDaig) {
          isDaig = false;
        }
      }
      if (board[row][col] !== 'x') {
        isRowOk = false;
      }
    }
    if (isRowOk) {
      won = true;
      break;
    }
  }
  if (isDaig) {
    won = true;
  }
  if(!won) {
    for(var col= 0; col< board.length; col++) {
      var isColOk = true;
      for(var row = 0; row< board.length; row++) {
        if(board[row][col] !== 'x') {
          isColOk = false;
          break;
        }
      }
      if(isColOk) {
        won = true;
        break;
      }
    }
  }
  return won;
}

console.log(isWinner(board));
