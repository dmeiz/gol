define(["exports", "module", "app/grid", "app/grid_renderer", "app/game"], function (exports, module, _appGrid, _appGrid_renderer, _appGame) {
  "use strict";

  module.exports = step;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _Grid = _interopRequireDefault(_appGrid);

  var _GridRenderer = _interopRequireDefault(_appGrid_renderer);

  var _Game = _interopRequireDefault(_appGame);

  var renderer = new _GridRenderer["default"]();

  var grid = new _Grid["default"](10, 10);
  grid.seed();

  var game = new _Game["default"](grid);
  console.log(renderer.renderGrid(game.getGrid()));

  function step() {
    game.step();
    console.log(renderer.renderGrid(game.getGrid()));
  }
});

