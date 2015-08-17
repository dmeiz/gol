function createEmptyGrid() {
  return [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ];
}

function renderBoard(board) {
  var s = "";
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j]) {
        s += "X";
      }
      else {
        s += ".";
      }
    }
    s += "\n";
  }
  console.log(s);
}

function aliveNeighbors(board, x, y) {
  var count = 0;
  // top-left
  if ((x > 0) && (y > 0)) {
    if (board[x - 1][y - 1]) {
      count++;
    }
  }

  // top
  if (y > 0) {
    if (board[x][y - 1]) {
      count++;
    }
  }

  return count;
}

/*
function step(board) {
  var newBoard = 
    [
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false]
    ];

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j]) {
        s += "X";
      }
      else {
        s += ".";
      }
    }
    s += "\n";
  }
  
}
*/
