import Grid from "app/grid";
import GridRenderer from "app/grid_renderer";
import Game from "app/game";

var renderer = new GridRenderer();

var grid = new Grid(10, 10);
grid.seed();

var game = new Game(grid);
console.log(renderer.renderGrid(game.getGrid()));

export default function step() {
  game.step();
  console.log(renderer.renderGrid(game.getGrid()));
}
