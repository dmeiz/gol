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

function renderGrid(grid) {
  var s = "";
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
  return s;
}

function countNeighbors(grid, x, y) {
  var count = 0;

  // top-left
  if ((x > 0) && (y > 0)) {
    if (grid[x - 1][y - 1]) {
      count++;
    }
  }

  // top
  if (y > 0) {
    if (grid[x][y - 1]) {
      count++;
    }
  }

  // top-right
  if ((x < 4 - 1) && (y > 0)) {
    if (grid[x + 1][y - 1]) {
      count++;
    }
  }

  // bottom-left
  if ((x > 0) && (y < 4 - 1)) {
    if (grid[x - 1][y + 1]) {
      count++;
    }
  }

  // bottom
  if (y < 4 - 1) {
    if (grid[x][y + 1]) {
      count++;
    }
  }

  // bottom-right
  if ((x < 4 - 1) && (y < 4 - 1)) {
    if (grid[x + 1][y + 1]) {
      count++;
    }
  }

  // left
  if (x > 0) {
    if (grid[x - 1][y]) {
      count++;
    }
  }

  // right
  if (x < 4 - 1) {
    if (grid[x + 1][y]) {
      count++;
    }
  }

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
