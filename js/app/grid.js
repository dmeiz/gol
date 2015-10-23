define(["exports", "module"], function (exports, module) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Grid = (function () {
    function Grid(m, n) {
      _classCallCheck(this, Grid);

      this.cells = new Array(n);

      for (var x = 0; x < n; x++) {
        this.cells[x] = new Array(m);
        for (var y = 0; y < m; y++) {
          this.cells[x][y] = false;
        }
      }
    }

    _createClass(Grid, [{
      key: "width",
      value: function width() {
        return this.cells[0].length;
      }
    }, {
      key: "height",
      value: function height() {
        return this.cells.length;
      }
    }, {
      key: "eachCell",
      value: function eachCell(callback, thisArg) {
        for (var y = 0; y < this.cells.length; y++) {
          for (var x = 0; x < this.cells[y].length; x++) {
            callback.call(thisArg, x, y, this.cells[x][y]);
          }
        }
      }
    }, {
      key: "eachNeighbor",
      value: function eachNeighbor(x, y, callback, thisArg) {
        var deltas = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

        deltas.forEach(function (delta) {
          var neighborX = x + delta[0];
          var neighborY = y + delta[1];

          if (0 <= neighborX && neighborX < this.cells.length && (0 <= neighborY && neighborY < this.cells[0].length)) {
            callback.call(thisArg, neighborX, neighborY, this.cells[neighborX][neighborY]);
          }
        }, this);
      }
    }, {
      key: "seed",
      value: function seed() {
        this.eachCell(function (x, y, state) {
          if (Math.random() > 0.5) {
            this.cells[x][y] = true;
          }
        }, this);
      }
    }, {
      key: "addCells",
      value: function addCells(cells) {
        cells.forEach(function addCell(cell) {
          this.cells[cell[0]][cell[1]] = true;
        }, this);
      }
    }, {
      key: "countNeighbors",
      value: function countNeighbors(x, y) {
        var total = 0;
        this.eachNeighbor(x, y, function (x, y, state) {
          if (state) {
            total++;
          }
        });
        return total;
      }
    }]);

    return Grid;
  })();

  module.exports = Grid;
});

