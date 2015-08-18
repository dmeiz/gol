function createEmptyGrid() {
  return [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ];
}

function addToGrid(grid, points) {
  points.forEach(function(point) {
    grid[point[0]][point[1]] = true;
  });
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

function countNeighbors(grid, x, y) {
  var count = 0;

  // top-left
  if ((x > 0) && (y > 0)) {
    if (grid[x - 1][y - 1]) {
      count++;
    }
  }

/*
  // top
  if (y > 0) {
    if (grid[x][y - 1]) {
      count++;
    }
  }
  */

  return count;
}

/*
function step(grid) {
  var newBoard = 
    [
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false]
    ];

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
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
