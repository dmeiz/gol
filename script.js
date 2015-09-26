Grid = function(m, n) {
  this.cells = new Array(n);

  for (var x = 0; x < n; x++) {
    this.cells[x] = new Array(m);
    for (var y = 0; y < m; y++) {
      this.cells[x][y] = false;
    }
  }
}

Grid.prototype.seed = function() {
  for (var y = 0; y < this.cells.length; y++) {
    for (var x = 0; x < this.cells[y].length; x++) {
      if (Math.random() > 0.5) {
        this.cells[x][y] = true;
      }
    }
  }
}

Grid.prototype.addCells = function(cells) {
  cells.forEach(function addCell(cell) {
    this.cells[cell[0]][cell[1]] = true;
  }, this);
}

// procedural stuff //

function createEmptyGrid(n, m) {
  var grid = new Array(n);

  for (var x = 0; x < n; x++) {
    grid[x] = new Array(m);
    for (var y = 0; y < m; y++) {
      grid[x][y] = false;
    }
  }

  return grid;
}

function seedGrid(grid) {
  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      if (Math.random() > 0.5) {
        grid[x][y] = true;
      }
    }
  }
}

function addToGrid(grid, points) {
  points.forEach(function(point) {
    grid[point[0]][point[1]] = true;
  });
}

function renderGrid(grid) {
  var s = "";
  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      if (grid[x][y]) {
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
  if ((x < grid.length - 1) && (y > 0)) {
    if (grid[x + 1][y - 1]) {
      count++;
    }
  }

  // bottom-left
  if ((x > 0) && (y < grid[x].length - 1)) {
    if (grid[x - 1][y + 1]) {
      count++;
    }
  }

  // bottom
  if (y < grid[x].length - 1) {
    if (grid[x][y + 1]) {
      count++;
    }
  }

  // bottom-right
  if ((x < grid.length - 1) && (y < grid[x].length - 1)) {
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
  if (x < grid.length - 1) {
    if (grid[x + 1][y]) {
      count++;
    }
  }

  return count;
}

function nextCellState(current, numNeighbors) {
  if (current) {
    if (numNeighbors < 2) {
      return false;
    }
    else if (numNeighbors < 4) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    if (numNeighbors === 3) {
      return true;
    }
  }
  return false;
}

function nextGrid(grid) {
  // for each cell
  // count neighbors
  // compute cell value (currentState, numNeighbors)
  var newGrid = createEmptyGrid(grid.length, grid[0].length);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      newGrid[i][j] = nextCellState(grid[i][j], countNeighbors(grid, i, j));
    }
  }

  return newGrid;
}
