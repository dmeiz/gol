define(["exports", "module", "app/grid"], function (exports, module, _appGrid) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var _Grid = _interopRequireDefault(_appGrid);

  var Game = (function () {
    function Game(grid) {
      _classCallCheck(this, Game);

      this.grid = grid;
    }

    _createClass(Game, [{
      key: "getGrid",
      value: function getGrid() {
        return this.grid;
      }
    }, {
      key: "nextCellState",
      value: function nextCellState(current, numNeighbors) {
        if (current) {
          if (numNeighbors < 2) {
            return false;
          } else if (numNeighbors < 4) {
            return true;
          } else {
            return false;
          }
        } else {
          if (numNeighbors === 3) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "step",
      value: function step() {
        var nextGrid = new _Grid["default"](this.grid.width(), this.grid.height());

        this.grid.eachCell(function (x, y, state) {
          if (this.nextCellState(state, this.grid.countNeighbors(x, y))) {
            nextGrid.addCells([[x, y]]);
          }
        }, this);

        this.grid = nextGrid;
      }
    }]);

    return Game;
  })();

  module.exports = Game;
});

