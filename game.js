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


/*
grid = new Grid(4, 4);
renderer = new GridRenderer();
game = new Game(grid, renderer);
game.step();
renderer.renderGrid(game.grid())

nextGrid = newGrid(grid.width(), grid.height())
grid.eachCell(function(x, y, state) {
  countNeighbors(x, y)
  if (nextCell(state, neighborCount))
    nextGrid.addCells([x, y])
})
*/
