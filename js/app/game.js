define(function() {

Game = function(grid) {
  this.grid = grid;
}

Game.prototype.getGrid = function() {
  return this.grid;
}

Game.prototype.nextCellState = function(current, numNeighbors) {
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

Game.prototype.step = function() {
  var nextGrid = new Grid(this.grid.width(), this.grid.height());

  this.grid.eachCell(function(x, y, state) {
    if (this.nextCellState(state, this.grid.countNeighbors(x, y))) {
      nextGrid.addCells([[x, y]]);
    }
  }, this);

  this.grid = nextGrid;
}
  
return Game;
});
