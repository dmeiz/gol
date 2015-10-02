requirejs(
["app/grid", "app/grid_renderer", "app/game"],
function(Grid, GridRenderer, Game) {

var renderer = new GridRenderer();

var grid = new Grid(10, 10);
grid.seed();

var game = new Game(grid);
console.log(renderer.renderGrid(game.getGrid()));

step = function() {
  game.step();
  console.log(renderer.renderGrid(game.getGrid()));
}

});
