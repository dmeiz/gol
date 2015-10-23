import Grid from "app/grid";

export default class Game  {
  constructor(grid) {
    this.grid = grid;
  }

  getGrid() {
    return this.grid;
  }

  nextCellState(current, numNeighbors) {
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

  step() {
    var nextGrid = new Grid(this.grid.width(), this.grid.height());

    this.grid.eachCell(function(x, y, state) {
      if (this.nextCellState(state, this.grid.countNeighbors(x, y))) {
        nextGrid.addCells([[x, y]]);
      }
    }, this);

    this.grid = nextGrid;
  }
}
