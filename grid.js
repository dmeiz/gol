Grid = function(m, n) {
  this.cells = new Array(n);

  for (var x = 0; x < n; x++) {
    this.cells[x] = new Array(m);
    for (var y = 0; y < m; y++) {
      this.cells[x][y] = false;
    }
  }
}

Grid.prototype.eachCell = function(callback, thisArg) {
  for (var y = 0; y < this.cells.length; y++) {
    for (var x = 0; x < this.cells[y].length; x++) {
      callback.call(thisArg, x, y, this.cells[x][y]);
    }
  }
}

Grid.prototype.seed = function() {
  this.eachCell(function(x, y, state) {
    if (Math.random() > 0.5) {
      this.cells[x][y] = true;
    }
  }, this);
}

Grid.prototype.addCells = function(cells) {
  cells.forEach(function addCell(cell) {
    this.cells[cell[0]][cell[1]] = true;
  }, this);
}
