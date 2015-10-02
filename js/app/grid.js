define(function() {

Grid = function(m, n) {
  this.cells = new Array(n);

  for (var x = 0; x < n; x++) {
    this.cells[x] = new Array(m);
    for (var y = 0; y < m; y++) {
      this.cells[x][y] = false;
    }
  }
}

Grid.prototype.width = function() {
  return this.cells[0].length
}

Grid.prototype.height = function() {
  return this.cells.length
}

Grid.prototype.eachCell = function(callback, thisArg) {
  for (var y = 0; y < this.cells.length; y++) {
    for (var x = 0; x < this.cells[y].length; x++) {
      callback.call(thisArg, x, y, this.cells[x][y]);
    }
  }
}

Grid.prototype.eachNeighbor = function(x, y, callback, thisArg) {
  var deltas =
    [[-1,-1], [0,-1], [1,-1],
     [-1, 0],         [1, 0],
     [-1, 1], [0, 1], [1, 1]];

  deltas.forEach(function(delta) {
    var neighborX = x + delta[0];
    var neighborY = y + delta[1];

    if ((0 <= neighborX && neighborX < this.cells.length) &&
        (0 <= neighborY && neighborY < this.cells[0].length)) {
      callback.call(thisArg, neighborX, neighborY, this.cells[neighborX][neighborY]);
    }
  }, this);
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

Grid.prototype.countNeighbors = function(x, y) {
  var total = 0;
  this.eachNeighbor(x, y, function(x, y, state) {
    if (state) { total++; }
  });
  return total;
}

return Grid;
});
